"use client";

import Redirect from "@/components/redirect";
import { useAuth } from "@/context/AuthContext";
import { useSupabaseUrlError } from "@/lib/supabaseUtils";
import { Loader2Icon } from "lucide-react";

export default function EmailConfirmationRedirectPage() {
  const { user, isLoading } = useAuth();
  const error = useSupabaseUrlError();

  if (isLoading) return <Loader2Icon className="animate-spin" />;

  if (user) return <Redirect to="dashboard" />;

  return error;
}
