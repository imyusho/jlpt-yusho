import { DECKS } from "@/app/assets/api/units";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale, useTranslations } from "next-intl";
import { use } from "react";

const DEFAULT_LOCALE = "en";

export default function Page({
  params,
}: PageProps<"/[locale]/learning/vocabulary">) {
  const t = useTranslations("vocabulary");
  const { locale: localeParam } = use(params);
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : DEFAULT_LOCALE;

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <h1>{t("title")}</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {DECKS.map((x) => {
          const vocabularyPreview = x.cards.map((x) => x.reading).slice(0, 5);

          return (
            <li key={x.uuid}>
              <Link
                href={`/learning/vocabulary/${x.uuid}`}
                className="no-underline"
              >
                <Card className="size-full hover:bg-muted hover:border-secondary">
                  <CardHeader className="gap-4">
                    <CardTitle>{x.title[locale]}</CardTitle>
                    <CardDescription className="text-balance line-clamp-1">
                      <Badge
                        className="rounded-full font-mono mr-4"
                        variant="secondary"
                      >
                        {t("words", { count: x.cards.length })}
                      </Badge>
                      {vocabularyPreview.join(", ")}
                      {vocabularyPreview.length < x.cards.length && ", ..."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-primary">
                    {x.description[locale]}
                  </CardContent>
                </Card>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
