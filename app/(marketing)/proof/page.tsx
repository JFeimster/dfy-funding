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
        title="Outcomes that go beyond one funding event."
        description="Readiness, execution, and systems that hold—so the next cycle is easier. We keep the framing grounded and the claims honest."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <ProofPreview />
      <FinalCTA />
    </>
  );
}
