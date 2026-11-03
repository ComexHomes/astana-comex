import type { MetadataRoute } from "next";
import { AREAS, SITE } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/residences", "/investorsguide", "/amenities", "/location", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${SITE}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...AREAS.map((a) => ({ url: `${SITE}/apartments/${a.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 })),
  ];
}
