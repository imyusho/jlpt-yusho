"use client";

import DarkModeSwitch from "@/components/dark-mode-switch";
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

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const { user, isLoading } = useAuth();
  const { toastWhenError } = useLocalizedSupabaseErrorMessage();

  if (!isLoading && !user) return <Redirect to="/login" />;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4 sticky top-0 bg-background z-10">
          <SidebarTrigger className="-ml-1" />

          <div className="flex items-center gap-8">
            <DarkModeSwitch />
            <Button
              onClick={async () => {
                const { error } = await authService.signOut();
                toastWhenError(error);
              }}
            >
              Sign out
            </Button>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
