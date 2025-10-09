"use client";

import { Word } from "@/app/assets/api/units";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { FC, useState } from "react";

type Props = {
  locale: (typeof routing.locales)[number];
  word: Word;
  isQuiz?: boolean;
};

export const WordCard: FC<Props> = ({ word, locale, isQuiz = false }) => {
  return (
    <WordCardImpl
      key={String(isQuiz)}
      locale={locale}
      word={word}
      isQuiz={isQuiz}
    />
  );
};

export const WordCardImpl: FC<Props> = ({ word, locale, isQuiz }) => {
  const [shouldRevealAnswer, setShouldRevealAnswer] = useState(false);
  const isAnswerVisible = !isQuiz || shouldRevealAnswer;

  return (
    <Card
      className={cn(isQuiz && "cursor-pointer")}
      onClick={() => setShouldRevealAnswer((x) => !x)}
    >
      <CardHeader>
        <CardTitle
          className={cn(
            "transition-opacity",
            isAnswerVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {word.expression}
        </CardTitle>
        <CardDescription>{word.reading}</CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "text-primary grid gap-4 transition-opacity",
          isAnswerVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div>
          <div>{word.definition}</div>
          <div>{locale !== "ja" && word.meaning[locale]}</div>
        </div>
        <div>
          <div>{word.example}</div>
          <div>{locale !== "ja" && word.exampleMeaning[locale]}</div>
        </div>
      </CardContent>
    </Card>
  );
};
