"use client";

import { useTranslations } from "next-intl";
import { WordCardReel } from "./_components/WordCardReel";

export default function Page() {
  const t = useTranslations("home");

  return (
    <main className="dashboard max-w-300 w-full mx-auto p-4 grid gap-4">
      <div>
        <h2>{t("expired")}</h2>
        <WordCardReel filter={(x) => x.nextTime.getTime() <= Date.now()} />
      </div>
      <div>
        <h2>{t("notYetExpired")}</h2>
        <WordCardReel filter={(x) => x.nextTime.getTime() > Date.now()} />
      </div>
    </main>
  );
}
