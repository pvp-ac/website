import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "PVP.AC",
  description: "PVP.AC - EAT, SLEEP, PVP, REPEAT",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "PVP.AC",
    description: "EAT, SLEEP, PVP, REPEAT",
    url: "https://pvp.ac",
    siteName: "PVP.AC",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "PVP.AC",
    description: "EAT, SLEEP, PVP, REPEAT",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" className="dark antialiased">
      <body className="min-h-dvh bg-[#09090b] text-zinc-100 flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
