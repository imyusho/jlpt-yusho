import { COLLECTIONS } from "@/app/assets/api/units";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Page({
  params,
}: PageProps<"/[locale]/vocabulary/[collectionId]">) {
  const t = await getTranslations("vocabulary");
  const locale = await getLocale();
  const { collectionId } = await params;
  const collection = COLLECTIONS.find((x) => x.uuid === collectionId);

  if (!collection) return "404";

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <h1>{collection.title[locale]}</h1>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {collection.decks.map((x) => {
          const vocabularyPreview = x.words.map((x) => x.reading).slice(0, 3);

          return (
            <li key={x.id}>
              <Link
                href={`/vocabulary/${collectionId}/${x.id}`}
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
                        {t("words", { count: x.words.length })}
                      </Badge>
                      {vocabularyPreview.join(", ")}
                      {vocabularyPreview.length < x.words.length && ", ..."}
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
