import Link from "next/link";
import { Container } from "@/components/layout/container";
import { audiences } from "@/content/audiences";

export function AudienceCards() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Who we help</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for operators who need capital to move cleanly.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article
              key={audience.slug}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm transition hover:shadow-md ring-1 ring-black/[0.04]"
            >
              <h3 className="text-xl font-semibold text-black">{audience.name}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{audience.summary}</p>
              <Link
                href={audience.href}
                className="mt-6 inline-block text-sm font-medium text-black underline underline-offset-4 transition hover:no-underline"
              >
                View page
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
