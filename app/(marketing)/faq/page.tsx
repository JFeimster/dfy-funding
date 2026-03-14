import { PageHero } from "@/components/marketing/page-hero";
import { FAQPreview } from "@/components/marketing/faq-preview";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Common questions about DFY Funding and the capital ops model.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions before you start."
        description="Clear answers on the model, fit, and what happens next."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}
