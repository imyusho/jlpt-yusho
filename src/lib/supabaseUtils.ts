import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { supabase } from "./supabase";

export function useLocalizedSupabaseErrorMessage() {
  const t = useTranslations();

  const toastWhenError = (error: AuthError | PostgrestError | null) => {
    if (!error) return null;

    toast.error(getLocalizedErrorMessage(error));
  };

  const getLocalizedErrorMessage = (
    error: Pick<AuthError, "code" | "message">
  ) => {
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

const SUPABASE_ERROR_CODE_KEY = "error_code";
const SUPABASE_ERROR_DESCRIPTION_KEY = "error_description";
export function useSupabaseUrlError() {
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();

  const [error, setError] = useState<{ code: string; message: string }>();

  useEffect(() => {
    const hash = window.location.hash;
    const params = new URLSearchParams(hash.substring(1));
    const errorCode = params?.get(SUPABASE_ERROR_CODE_KEY);
    const errorDescription = params?.get(SUPABASE_ERROR_DESCRIPTION_KEY);
    if (errorCode || errorDescription)
      setError({ code: errorCode ?? "", message: errorDescription ?? "" });
  }, []);

  return error && getLocalizedErrorMessage(error);
}

export function reportVocabularyIssue({
  wordId,
  issue,
  locale,
}: {
  wordId: string;
  issue: string;
  locale: string;
}) {
  return supabase.from("vocabulary_issues").insert([
    {
      word_id: wordId,
      issue,
      locale,
    },
  ]);
}
