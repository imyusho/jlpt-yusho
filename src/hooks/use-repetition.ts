import { useEffect, useState } from "react";

const LOCAL_STORAGE_REPETITIONS_KEY = "LOCAL_STORAGE_REPETITIONS_KEY";

export type Repetition = {
  cardUuid: string;
  interval: number;
  nextTime: Date;
};

export function useRepetition(userId?: string) {
  const storageKey = `${userId}.${LOCAL_STORAGE_REPETITIONS_KEY}`;

  const [repetitions, setRepetitions] = useState<Repetition[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return;

    const parsed: (Repetition & { nextTime: string })[] = JSON.parse(raw);
    setRepetitions(
      parsed.map((r) => ({
        ...r,
        nextTime: new Date(r.nextTime),
      }))
    );
  }, [storageKey]);

  const persist = (reps: Repetition[]) => {
    const serialized = JSON.stringify(
      reps.map((r) => ({
        ...r,
        nextTime: r.nextTime.toISOString(),
      }))
    );
    localStorage.setItem(storageKey, serialized);
  };

  const upsertRepetition = (newRep: Repetition) => {
    const existing = repetitions.find((r) => r.cardUuid === newRep.cardUuid);
    const newReps = existing
      ? repetitions.map((r) => (r.cardUuid === newRep.cardUuid ? newRep : r))
      : [...repetitions, newRep];
    setRepetitions(newReps);
    persist(newReps);
  };

  const removeRepetition = (cardUuid: string) => {
    const newReps = repetitions.filter((r) => r.cardUuid !== cardUuid);
    setRepetitions(newReps);
    persist(newReps);
  };

  return { repetitions, upsertRepetition, removeRepetition };
}
