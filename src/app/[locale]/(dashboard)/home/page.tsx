"use client";

import { WORDS } from "@/app/assets/api/units";
import { useAuth } from "@/context/AuthContext";
import { useRepetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { use } from "react";
import { WordCard } from "../vocabulary/[collectionUuid]/[uuid]/_components/WordCard";

const DEFAULT_LOCALE = "en";

export default function Page({ params }: PageProps<"/[locale]/home">) {
  const { locale: localeParam } = use(params);
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : DEFAULT_LOCALE;

  const { user } = useAuth();
  const { repetitions, upsertRepetition, removeRepetition } = useRepetition(
    user?.id
  );

  return (
    <main className="w-full p-4">
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {repetitions.map((repetition) => {
          const word = WORDS.find((x) => x.uuid === repetition.cardUuid);
          if (!word) return null;

          return (
            <li key={repetition.cardUuid}>
              <WordCard
                locale={locale}
                word={word}
                isQuiz
                repetition={repetitions.find((x) => x.cardUuid === word.uuid)}
                onRepetitionChange={(x) => {
                  if (x.interval === null) {
                    removeRepetition(word.uuid);
                    return;
                  }

                  upsertRepetition({
                    cardUuid: word.uuid,
                    interval: x.interval,
                    nextTime: new Date(Date.now() + x.interval),
                  });
                }}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
