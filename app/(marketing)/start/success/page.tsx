import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getSiteConfig } from "@/content/site";

export default function StartSuccessPage() {
  const siteConfig = getSiteConfig();
  const bookingUrl = siteConfig.secondaryCta.href;

  return (
    <section className="py-24">
      <Container className="max-w-3xl">
        <div className="rounded-3xl border border-black/[0.08] bg-white p-8 shadow-sm ring-1 ring-black/[0.04] md:p-10">
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Your funding plan request is in.
          </h1>
          <p className="mt-5 text-black/70 leading-relaxed">
            We received your intake. The next step is to book a strategy call so we can route you to the right capital path.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={bookingUrl}
              className="rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-black/90"
            >
              {siteConfig.secondaryCta.label}
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border-2 border-black/15 px-6 py-3.5 text-sm font-medium transition hover:border-black/30"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
