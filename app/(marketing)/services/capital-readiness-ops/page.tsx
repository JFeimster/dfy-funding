import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Capital Readiness Ops",
  description: "Fix the readiness issues that block approvals and weaken terms.",
  path: "/services/capital-readiness-ops",
});

export default function CapitalReadinessOpsPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Capital Readiness Ops"
        description="Get the business positioned, documented, and operationally clean enough to pursue capital with confidence."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "See How It Works", href: "/how-it-works" }}
      />
      <section className="pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">What gets fixed</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-black/70">
              <li>• documentation gaps</li>
              <li>• weak lender positioning</li>
              <li>• messy business profile signals</li>
              <li>• approval blockers hiding in operations</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-black/70">
              <li>• readiness review</li>
              <li>• blocker map</li>
              <li>• action plan</li>
              <li>• cleaner funding posture</li>
            </ul>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
