"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div>
      <Button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push("/login");
        }}
      >
        Sign out
      </Button>
    </div>
  );
}
