import { AuthError } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export function useLocalizedSupabaseErrorMessage() {
  const t = useTranslations();

  const toastWhenError = (error: AuthError | null) => {
    if (!error) return null;

    toast.error(getLocalizedErrorMessage(error));
  };

  const getLocalizedErrorMessage = (error: AuthError) => {
    const key = `supabase.errorCodes.${error.code}`;
    return hasLocalizedErrorMessage(key)
      ? t(key)
      : `${t("shared.somethingWentWrong")} (${error.message})`;
  };

  const hasLocalizedErrorMessage = (
    code: string
  ): code is Parameters<typeof t.has>[0] => {
    return t.has(code as Parameters<typeof t.has>[0]);
  };

  return { getLocalizedErrorMessage, toastWhenError, hasLocalizedErrorMessage };
}
