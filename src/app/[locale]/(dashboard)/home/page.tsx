"use client";

import { WORDS } from "@/app/assets/api/units";
import { useAuth } from "@/context/AuthContext";
import { useRepetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { use, useRef } from "react";
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

  const containerRef = useRef<HTMLUListElement>(null);
  const shownRepetitions = repetitions
    .filter((x) => x.nextTime.getTime() < Date.now())
    .sort((a, b) =>
      a.nextTime > b.nextTime ? 1 : a.nextTime < b.nextTime ? -1 : 0
    );

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <ul ref={containerRef} className="grid">
        {shownRepetitions.map((repetition) => {
          const word = WORDS.find((x) => x.uuid === repetition.cardUuid);
          if (!word) return null;

          return (
            <li
              key={JSON.stringify(repetition)}
              className="pb-4 transition-all z-1"
            >
              <WordCard
                locale={locale}
                word={word}
                isQuiz
                onRepetitionClick={(x, e) => {
                  if (!containerRef.current) return;

                  const element = [
                    ...(containerRef.current.childNodes.values() ?? []),
                  ].find(
                    (x) => e.target instanceof Node && x.contains(e.target)
                  );

                  if (!(element instanceof HTMLLIElement)) return;

                  element.style.marginBottom = `${-element.clientHeight}px`;
                  element.style.opacity = "0";
                  element.style.zIndex = "1";

                  const duration =
                    parseFloat(getComputedStyle(element).transitionDuration) *
                    1000;

                  setTimeout(() => {
                    if (x.interval === null) {
                      removeRepetition(word.uuid);
                      return;
                    }

                    upsertRepetition({
                      cardUuid: word.uuid,
                      interval: x.interval,
                      nextTime: new Date(Date.now() + x.interval),
                    });
                  }, duration);
                }}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
