import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Agencies / Service Businesses",
  description: "Capital support for operators managing payroll, delivery, and working capital pressure.",
  path: "/who-we-help/agencies-service-businesses",
});

export default function AgenciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Agencies and service businesses"
        description="For operators who need capital to smooth cash flow, support fulfillment, hire, and scale without operational chaos."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-20">
        <Container className="rounded-3xl border border-black/10 p-6">
          <p className="text-sm leading-7 text-black/70">
            Common blockers include inconsistent documentation, weak positioning, and capital use cases that are not framed clearly enough for approval.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
