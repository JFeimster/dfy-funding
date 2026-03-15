import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { buildMetadata } from "@/lib/metadata";
import { getSiteConfig } from "@/content/site";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Book a strategy call with DFY Funding or start with the structured intake flow.",
  path: "/contact",
});

export default function ContactPage() {
  const siteConfig = getSiteConfig();
  const bookingUrl = siteConfig.secondaryCta.href;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a strategy call."
        description="Pick a time that works. We’ll review where you are and route you to the right next step."
        primaryCta={{ label: "Start Your Funding Plan", href: "/start" }}
      />
      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-sm ring-1 ring-black/[0.04]">
            <div className="border-b border-black/[0.08] px-6 py-4">
              <h2 className="text-lg font-semibold text-black">Schedule your call</h2>
              <p className="mt-1 text-sm text-black/60">
                Can’t see the calendar?{" "}
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-black"
                >
                  Open booking in a new tab
                </a>
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] min-h-[480px] bg-neutral-100">
              <iframe
                src={bookingUrl}
                title="Book a strategy call with DFY Funding"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-black/60">
            Prefer to start with the intake first?{" "}
            <Link href="/start" className="underline underline-offset-2 hover:text-black">
              Go to Start Your Funding Plan
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}
