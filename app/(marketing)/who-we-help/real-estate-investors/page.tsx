import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Real Estate Investors",
  description: "Capital readiness and execution for investors managing timing, structure, and deployment pressure.",
  path: "/who-we-help/real-estate-investors",
});

export default function RealEstateInvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Real estate investors"
        description="For investors who need better readiness, tighter execution, and cleaner capital deployment systems."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-20">
        <Container className="rounded-3xl border border-black/10 p-6">
          <p className="text-sm leading-7 text-black/70">
            Timing matters. Structure matters. Documentation quality matters. Capital ops closes the gap between opportunity and execution.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
