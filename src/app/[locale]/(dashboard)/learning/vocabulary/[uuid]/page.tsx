import { DECKS } from "@/app/assets/api/units";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";

const DEFAULT_LOCALE = "en";

export default async function Page({
  params,
}: PageProps<"/[locale]/learning/vocabulary/[uuid]">) {
  const { locale: localeParam, uuid } = await params;
  const deck = DECKS.find((x) => x.uuid === uuid);
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : DEFAULT_LOCALE;

  if (!deck) return "404";

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <h1>{deck.title[locale]}</h1>
      <ul className="grid gap-4">
        {deck.cards.map((x, i) => (
          <li key={i}>
            <Card className="size-full">
              <CardHeader>
                <CardTitle>{x.expression}</CardTitle>
                <CardDescription>{x.reading}</CardDescription>
              </CardHeader>
              <CardContent className="text-primary grid gap-4">
                <div>
                  <div>{x.definition}</div>
                  <div>{locale !== "ja" && x.meaning[locale]}</div>
                </div>
                <div>
                  <div>{x.example}</div>
                  <div>{locale !== "ja" && x.exampleMeaning[locale]}</div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
