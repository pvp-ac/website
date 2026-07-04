import { getTranslations } from "next-intl/server";
import NotFoundView from "../not-found-view";

export default async function NotFound() {
  const t = await getTranslations("notFound");
  return <NotFoundView message={t("message")} />;
}
