import { COLLECTIONS } from "@/app/assets/api/units";
import { useLocale, useTranslations } from "next-intl";
import { useMemo } from "react";

type SidebarData = {
  navMain: {
    title?: string;
    items: {
      title: string;
      url: string;
      isActive?: (pathname: string, url: string) => boolean;
    }[];
  }[];
};

export const useSidebarData = (): SidebarData => {
  const locale = useLocale();
  const t = useTranslations("sidebar");

  return useMemo(() => {
    return {
      navMain: [
        {
          items: [
            {
              title: t("default.home"),
              url: "/home",
              isActive: (pathname: string, url: string) => pathname === url,
            },
          ],
        },
        {
          title: t("vocabulary"),
          items: COLLECTIONS.map((x) => {
            return {
              title: x.title[locale],
              url: `/vocabulary/${x.uuid}`,
            };
          }),
        },
      ],
    };
  }, [t, locale]);
};
