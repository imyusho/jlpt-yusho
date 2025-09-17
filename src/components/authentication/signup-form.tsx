"use client";

import { CONFIRM_EMAIL_PAGE_SEARCH_PARAM_EMAIL } from "@/app/[locale]/(authentication)/email-confirmation/page";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { cn, getEmailConfirmationRedirectUrl } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";
import { AlertMessage } from "../ui/alert";
import { Form, InputField } from "../ui/form";
import { OauthButton } from "./oauth-button";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password cannot exceed 32 characters"),
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("signupForm");
  const router = useRouter();
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(async ({ name, email, password }) => {
          const signUpResponse = await authService.signUp({
            name,
            email,
            password,
          });
          if (signUpResponse.error) {
            form.setError("root", {
              message: getLocalizedErrorMessage(signUpResponse.error),
            });
            return;
          }

          const resendResponse = await authService.resend({
            type: "signup",
            email,
            options: {
              emailRedirectTo: getEmailConfirmationRedirectUrl(),
            },
          });
          if (resendResponse.error) {
            form.setError("root", {
              message: getLocalizedErrorMessage(resendResponse.error),
            });
            return;
          }

          const url = new URL("/email-confirmation", window.location.origin);
          url.searchParams.set(CONFIRM_EMAIL_PAGE_SEARCH_PARAM_EMAIL, email);
          router.push(url.toString());
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
            name="name"
            label={t("nameLabel")}
            inputProps={{ type: "text", placeholder: t("namePlaceholder") }}
          />
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
          />
          <Button
            type="submit"
            className="w-full"
            isLoading={form.formState.isSubmitting}
          >
            {t("signUpButton")}
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              {t("or")}
            </span>
          </div>
          <OauthButton provider="google">{t("loginWithGoogle")}</OauthButton>
        </div>
        <div className="text-center text-sm">
          {t("alreadyAccount")}{" "}
          <Link href="/login" className="underline underline-offset-4">
            {t("login")}
          </Link>
        </div>
      </form>
    </Form>
  );
}
