import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function HeroSplit() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-black/55">
            Capital Ops for Operators
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {siteConfig.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            We help businesses become fundable, secure the right capital, and install the workflows,
            automations, and systems that make funding repeatable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={siteConfig.primaryCta.href} className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white">
              {siteConfig.primaryCta.label}
            </Link>
            <Link href={siteConfig.secondaryCta.href} className="rounded-full border border-black/15 px-5 py-3 text-sm font-medium">
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8">
          <div className="text-sm font-medium text-black/55">Operator-grade model</div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="font-medium">Get fundable</div>
              <p className="mt-2 text-sm text-black/65">Clean up readiness, documentation, and positioning.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="font-medium">Get funded</div>
              <p className="mt-2 text-sm text-black/65">Execute the right capital path without the broker fog.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="font-medium">Build the system</div>
              <p className="mt-2 text-sm text-black/65">Install capital ops so future funding gets less random.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
