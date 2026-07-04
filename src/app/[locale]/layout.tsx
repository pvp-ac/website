import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, localeMeta } from "@/i18n/routing";
import { site } from "@/site";
import Navbar from "../navbar";
import Footer from "../footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const ogLocale = hasLocale(routing.locales, locale)
    ? localeMeta[locale].og
    : localeMeta[routing.defaultLocale].og;
  return {
    openGraph: {
      title: site.name,
      description: site.tagline,
      url: `/${locale}`,
      siteName: site.name,
      type: "website",
      images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: site.name }],
      locale: ogLocale,
      alternateLocale: routing.locales
        .filter((l) => l !== locale)
        .map((l) => localeMeta[l].og),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    <html lang={locale} className="antialiased">
      <body className="min-h-dvh bg-[#09090b] text-zinc-100 flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
