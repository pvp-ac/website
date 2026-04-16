import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Globe, Gamepad2, Heart } from "lucide-react";
import Navbar from "./navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PVP.AC",
  description: "EAT, SLEEP, PVP, REPEAT — PVP.AC Minecraft Server",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
    >
      <body className="min-h-dvh bg-[#09090b] text-zinc-100 flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/logo.png" alt="PVP.AC" width={22} height={22} />
              <span className="text-sm font-extrabold pvp-gradient-text">PVP.AC</span>
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              EAT, SLEEP, PVP, REPEAT
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              바로가기
            </h3>
            <ul className="space-y-2">
              <FooterLink href="/dealmeter" label="매치 기록" />
              <FooterLink href="https://discord.pvp.ac" label="디스코드" external />
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
              <Globe className="w-3.5 h-3.5" />
              서버 정보
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-600">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                pvp.ac
              </div>
              <p className="text-xs text-zinc-700">
                Minecraft Java Edition 1.21+
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-800/40 gap-3">
          <p className="flex items-center gap-1 text-[11px] text-zinc-700">
            Made with <Heart className="w-3 h-3 text-[#D9AFD9]" /> by Irochi (https://irochi.moe)
          </p>
          <p className="text-[11px] text-zinc-800">
            &copy; {new Date().getFullYear()} PVP.AC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label, external }: { href: string; label: string; external?: boolean }) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  const Component = external ? "a" : Link;
  return (
    <li>
      <Component
        href={href}
        className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors"
        {...props}
      >
        {label}
      </Component>
    </li>
  );
}
