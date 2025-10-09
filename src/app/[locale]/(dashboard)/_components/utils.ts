import { useTranslations } from "next-intl";
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
          title: t("learning.title"),
          items: [
            {
              title: t("learning.vocabulary"),
              url: "/learning/vocabulary",
            },
          ],
        },
      ],
    };
  }, [t]);
};
