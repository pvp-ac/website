import Image from "next/image";
import { Globe, Gamepad2, Heart } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-zinc-800/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.webp"
                alt="PVP.AC"
                width={26}
                height={26}
                loading="lazy"
                className="w-[26px] h-[26px] shrink-0"
              />
              <span className="text-sm font-extrabold pvp-gradient-text">PVP.AC</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">EAT, SLEEP, PVP, REPEAT</p>
          </div>

          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              {t("links")}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="https://discord.pvp.ac" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
                  {t("discord")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <Globe className="w-3.5 h-3.5" />
              {t("serverInfo")}
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                pvp.ac
              </div>
              <p className="text-xs text-zinc-400">Minecraft Java Edition 1.21+</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-800/40 gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} PVP.AC. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-zinc-400">
            {"Made with "}
            <Heart className="w-3 h-3 text-[#D9AFD9]" />
            {" by Irochi ("}
            <a href="https://irochi.moe" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-200 transition-colors">https://irochi.moe</a>
            {")"}
          </p>
        </div>
      </div>
    </footer>
  );
}
