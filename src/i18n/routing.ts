import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ko", "en", "ja"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

export const localeMeta: Record<Locale, { label: string; og: string }> = {
  ko: { label: "한국어", og: "ko_KR" },
  en: { label: "English", og: "en_US" },
  ja: { label: "日本語", og: "ja_JP" },
};

export const { Link, usePathname, useRouter } = createNavigation(routing);
