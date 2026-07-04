import type { Metadata } from "next";
import type { ReactNode } from "react";
import { site } from "@/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: `${site.name} - ${site.tagline}`,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: { url: "/apple-icon.png", sizes: "180x180" },
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.tagline,
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
