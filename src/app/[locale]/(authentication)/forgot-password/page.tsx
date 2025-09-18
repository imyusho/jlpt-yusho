"use client";

import { CardLayout } from "@/components/card-layout";
import { AlertMessage } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, InputField } from "@/components/ui/form";
import { Link } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { getResetPasswordForEmailRedirectUrl } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, KeyRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ForgotPasswordPage() {
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();
  const t = useTranslations("forgotPassword");
  const tValidation = useTranslations("shared.validation");
  const formSchema = z.object({
    email: z.email({ message: tValidation("invalidEmail") }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const [hasEmailSent, setHasEmailSent] = useState(false);

  return (
    <CardLayout
      icon={<KeyRound className="size-8 text-primary" />}
      {...(hasEmailSent
        ? {
            title: t("emailSent.title"),
            description: t("emailSent.description"),
          }
        : {
            title: t("title"),
            description: t("description"),
          })}
    >
      {!hasEmailSent && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async ({ email }) => {
              const { error } = await authService.resetPasswordForEmail(email, {
                redirectTo: getResetPasswordForEmailRedirectUrl(),
              });
              if (error) {
                form.setError("root", {
                  message: getLocalizedErrorMessage(error),
                });
              } else {
                setHasEmailSent(true);
              }
            })}
            className="space-y-4"
          >
            {form.formState.errors.root?.message && (
              <AlertMessage
                variant="destructive"
                title={form.formState.errors.root.message}
              />
            )}
            <InputField
              control={form.control}
              name="email"
              label={t("emailLabel")}
              inputProps={{
                type: "email",
                placeholder: t("emailPlaceholder"),
              }}
            />

            <Button
              type="submit"
              className="w-full"
              isLoading={form.formState.isSubmitting}
            >
              {t("sendResetLink")}
            </Button>

            <div className="text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm"
              >
                <ArrowLeft className="size-4" />
                {t("backToLogin")}
              </Link>
            </div>
          </form>
        </Form>
      )}
    </CardLayout>
  );
}
