"use client";

import Redirect from "@/components/redirect";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SUPABASE_ACCESS_TOKEN_KEY = "access_token";
const SUPABASE_ERROR_DESCRIPTION_KEY = "error_description";

export default function EmailConfirmationRedirectPage() {
  const { user } = useAuth();
  const t = useTranslations("shared");
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();

  const [error, setError] = useState<string>();

  useEffect(() => {
    (async () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get(SUPABASE_ACCESS_TOKEN_KEY);
      const errorDescription = params?.get(SUPABASE_ERROR_DESCRIPTION_KEY);

      if (accessToken) {
        const { error } = await authService.getSession();
        if (!error) return;

        setError(getLocalizedErrorMessage(error));
        return;
      }
      setError(errorDescription ?? t("somethingWentWrong"));
    })();
  }, [getLocalizedErrorMessage, t]);

  if (user) return <Redirect to="dashboard" />;

  return error ?? <Loader2Icon className="animate-spin" />;
}
