"use client";

import { CardLayout } from "@/components/card-layout";
import { AlertMessage } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, InputField } from "@/components/ui/form";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "@/i18n/navigation";
import { authService } from "@/lib/authService";
import {
  useLocalizedSupabaseErrorMessage,
  useSupabaseUrlError,
} from "@/lib/supabaseUtils";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Loader2Icon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ForgotPasswordRedirectPage() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const error = useSupabaseUrlError();
  const { getLocalizedErrorMessage } = useLocalizedSupabaseErrorMessage();
  const t = useTranslations("forgotPasswordRedirect");
  const tValidation = useTranslations("shared.validation");
  const formSchema = z.object({
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { password: "" },
  });

  if (isLoading) return <Loader2Icon className="animate-spin" />;

  if (user) {
    return (
      <CardLayout
        icon={<KeyRound className="size-8 text-primary" />}
        title={t("title")}
        description={t("description")}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async ({ password }) => {
              const { error } = await authService.updateUser({
                password,
              });

              if (error) {
                form.setError("root", {
                  message: getLocalizedErrorMessage(error),
                });
              } else {
                router.push("/dashboard");
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
              name="password"
              label={t("passwordLabel")}
              inputProps={{ type: "password" }}
            />

            <Button
              type="submit"
              className="w-full"
              isLoading={form.formState.isSubmitting}
            >
              {t("reset")}
            </Button>
          </form>
        </Form>
      </CardLayout>
    );
  }

  return error;
}
