import { COLLECTIONS } from "@/app/assets/api/units";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { Unit } from "./_components/Unit";

const DEFAULT_LOCALE = "en";

export default async function Page({
  params,
}: PageProps<"/[locale]/vocabulary/[collectionUuid]/[uuid]">) {
  const { locale: localeParam, collectionUuid, uuid } = await params;
  const collection = COLLECTIONS.find((x) => x.uuid === collectionUuid);
  const deck = collection?.decks.find((x) => x.uuid === uuid);
  const locale = hasLocale(routing.locales, localeParam)
    ? localeParam
    : DEFAULT_LOCALE;

  if (!deck) return "404";

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4">
      <Unit locale={locale} deck={deck} />
    </main>
  );
}
