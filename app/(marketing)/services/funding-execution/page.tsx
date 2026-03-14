import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Funding Execution",
  description: "Execute the right capital path with tighter packaging and cleaner operator support.",
  path: "/services/funding-execution",
});

export default function FundingExecutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Funding Execution"
        description="Secure the right capital with tighter process control, better packaging, and less wasted operator time."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "View Proof", href: "/proof" }}
      />
      <section className="pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">Execution focus</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-black/70">
              <li>• capital strategy</li>
              <li>• lender packaging</li>
              <li>• submission support</li>
              <li>• timeline management</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">Why it matters</h2>
            <p className="mt-4 text-sm leading-7 text-black/70">
              Capital without process creates drag, confusion, and avoidable misses. Better execution changes the quality of the outcome.
            </p>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
