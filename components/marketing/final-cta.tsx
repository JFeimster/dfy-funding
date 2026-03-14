import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/content/site";

export function FinalCTA() {
  return (
    <section className="py-24">
      <Container className="rounded-3xl bg-black px-8 py-14 text-white md:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Start with the funding plan. Build the system behind it.
          </h2>
          <p className="mt-4 text-white/75">
            For operators who need more than a broker and less fluff than fake SaaS theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={siteConfig.primaryCta.href} className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
              {siteConfig.primaryCta.label}
            </Link>
            <Link href="/proof" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white">
              View Proof
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
