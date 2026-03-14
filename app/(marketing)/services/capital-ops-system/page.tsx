import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Capital Ops System",
  description: "Install workflows, automations, and systems that make funding more repeatable.",
  path: "/services/capital-ops-system",
});

export default function CapitalOpsSystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Service"
        title="Capital Ops System"
        description="Turn funding from a random event into an operating capability with cleaner workflows and repeatable execution logic."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "Book a Strategy Call", href: "/contact" }}
      />
      <section className="pb-20">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">What gets installed</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-black/70">
              <li>• capital ops SOPs</li>
              <li>• readiness workflows</li>
              <li>• automation opportunities</li>
              <li>• repeatable funding process logic</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 p-6">
            <h2 className="text-xl font-semibold">What changes</h2>
            <p className="mt-4 text-sm leading-7 text-black/70">
              The business becomes easier to prepare, easier to present, and easier to fund again in future cycles.
            </p>
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
