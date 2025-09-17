"use client";

import Redirect from "@/components/redirect";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="min-h-svh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="size-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{t("title")}</CardTitle>
          <CardDescription className="text-balance">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>
    </div>
  );
}
