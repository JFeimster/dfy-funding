import type { MetadataRoute } from "next";
import { getSiteConfig } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  const siteConfig = getSiteConfig();
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
