"use client";

import { Deck } from "@/app/assets/api/units";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/context/AuthContext";
import { useRepetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { getShuffled } from "@/lib/utils";
import { Shuffle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";
import { WordCard } from "./WordCard";

type Props = {
  locale: (typeof routing.locales)[number];
  deck: Deck;
};

export const Unit: FC<Props> = ({ deck, locale }) => {
  const t = useTranslations("unit");
  const [isQuiz, setIsQuiz] = useState(false);
  const [words, setWrods] = useState(deck.words);

  const { user } = useAuth();
  const { repetitions, upsertRepetition, removeRepetition } = useRepetition(
    user?.id
  );

  return (
    <div>
      <h1>{deck.title[locale]}</h1>
      <div className="flex items-center gap-8 mb-4 justify-end">
        <Button
          variant="ghost"
          className="rounded-full size-10"
          onClick={() => setWrods((x) => getShuffled(x))}
        >
          <Shuffle />
        </Button>
        <div className="flex items-center gap-2">
          <Switch id="quiz-mode" checked={isQuiz} onCheckedChange={setIsQuiz} />
          <Label htmlFor="quiz-mode">{t("title")}</Label>
        </div>
      </div>
      <ul className="grid gap-4">
        {words.map((word) => (
          <li key={word.uuid}>
            <WordCard
              locale={locale}
              word={word}
              isQuiz={isQuiz}
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
        ))}
      </ul>
    </div>
  );
};
