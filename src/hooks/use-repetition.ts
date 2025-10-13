import { useEffect, useState } from "react";

const LOCAL_STORAGE_REPETITIONS_KEY = "LOCAL_STORAGE_REPETITIONS_KEY";

export type Repetition = {
  cardId: string;
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
    const existing = repetitions.find((r) => r.cardId === newRep.cardId);
    const newReps = existing
      ? repetitions.map((r) => (r.cardId === newRep.cardId ? newRep : r))
      : [...repetitions, newRep];
    setRepetitions(newReps);
    persist(newReps);
  };

  const removeRepetition = (cardId: string) => {
    const newReps = repetitions.filter((r) => r.cardId !== cardId);
    setRepetitions(newReps);
    persist(newReps);
  };

  return { repetitions, upsertRepetition, removeRepetition };
}
