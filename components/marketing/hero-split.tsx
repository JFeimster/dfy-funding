import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getSiteConfig } from "@/content/site";

export function HeroSplit() {
  const siteConfig = getSiteConfig();
  return (
    <section className="py-24 md:py-36">
      <Container className="grid items-center gap-16 md:grid-cols-2">
        <div>
          <div className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
            Capital Ops for Operators
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {siteConfig.headline}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/70">
            We help businesses become fundable, secure the right capital, and install the workflows,
            automations, and systems that make funding repeatable.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteConfig.primaryCta.href}
              className="rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black/90"
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              href={siteConfig.secondaryCta.href}
              className="rounded-full border-2 border-black/15 px-6 py-3.5 text-sm font-medium transition hover:border-black/30 hover:bg-black/[0.02]"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-black/[0.08] bg-neutral-100/80 p-8 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-black/50">Operator-grade model</div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06]">
              <div className="font-semibold text-black">Get fundable</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">Clean up readiness, documentation, and positioning.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06]">
              <div className="font-semibold text-black">Get funded</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">Execute the right capital path without the broker fog.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/[0.06]">
              <div className="font-semibold text-black">Build the system</div>
              <p className="mt-2 text-sm leading-relaxed text-black/65">Install capital ops so future funding gets less random.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
