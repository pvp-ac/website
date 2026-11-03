import Image from "next/image";
import { Globe, Gamepad2, Heart } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { site } from "@/site";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className="border-t border-zinc-800/60 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/logo.webp"
                alt={site.name}
                width={26}
                height={26}
                loading="lazy"
                className="w-[26px] h-[26px] shrink-0"
              />
              <span className="text-sm font-extrabold pvp-gradient-text">{site.name}</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">{site.tagline}</p>
          </div>

          <div>
            <h2 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              {t("links")}
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href={site.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {t("discord")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
              <Globe className="w-3.5 h-3.5" />
              {t("serverInfo")}
            </h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <div className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                {site.address}
              </div>
              <p className="text-xs text-zinc-400">Minecraft: Java Edition 1.21+</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-zinc-800/40 gap-3">
          <p className="text-xs text-zinc-400">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-400">
            {t.rich("madeBy", {
              heart: () => (
                <Heart
                  role="img"
                  aria-label={t("love")}
                  className="inline w-3 h-3 align-[-1px] text-brand-pink"
                />
              ),
              link: (chunks) => (
                <a
                  href="https://irochi.moe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-zinc-200 transition-colors"
                >
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
