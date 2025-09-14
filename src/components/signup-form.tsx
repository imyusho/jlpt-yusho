import google from "@/app/assets/svgs/google.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const t = useTranslations("signupForm");

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
          <Label htmlFor="name">{t("nameLabel")}</Label>
          <Input id="name" placeholder={t("namePlaceholder")} required />
        </div>
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
          <Label htmlFor="password">{t("passwordLabel")}</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          {t("signUpButton")}
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            {t("or")}
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image src={google} alt="Logo" className="size-4" />
          {t("loginWithGoogle")}
        </Button>
      </div>
      <div className="text-center text-sm">
        {t("alreadyAccount")}
        <Link href="/login" className="underline underline-offset-4 ml-1">
          {t("login")}
        </Link>
      </div>
    </form>
  );
}
