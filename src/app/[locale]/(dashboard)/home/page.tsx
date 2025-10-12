"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useRepetition } from "@/hooks/use-repetition";
import { Shuffle } from "lucide-react";
import { useTranslations } from "next-intl";
import { WordCardReel } from "./_components/WordCardReel";

export default function Page() {
  const t = useTranslations("home");

  const { user } = useAuth();
  const { repetitions, upsertRepetition, removeRepetition } = useRepetition(
    user?.id
  );
  const sortedRepetitions = repetitions.sort((a, b) =>
    a.nextTime > b.nextTime ? 1 : a.nextTime < b.nextTime ? -1 : 0
  );
  const sortedDueRepetitions = sortedRepetitions.filter(
    (x) => x.nextTime.getTime() <= Date.now()
  );
  const sortedNotYetDueRepetitions = sortedRepetitions.filter(
    (x) => x.nextTime.getTime() > Date.now()
  );

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      {sortedDueRepetitions.length && (
        <>
          <div className="flex items-center justify-between">
            <h2>{t("expired")}</h2>
            <Button
              variant="ghost"
              className="rounded-full size-10 mt-3"
              onClick={() => {
                sortedDueRepetitions.forEach((x) => {
                  x.nextTime = new Date(Date.now() - Math.random() * 1000);
                  upsertRepetition(x);
                });
              }}
            >
              <Shuffle />
            </Button>
          </div>
          <WordCardReel
            repetitions={sortedDueRepetitions}
            upsertRepetition={upsertRepetition}
            removeRepetition={removeRepetition}
          />
        </>
      )}
      {sortedNotYetDueRepetitions.length && (
        <>
          <h2>{t("notYetExpired")}</h2>
          <WordCardReel
            repetitions={sortedNotYetDueRepetitions}
            upsertRepetition={upsertRepetition}
            removeRepetition={removeRepetition}
          />
        </>
      )}
    </main>
  );
}
