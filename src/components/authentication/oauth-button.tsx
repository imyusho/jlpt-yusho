"use client";

import googleIcon from "@/app/assets/svgs/google.svg";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { cn } from "@/lib/utils";
import { Provider } from "@supabase/supabase-js";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  provider: keyof typeof PROVIDERS;
  children: ReactNode;
} & React.ComponentProps<"button">;

export function OauthButton({
  provider,
  className,
  children,
  ...props
}: Props) {
  const { toastWhenError } = useLocalizedSupabaseErrorMessage();
  const [isSigningIn, setIsSigningIn] = useState(false);

  return (
    <Button
      type="button"
      variant="outline"
      className={cn("w-full", className)}
      isLoading={isSigningIn}
      onClick={async () => {
        setIsSigningIn(true);
        const { error } = await authService.signInWithOAuth({
          provider,
          options: {
            redirectTo: process.env.NEXT_PUBLIC_REDIRECT_URL,
          },
        });
        if (error) {
          toastWhenError(error);
          setIsSigningIn(false);
        }
      }}
      {...props}
    >
      <Image src={PROVIDERS[provider].icon} alt="Logo" className="size-4" />
      {children}
    </Button>
  );
}

const PROVIDERS = {
  google: {
    icon: googleIcon,
  },
} as const satisfies { [key in Provider]?: ProviderConfig };

type ProviderConfig = {
  icon: string;
};
