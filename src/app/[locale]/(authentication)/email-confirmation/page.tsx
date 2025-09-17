"use client";

import Redirect from "@/components/redirect";
import { Button } from "@/components/ui/button";
import { CardLayout } from "@/components/ui/card-layout";
import { useAuth } from "@/context/AuthContext";
import { Link } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { getEmailConfirmationRedirectUrl } from "@/lib/utils";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const CONFIRM_EMAIL_PAGE_SEARCH_PARAM_EMAIL = "email";

export default function EmailConfirmationRedirectPage() {
  const t = useTranslations("emailConfirmation");
  const { toastWhenError } = useLocalizedSupabaseErrorMessage();
  const { user } = useAuth();

  const searchParams = useSearchParams();
  const email = searchParams.get(CONFIRM_EMAIL_PAGE_SEARCH_PARAM_EMAIL);

  if (user) return <Redirect to="dashboard" />;

  if (!email) return <Redirect to="/signup" />;

  return (
    <CardLayout
      icon={<Mail className="size-8 text-primary" />}
      title={t("title")}
      description={t("description")}
    >
      <div className="space-y-3">
        <Button className="w-full" asChild>
          <Link href="/login">{t("returnToLogin")}</Link>
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {t("noEmail")}{" "}
            <Button
              variant="link"
              onClick={async () => {
                const { error } = await authService.resend({
                  type: "signup",
                  email,
                  options: {
                    emailRedirectTo: getEmailConfirmationRedirectUrl(),
                  },
                });
                toastWhenError(error);
                if (!error) {
                  toast.info(t("resendConfirmationSuccess"));
                }
              }}
            >
              {t("resendConfirmation")}
            </Button>
          </p>
        </div>
      </div>
    </CardLayout>
  );
}
