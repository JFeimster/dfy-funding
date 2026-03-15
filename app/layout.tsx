import "./globals.css";
import type { Metadata } from "next";
import { getSiteConfig } from "@/content/site";

export async function generateMetadata(): Promise<Metadata> {
  const siteConfig = getSiteConfig();
  return {
    metadataBase: new URL(siteConfig.domain),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.plainEnglish,
    openGraph: {
      title: siteConfig.name,
      description: siteConfig.plainEnglish,
      url: siteConfig.domain,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
