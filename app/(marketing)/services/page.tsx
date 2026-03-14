import { PageHero } from "@/components/marketing/page-hero";
import { OfferLaneCards } from "@/components/marketing/offer-lane-cards";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description: "Capital readiness, funding execution, and capital ops systems.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Funding-first services built for operators."
        description="We help businesses become fundable, secure the right capital, and build the workflows that make future funding less random."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "Book a Strategy Call", href: "/contact" }}
      />
      <OfferLaneCards />
      <FinalCTA />
    </>
  );
}
