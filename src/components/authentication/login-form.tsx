"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { OauthButton } from "./oauth-button";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("loginForm");

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="text-muted-foreground text-sm text-balance">
          {t("description")}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">{t("emailLabel")}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t("emailPlaceholder")}
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">{t("passwordLabel")}</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              {t("forgotPassword")}
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
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
        {t("noAccount")}
        <Link href="/signup" className="underline underline-offset-4 ml-1">
          {t("signUp")}
        </Link>
      </div>
    </form>
  );
}
