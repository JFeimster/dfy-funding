import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact DFY Funding or start with the structured intake flow.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="For best routing and a cleaner first step, use the structured funding plan intake."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-20">
        <Container className="max-w-3xl rounded-3xl border border-black/10 p-6 md:p-8">
          <p className="text-sm leading-7 text-black/70">
            Prefer direct contact first? Use this page for manual outreach, but keep the primary conversion path pointed at /start.
          </p>
          <div className="mt-6">
            <Link href="/start" className="underline underline-offset-4">
              Go to Start
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
