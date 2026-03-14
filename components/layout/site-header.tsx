import Link from "next/link";
import { Container } from "./container";
import { mainNav } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 bg-white">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          DFY Funding
        </Link>

        <nav className="hidden gap-6 md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-black/70 transition hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href={siteConfig.primaryCta.href} className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white">
          {siteConfig.primaryCta.label}
        </Link>
      </Container>
    </header>
  );
}
