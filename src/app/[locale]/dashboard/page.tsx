"use client";

import { Button } from "@/components/ui/button";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";

export default function DashboardPage() {
  const { toastWhenError } = useLocalizedSupabaseErrorMessage();
  return (
    <div>
      <Button
        onClick={async () => {
          const { error } = await authService.signOut();
          toastWhenError(error);
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
