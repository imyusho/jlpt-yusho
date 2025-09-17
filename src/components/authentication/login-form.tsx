"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { cn, MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";
import { AlertMessage } from "../ui/alert";
import { Form, InputField } from "../ui/form";
import { OauthButton } from "./oauth-button";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("loginForm");
  const tValidation = useTranslations("shared.validation");
  const formSchema = z.object({
    email: z.email({ message: tValidation("invalidEmail") }),
    password: z
      .string()
      .min(
        MIN_PASSWORD_LENGTH,
        tValidation("passwordMin", { min: MIN_PASSWORD_LENGTH })
      )
      .max(
        MAX_PASSWORD_LENGTH,
        tValidation("passwordMax", { max: MAX_PASSWORD_LENGTH })
      ),
  });
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(async ({ email, password }) => {
          const { error } = await authService.signInWithPassword({
            email,
            password,
          });
          if (error) {
            form.setError("root", {
              message: getLocalizedErrorMessage(error),
            });
          }
        })}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground text-sm text-balance">
            {t("description")}
          </p>
        </div>
        <div className="grid gap-6">
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
            inputProps={{ type: "email", placeholder: t("emailPlaceholder") }}
          />
          <InputField
            control={form.control}
            name="password"
            label={t("passwordLabel")}
            inputProps={{ type: "password" }}
            auxiliaryAction={
              <Link
                href="/forgot-password"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                {t("forgotPassword")}
              </Link>
            }
          />
          <Button
            type="submit"
            className="w-full"
            isLoading={form.formState.isSubmitting}
          >
            {t("loginButton")}
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              {t("or")}
            </span>
          </div>
          <OauthButton provider="google">{t("loginWithGoogle")}</OauthButton>
        </div>
        <div className="text-center text-sm">
          {t("noAccount")} <Link href="/signup">{t("signUp")}</Link>
        </div>
      </form>
    </Form>
  );
}
