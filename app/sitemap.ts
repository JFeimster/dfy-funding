import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dfyfunding.com";
  const routes = [
    "",
    "/how-it-works",
    "/services",
    "/services/capital-readiness-ops",
    "/services/funding-execution",
    "/services/capital-ops-system",
    "/who-we-help",
    "/who-we-help/agencies-service-businesses",
    "/who-we-help/real-estate-investors",
    "/who-we-help/self-employed-founders",
    "/proof",
    "/insights",
    "/faq",
    "/about",
    "/start",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
