import { PageHero } from "@/components/marketing/page-hero";
import { AudienceCards } from "@/components/marketing/audience-cards";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Who We Help",
  description: "Capital systems for service businesses, investors, and self-employed founders.",
  path: "/who-we-help",
});

export default function WhoWeHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Built for operators who need capital to move cleanly."
        description="Different business models have different readiness gaps, capital pressures, and execution risks. The model adapts to the operator."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <AudienceCards />
      <FinalCTA />
    </>
  );
}
