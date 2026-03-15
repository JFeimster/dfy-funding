import Link from "next/link";
import { Container } from "./container";
import { mainNav } from "@/content/navigation";
import { getSiteConfig } from "@/content/site";

export function SiteHeader() {
  const siteConfig = getSiteConfig();
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-black">
          {siteConfig.name}
        </Link>

        <nav className="hidden gap-8 md:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-black/70 transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.primaryCta.href}
          className="shrink-0 rounded-full bg-black px-5 py-2.5 text-sm font-medium !text-white transition hover:bg-black/90"
        >
          {siteConfig.primaryCta.label}
        </Link>
      </Container>
    </header>
  );
}
