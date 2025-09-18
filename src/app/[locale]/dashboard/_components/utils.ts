import { useTranslations } from "next-intl";
import { useMemo } from "react";

export const useSidebarData = () => {
  const t = useTranslations("sidebar");

  return useMemo(() => {
    return {
      navMain: [
        {
          title: t("learning.title"),
          items: [
            {
              title: t("learning.vocabulary"),
              url: "/dashboard/learning/vocabulary",
              isActive: true,
            },
          ],
        },
        {
          title: t("quiz.title"),
          items: [
            {
              title: t("quiz.vocabulary"),
              url: "/dashboard/quiz/vocabulary",
            },
          ],
        },
      ],
    };
  }, [t]);
};
