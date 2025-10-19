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
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Repetition } from "@/hooks/use-repetition";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { MoreHorizontalIcon, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  useMemo,
  useRef,
  useState,
} from "react";
import { ReportIssueDialog } from "./ReportIssueDialog";

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
    cardElement: HTMLElement | null
  ) => void;
  expressionPronounciationSrc?: string;
  examplePronounciationSrc?: string;
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
  expressionPronounciationSrc,
  examplePronounciationSrc,
  className,
}) => {
  const tCompact = useTranslations("shared.interval.compact");
  const tRegular = useTranslations("shared.interval.regular");
  const t = useTranslations("home");
  const tReportIssue = useTranslations("reportIssue");
  const [shouldRevealAnswer, setShouldRevealAnswer] = useState(false);
  const isAnswerVisible = !isQuiz || shouldRevealAnswer;

  const [isReportIssueDialogOpen, setIsReportIssueDialogOpen] = useState(false);

  const cardElementRef = useRef<HTMLDivElement>(null);
  const repetitionOptions = useMemo<[number, keyof typeof IN_MS][]>(() => {
    return [
      [0, "now"],
      [1, "hour"],
      [6, "hour"],
      [1, "day"],
      [2, "day"],
      [3, "day"],
      [1, "week"],
    ];
  }, []);

  const topLevelButtonNumber = 4;

  return (
    <>
      <Card
        ref={cardElementRef}
        className="@container"
        onClick={() => {
          if (!isQuiz) return;

          setShouldRevealAnswer((x) => !x);
        }}
      >
        <CardContent
          className={cn(
            "grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-4 @xl:grid-cols-[auto_1fr_auto]",
            isQuiz && "cursor-pointer",
            className
          )}
        >
          <CardHeader className="p-0">
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
          <div
            className="@xl:col-start-1 @xl:row-start-1"
            onClick={(e) => e.stopPropagation()}
          >
            {expressionPronounciationSrc && (
              <Button
                variant="secondary"
                className="rounded-4xl size-9"
                onClick={() => new Audio(expressionPronounciationSrc).play()}
              >
                <Play />
              </Button>
            )}
          </div>

          <div
            className={cn(
              "text-primary col-span-full transition-opacity @xl:col-start-2",
              isAnswerVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {locale === "ja" ? word.definition : word.meaning[locale]}
          </div>

          <div
            className={cn(
              "text-primary transition-opacity",
              isAnswerVisible ? "opacity-100" : "opacity-0"
            )}
          >
            <div>{word.example}</div>
            <div>{locale !== "ja" && word.exampleMeaning[locale]}</div>
          </div>
          <div
            className="@xl:col-start-1 @xl:row-start-3"
            onClick={(e) => e.stopPropagation()}
          >
            {expressionPronounciationSrc && (
              <Button
                variant="secondary"
                className="rounded-4xl size-9"
                onClick={() => new Audio(examplePronounciationSrc).play()}
              >
                <Play />
              </Button>
            )}
          </div>

          <div
            className={cn(
              "transition-opacity col-span-full @xl:col-span-1 @xl:row-start-1 @xl:col-start-3",
              isAnswerVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <ButtonGroup
              className={cn("w-full")}
              orientation={"horizontal"}
              onClick={(e) => e.stopPropagation()}
            >
              {repetitionOptions.slice(0, topLevelButtonNumber).map((x, i) => {
                const interval = x[0] * IN_MS[x[1]];

                return (
                  <Button
                    key={i}
                    className={cn("border-1 flex-1")}
                    variant={
                      repetitionType === "toggle" &&
                      repetition?.interval === interval
                        ? "secondary"
                        : "outline"
                    }
                    onClick={() => {
                      onRepetitionClick(
                        {
                          cardUuid: word.id,
                          interval,
                        },
                        cardElementRef.current
                      );
                    }}
                  >
                    {tCompact(x[1], { value: x[0] })}
                  </Button>
                );
              })}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={
                      repetitionOptions
                        .slice(topLevelButtonNumber)
                        .some((x) => {
                          const interval = x[0] * IN_MS[x[1]];
                          return repetition?.interval === interval;
                        })
                        ? "secondary"
                        : "outline"
                    }
                    size="icon"
                    aria-label="More Options"
                  >
                    <MoreHorizontalIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-muted-foreground">
                      {t("reviewAgainIn")}
                    </DropdownMenuLabel>
                    {repetitionOptions
                      .slice(topLevelButtonNumber)
                      .map((x, i) => {
                        const interval = x[0] * IN_MS[x[1]];

                        const props: ComponentProps<typeof DropdownMenuItem> &
                          ComponentProps<typeof DropdownMenuCheckboxItem> = {
                          onClick: () =>
                            onRepetitionClick(
                              { cardUuid: word.id, interval },
                              cardElementRef.current
                            ),
                          children: tRegular(x[1], { value: x[0] }),
                        };

                        return repetitionType === "toggle" ? (
                          <DropdownMenuCheckboxItem
                            key={i}
                            {...props}
                            checked={repetition?.interval === interval}
                          />
                        ) : (
                          <DropdownMenuItem key={i} {...props} />
                        );
                      })}
                  </DropdownMenuGroup>
                  {repetitionType === "button" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => {
                            onRepetitionClick(
                              { cardUuid: word.id, interval: null },
                              cardElementRef.current
                            );
                          }}
                        >
                          {t("removeFromHome")}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </>
                  )}
                  {repetitionType === "button" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => setIsReportIssueDialogOpen(true)}
                        >
                          {tReportIssue("title")}
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        </CardContent>
      </Card>
      <ReportIssueDialog
        open={isReportIssueDialogOpen}
        onOpenChange={(value) => setIsReportIssueDialogOpen(value)}
        wordId={word.id}
        locale={locale}
      />
    </>
  );
};

const IN_MS = {
  now: 0,
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 30 * 24 * 60 * 60 * 1000,
  year: 365 * 24 * 60 * 60 * 1000,
} as const;
