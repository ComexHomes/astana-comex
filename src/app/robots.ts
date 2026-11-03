import type { MetadataRoute } from "next";
import { SITE } from "@/data/seo";

// Welcome search engines and AI assistants so Astana Residence can be cited in AI answers.
export default function robots(): MetadataRoute.Robots {
  const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Bingbot", "Applebot-Extended"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ai.map((ua) => ({ userAgent: ua, allow: "/" }))],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
