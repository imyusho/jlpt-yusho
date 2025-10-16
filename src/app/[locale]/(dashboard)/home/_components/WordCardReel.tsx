"use client";

import * as React from "react";

import { WORDS } from "@/app/assets/api/units";
import { Repetition } from "@/hooks/use-repetition";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { WordCard } from "../../vocabulary/[collectionId]/[cardId]/_components/WordCard";

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
        const word = WORDS.find((x) => x.id === repetition.cardId);
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
                ].find((x) => x.contains(e));

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
                    removeRepetition(word.id);
                    return;
                  }

                  upsertRepetition({
                    cardId: word.id,
                    interval: x.interval,
                    nextTime: new Date(Date.now() + x.interval),
                  });
                }, duration);
              }}
              // TODO: replace hardcoded collection id and deck id with dynamic values
              expressionPronounciationSrc={`/pronounciations/9c47b2f4-3a6e-4e91-8b54-2a0f8bde7c32/${
                word.id.split("-")[0]
              }/${word.id}/expression.mp3`}
              examplePronounciationSrc={`/pronounciations/9c47b2f4-3a6e-4e91-8b54-2a0f8bde7c32/${
                word.id.split("-")[0]
              }/${word.id}/example.mp3`}
            />
          </li>
        );
      })}
    </ul>
  );
};
