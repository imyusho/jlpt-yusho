"use client";

import { Word } from "@/app/assets/api/units";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Repetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { FC, useState } from "react";

type Props = {
  locale: (typeof routing.locales)[number];
  word: Word;
  isQuiz?: boolean;
  repetition?: Repetition;
  onRepetitionChange: (rep: {
    cardUuid: string;
    interval: number | null;
  }) => void;
};

export const WordCard: FC<Props> = ({ isQuiz = false, ...rest }) => {
  return <WordCardImpl key={String(isQuiz)} isQuiz={isQuiz} {...rest} />;
};

export const WordCardImpl: FC<Props> = ({
  word,
  locale,
  isQuiz,
  repetition,
  onRepetitionChange,
}) => {
  const t = useTranslations("shared.interval");
  const [shouldRevealAnswer, setShouldRevealAnswer] = useState(false);
  const isAnswerVisible = !isQuiz || shouldRevealAnswer;

  return (
    <Card
      className={cn("@container", isQuiz && "cursor-pointer")}
      onClick={() => {
        if (!isQuiz) return;

        if (repetition && !shouldRevealAnswer) {
          onRepetitionChange({
            cardUuid: word.uuid,
            interval: repetition.interval,
          });
        }
        setShouldRevealAnswer((x) => !x);
      }}
    >
      <div className="flex gap-6 flex-col @md:flex-row">
        <div className="flex-1 flex gap-6 flex-col ">
          <CardHeader>
            <CardTitle
              className={cn(
                "transition-opacity",
                isAnswerVisible ? "opacity-100" : "opacity-0"
              )}
            >
              {word.expression}
            </CardTitle>
            <CardDescription className="text-foreground">
              {word.reading}
            </CardDescription>
          </CardHeader>
          <CardContent
            className={cn(
              "text-primary grid gap-4 transition-opacity",
              isAnswerVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <div>
              {locale === "ja" ? word.definition : word.meaning[locale]}
            </div>
            <div>
              <div>{word.example}</div>
              <div>{locale !== "ja" && word.exampleMeaning[locale]}</div>
            </div>
          </CardContent>
        </div>

        <CardContent
          className={cn(
            "transition-opacity @md:w-55 @2xl:w-80",
            isAnswerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <ToggleGroup
            type="single"
            variant="outline"
            orientation="vertical"
            className="w-full mt-4 @md:mt-0"
            onClick={(e) => e.stopPropagation()}
            value={String(repetition?.interval ?? "")}
            onValueChange={(x) => {
              onRepetitionChange({
                cardUuid: word.uuid,
                interval: x ? Number(x) : null,
              });
            }}
          >
            <ToggleGroupItem value={String(60 * 1000)}>
              {t("minute", { value: 1 })}
            </ToggleGroupItem>
            <ToggleGroupItem value={String(60 * 60 * 1000)}>
              {t("hour", { value: 1 })}
            </ToggleGroupItem>
            <ToggleGroupItem value={String(24 * 60 * 60 * 1000)}>
              {t("day", { value: 1 })}
            </ToggleGroupItem>
            <ToggleGroupItem value={String(7 * 24 * 60 * 60 * 1000)}>
              {t("week", { value: 1 })}
            </ToggleGroupItem>
          </ToggleGroup>
        </CardContent>
      </div>
    </Card>
  );
};
