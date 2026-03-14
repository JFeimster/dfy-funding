import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Self-Employed Founders",
  description: "Funding support for founders whose reality is stronger than the paper trail suggests.",
  path: "/who-we-help/self-employed-founders",
});

export default function SelfEmployedFoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Help"
        title="Self-employed founders"
        description="For strong operators whose documentation, structure, or positioning keeps them from looking fundable on paper."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-20">
        <Container className="rounded-3xl border border-black/10 p-6">
          <p className="text-sm leading-7 text-black/70">
            The business can be real and the cash flow can be real while the approval posture is still weak. Readiness work changes that.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
