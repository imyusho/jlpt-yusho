"use client";

import * as React from "react";

import { WORDS } from "@/app/assets/api/units";
import { Repetition } from "@/hooks/use-repetition";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { WordCard } from "../../vocabulary/[collectionUuid]/[uuid]/_components/WordCard";

type Props = {
  repetitions: Repetition[];
  upsertRepetition: (newRep: Repetition) => void;
  removeRepetition: (cardUuid: string) => void;
};

export const WordCardReel: React.FC<Props> = ({
  repetitions,
  upsertRepetition,
  removeRepetition,
}) => {
  const locale = useLocale();

  const containerRef = useRef<HTMLUListElement>(null);

  return (
    <ul ref={containerRef} className="flex w-full overflow-x-hidden snap-x">
      {repetitions.map((repetition) => {
        const word = WORDS.find((x) => x.uuid === repetition.cardUuid);
        if (!word) return null;

        return (
          <li
            key={JSON.stringify(repetition)}
            className="w-full mr-4 flex-shrink-0 transition-all z-1"
          >
            <WordCard
              locale={locale}
              word={word}
              isQuiz
              className="h-full"
              onRepetitionClick={(x, e) => {
                if (!containerRef.current) return;

                const element = [
                  ...(containerRef.current.childNodes.values() ?? []),
                ].find((x) => e.target instanceof Node && x.contains(e.target));

                if (!(element instanceof HTMLLIElement)) return;

                element.style.marginLeft = `${-element.clientWidth}px`;
                element.style.marginRight = "0";
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
  );
};
