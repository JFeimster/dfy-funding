import { PageHero } from "@/components/marketing/page-hero";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { FinalCTA } from "@/components/marketing/final-cta";
import { homeContent } from "@/content/home";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "How It Works",
  description: "How DFY Funding moves from readiness to execution to capital ops.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Funding systems, readiness, and execution for operators."
        description="We identify what is blocking approvals, support the right capital path, and install the workflows that make funding more repeatable."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <ProcessSteps items={homeContent.process} />
      <FinalCTA />
    </>
  );
}
