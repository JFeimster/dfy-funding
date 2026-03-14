import "./globals.css";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
