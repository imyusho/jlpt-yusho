import { UNITS } from "@/app/assets/api/units";
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
  const unit = UNITS.find((x) => x.uuid === uuid);
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : DEFAULT_LOCALE;

  if (!unit) return "404";

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <h1>{unit.title[locale]}</h1>
      <ul className="grid gap-4">
        {unit.vocabulary.map((x, i) => (
          <li key={i}>
            <Card className="size-full">
              <CardHeader className="gap-4">
                <CardTitle>{x}</CardTitle>
                <CardDescription className="text-balance line-clamp-1"></CardDescription>
              </CardHeader>
              <CardContent className="text-primary"></CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}
