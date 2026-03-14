import { buildMetadata } from "@/lib/metadata";
import { HeroSplit } from "@/components/marketing/hero-split";
import { PositioningStrip } from "@/components/marketing/positioning-strip";
import { ProblemSection } from "@/components/marketing/problem-section";
import { OfferLaneCards } from "@/components/marketing/offer-lane-cards";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { AudienceCards } from "@/components/marketing/audience-cards";
import { ProofPreview } from "@/components/marketing/proof-preview";
import { SystemsPreview } from "@/components/marketing/systems-preview";
import { InsightGrid } from "@/components/marketing/insight-grid";
import { FAQPreview } from "@/components/marketing/faq-preview";
import { FinalCTA } from "@/components/marketing/final-cta";
import { homeContent } from "@/content/home";

export const metadata = buildMetadata({
  title: "Get Fundable. Get Funded. Build a Capital System That Holds.",
  description:
    "DFY Funding helps operators become fundable, secure the right capital, and install systems that make funding repeatable.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSplit />
      <PositioningStrip items={homeContent.positioningStrip} />
      <ProblemSection problems={homeContent.problems} />
      <OfferLaneCards />
      <ProcessSteps items={homeContent.process} />
      <AudienceCards />
      <ProofPreview />
      <SystemsPreview />
      <InsightGrid />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
