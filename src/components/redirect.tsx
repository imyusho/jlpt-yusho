"use client";

import { useRouter } from "@/i18n/navigation";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";

interface Props {
  to: string;
  replace?: boolean;
}

export default function Redirect({ to, replace }: Props) {
  const router = useRouter();

  useEffect(() => {
    router[replace ? "replace" : "push"](to);
  }, [to, replace, router]);

  return <Loader2Icon className="animate-spin" />;
}
