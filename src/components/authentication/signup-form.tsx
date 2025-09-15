"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, InputField } from "../ui/form";
import { OauthButton } from "./oauth-button";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters"),
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("signupForm");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(() => {})}
        {...props}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-muted-foreground text-sm text-balance">
            {t("description")}
          </p>
        </div>
        <div className="grid gap-6">
          <InputField
            control={form.control}
            name="username"
            label={t("usernameLabel")}
            inputProps={{ type: "text", placeholder: t("usernamePlaceholder") }}
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
          <Button type="submit" className="w-full">
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
          {t("alreadyAccount")}
          <Link href="/login" className="underline underline-offset-4 ml-1">
            {t("login")}
          </Link>
        </div>
      </form>
    </Form>
  );
}
