import Image from "next/image";
import { Gamepad2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "./locale-switcher";

export default async function Navbar() {
  const t = await getTranslations("navbar");
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#09090b]/80 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.webp"
              alt="PVP.AC"
              width={28}
              height={28}
              priority
              className="w-[28px] h-[28px] shrink-0 drop-shadow-[0_0_6px_rgba(177,200,222,0.3)] group-hover:drop-shadow-[0_0_10px_rgba(177,200,222,0.5)] transition-[filter]"
            />
            <span className="text-sm font-extrabold pvp-gradient-text">PVP.AC</span>
          </Link>

          <div className="flex items-center gap-1">
            <a
              href="https://discord.pvp.ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
            >
              <Gamepad2 className="w-4 h-4" />
              <span className="hidden sm:inline">{t("discord")}</span>
            </a>
            <LocaleSwitcher />
          </div>
        </div>
      </div>
      <div className="h-px pvp-gradient-border opacity-30" />
    </nav>
  );
}
