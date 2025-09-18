"use client";

import Redirect from "@/components/redirect";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useAuth } from "@/context/AuthContext";
import { authService } from "@/lib/authService";
import { useLocalizedSupabaseErrorMessage } from "@/lib/supabaseUtils";
import { AppSidebar } from "./_components/app-sidebar";

export default function RootLayout({
  children,
}: LayoutProps<"/[locale]/dashboard">) {
  const { user, isLoading } = useAuth();
  const { toastWhenError } = useLocalizedSupabaseErrorMessage();

  if (!isLoading && !user) return <Redirect to="/login" />;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-background">
          <SidebarTrigger className="-ml-1" />

          <Button
            onClick={async () => {
              const { error } = await authService.signOut();
              toastWhenError(error);
            }}
          >
            Sign out
          </Button>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
