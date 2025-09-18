import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ClientDarkModeDetector } from "./_components/client-dark-mode-detector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("home.meta");

  return {
    title: t("title"),
    description:
      "Study smarter for the JLPT. Practice vocabulary, grammar, kanji, and listening with interactive exercises tailored for all JLPT levels (N5 to N1).",
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider>
          <AuthProvider>{children}</AuthProvider>
          <Toaster />
          <ClientDarkModeDetector />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
