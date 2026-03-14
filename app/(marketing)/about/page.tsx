import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: "Why DFY Funding exists and how the capital ops model is different.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Funding first. Capital ops differentiation. Systems that hold."
        description="DFY Funding exists for operators who need more than a loan broker and care about building a repeatable capital capability."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-20">
        <Container className="max-w-3xl rounded-3xl border border-black/10 p-6 md:p-8">
          <p className="text-sm leading-7 text-black/70">
            The point is not to perform fake SaaS theater or sell generic broker referrals. The point is to help businesses become fundable, execute the right capital path, and install the systems that improve repeatability.
          </p>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
