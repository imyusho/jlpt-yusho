"use client";

import Redirect from "@/components/redirect";
import { useAuth } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: LayoutProps<"/[locale]/dashboard">) {
  const { user, isLoading } = useAuth();

  if (!isLoading && !user) return <Redirect to="login" />;

  return children;
}
