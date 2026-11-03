import Image from "next/image";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { site } from "@/site";
import CopyAddress from "../copy-address";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
        "x-default": `/${routing.defaultLocale}`,
      },
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="flex flex-col items-center">
      <section className="relative w-full flex flex-col items-center justify-center px-4 pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-radial from-brand-blue/6 to-transparent to-70%" />

        <Image
          src="/logo.webp"
          alt={site.name}
          width={80}
          height={80}
          className="relative w-[80px] h-[80px] shrink-0 drop-shadow-[0_0_24px] drop-shadow-brand-blue/25 mb-6 sm:mb-8"
          priority
        />

        <h1 className="relative text-4xl sm:text-6xl font-black tracking-tight pvp-gradient-text mb-4">
          {site.name}
        </h1>

        <p className="relative text-sm sm:text-base text-zinc-400 tracking-[0.3em] uppercase font-medium mb-10 sm:mb-14">
          {site.tagline}
        </p>

        <CopyAddress />
      </section>
    </main>
  );
}
