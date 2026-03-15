import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { StartIntakeForm } from "@/components/forms/start-intake-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Start Your Funding Plan",
  description: "Tell DFY Funding where you are, what capital you need, and what is blocking progress.",
  path: "/start",
});

export default function StartPage() {
  return (
    <>
      <PageHero
        eyebrow="Start"
        title="Start your funding plan."
        description="Tell us what you need, where the business stands, and what is blocking progress. This is the fastest way to route you toward the right capital and support path."
      />
      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-black/[0.08] py-4 text-sm text-black/60">
            <span>No commitment</span>
            <span className="text-black/30" aria-hidden>·</span>
            <span>Reviewed within 1–2 business days</span>
            <span className="text-black/30" aria-hidden>·</span>
            <span>Next step: strategy call</span>
          </div>
          <div className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm md:p-8 ring-1 ring-black/[0.04]">
            <StartIntakeForm />
          </div>
        </Container>
      </section>
    </>
  );
}
