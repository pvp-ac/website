import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getLocale } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pvp.ac"),
  title: "PVP.AC",
  description: "PVP.AC - EAT, SLEEP, PVP, REPEAT",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: { url: "/favicon.png", sizes: "64x64" },
  },
  openGraph: {
    title: "PVP.AC",
    description: "EAT, SLEEP, PVP, REPEAT",
    url: "https://pvp.ac",
    siteName: "PVP.AC",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630, alt: "PVP.AC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PVP.AC",
    description: "EAT, SLEEP, PVP, REPEAT",
    images: ["/og-image.webp"],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className="dark antialiased">
      <body className="min-h-dvh bg-[#09090b] text-zinc-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
