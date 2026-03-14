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
      <section className="pb-20">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-black/10 p-6 md:p-8">
            <StartIntakeForm />
          </div>
        </Container>
      </section>
    </>
  );
}
