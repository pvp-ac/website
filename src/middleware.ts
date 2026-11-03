import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

// Stay on middleware.ts (edge runtime): Next 16 proxy.ts runs on Node, which
// OpenNext Cloudflare supports only experimentally.
export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
