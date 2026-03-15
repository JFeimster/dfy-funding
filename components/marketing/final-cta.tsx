import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getSiteConfig } from "@/content/site";

export function FinalCTA() {
  const siteConfig = getSiteConfig();
  return (
    <section className="py-28">
      <Container className="rounded-3xl bg-black px-8 py-16 text-white md:px-14 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Start with the funding plan. Build the system behind it.
          </h2>
          <p className="mt-5 text-white/80 leading-relaxed">
            For operators who need more than a broker and less fluff than fake SaaS theater.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteConfig.primaryCta.href}
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/95"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="rounded-full border-2 border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              {siteConfig.secondaryCta.label}
            </Link>
            <Link
              href="/proof"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white/90 transition hover:bg-white/5"
            >
              View Proof
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
