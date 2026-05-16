import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-black pvp-gradient-text mb-4">404</h1>
      <p className="text-zinc-400 text-sm">{t("message")}</p>
    </main>
  );
}
