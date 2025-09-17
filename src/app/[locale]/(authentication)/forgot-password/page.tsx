"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, InputField } from "@/components/ui/form";
import { Link } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import { getEmailConfirmationRedirectUrl } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, KeyRound } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ForgotPasswordPage() {
  const t = useTranslations("forgotPassword");
  const tValidation = useTranslations("shared.validation");
  const formSchema = z.object({
    email: z.email({ message: tValidation("invalidEmail") }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  return (
    <div className="min-h-svh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <KeyRound className="size-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{t("title")}</CardTitle>
          <CardDescription className="text-balance">
            {t("description")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async ({ email }) => {
                const { error } = await authService.resetPasswordForEmail(
                  email,
                  { redirectTo: getEmailConfirmationRedirectUrl() }
                );

                if (error) {
                  console.error("Error sending reset email:", error.message);
                } else {
                  console.log("Password reset email sent!");
                }
              })}
              className="space-y-4"
            >
              <InputField
                control={form.control}
                name="email"
                label={t("emailLabel")}
                inputProps={{
                  type: "email",
                  placeholder: t("emailPlaceholder"),
                }}
              />

              <Button type="submit" className="w-full">
                Send reset link
              </Button>

              <div className="text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 text-sm"
                >
                  <ArrowLeft className="size-4" />
                  Back to login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
