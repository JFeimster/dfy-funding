import { PageHero } from "@/components/marketing/page-hero";
import { ProofPreview } from "@/components/marketing/proof-preview";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Proof",
  description: "The capital ops model in action: readiness, execution, and repeatable systems.",
  path: "/proof",
});

export default function ProofPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof"
        title="Proof that the model is bigger than one funding event."
        description="Use real case studies here when available. In v1, keep claims grounded and the framing honest."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <ProofPreview />
      <FinalCTA />
    </>
  );
}
