"use client";

import { Word } from "@/app/assets/api/units";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Repetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FC, HTMLAttributes, useMemo, useState } from "react";

type Props = {
  locale: (typeof routing.locales)[number];
  word: Word;
  isQuiz?: boolean;
  repetitionType?: "toggle" | "button";
  repetition?: Repetition;
  onRepetitionClick: (
    rep: {
      cardUuid: string;
      interval: number | null;
    },
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export const WordCard: FC<Props> = ({ isQuiz = false, ...rest }) => {
  return (
    <WordCardImpl key={JSON.stringify(isQuiz)} isQuiz={isQuiz} {...rest} />
  );
};

export const WordCardImpl: FC<Props> = ({
  word,
  locale,
  isQuiz,
  repetitionType = "button",
  repetition,
  onRepetitionClick,
  className,
}) => {
  const t = useTranslations("shared.interval");
  const [shouldRevealAnswer, setShouldRevealAnswer] = useState(false);
  const isAnswerVisible = !isQuiz || shouldRevealAnswer;

  const repetitionOptions = useMemo(() => {
    return [
      { label: t("second", { value: 0 }), value: 0 },
      { label: t("day", { value: 1 }), value: 24 * 60 * 60 * 1000 },
      { label: t("day", { value: 3 }), value: 3 * 24 * 60 * 60 * 1000 },
      { label: t("week", { value: 1 }), value: 7 * 24 * 60 * 60 * 1000 },
      ...(repetitionType === "button"
        ? [{ label: <Check />, value: null }]
        : []),
    ];
  }, [t, repetitionType]);

  return (
    <Card
      className={cn(
        "@container grid grid-cols-[1fr_auto] grid-rows-[auto_1fr]",
        isQuiz && "cursor-pointer",
        className
      )}
      onClick={() => {
        if (!isQuiz) return;

        setShouldRevealAnswer((x) => !x);
      }}
    >
      <CardHeader className="col-span-2 @xl:col-span-1">
        <CardTitle className="text-xl">{word.reading}</CardTitle>
        <CardDescription
          className={cn(
            "text-foreground text-xl transition-opacity",
            isAnswerVisible ? "opacity-100" : "opacity-0"
          )}
        >
          {word.expression}
        </CardDescription>
      </CardHeader>

      <CardContent
        className={cn(
          "text-primary transition-opacity col-span-2",
          isAnswerVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div>{locale === "ja" ? word.definition : word.meaning[locale]}</div>
        <div className="mt-4">
          <div>{word.example}</div>
          <div>{locale !== "ja" && word.exampleMeaning[locale]}</div>
        </div>
      </CardContent>

      <CardContent
        className={cn(
          "transition-opacity col-span-2 @xl:col-span-1 @xl:row-start-1 @xl:col-start-2",
          isAnswerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <ButtonGroup
          className={cn("w-full")}
          orientation={"horizontal"}
          onClick={(e) => e.stopPropagation()}
        >
          {repetitionOptions.map((x, i) => {
            return (
              <Button
                key={i}
                className={cn("border-1 flex-1")}
                variant={
                  repetitionType === "toggle" &&
                  repetition?.interval === x.value
                    ? "secondary"
                    : "outline"
                }
                onClick={(e) => {
                  onRepetitionClick(
                    {
                      cardUuid: word.uuid,
                      interval: x.value,
                    },
                    e
                  );
                }}
              >
                {x.label}
              </Button>
            );
          })}
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};
