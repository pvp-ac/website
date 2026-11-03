"use client";

import { Globe, ChevronDown } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { routing, localeMeta, usePathname, useRouter } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="ml-1 pl-2 border-l border-zinc-800/60 flex items-center gap-1">
      <Globe className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
      <div className="relative flex items-center">
        <select
          value={locale}
          onChange={(e) => router.replace(pathname, { locale: e.target.value })}
          className="appearance-none bg-transparent pl-1 pr-5 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 cursor-pointer rounded-lg hover:bg-zinc-800/60 transition-colors"
          aria-label={t("localeSwitcherLabel")}
        >
          {routing.locales.map((loc) => (
            <option key={loc} value={loc} className="bg-zinc-900 text-zinc-100">
              {localeMeta[loc].label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-0 w-3 h-3 text-zinc-500 pointer-events-none" />
      </div>
    </div>
  );
}
