import Link from "next/link";
import { Container } from "@/components/layout/container";
import { audiences } from "@/content/audiences";

export function AudienceCards() {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">Who we help</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for operators who need capital to move cleanly.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.slug} className="rounded-3xl border border-black/10 p-6">
              <h3 className="text-xl font-semibold">{audience.name}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{audience.summary}</p>
              <Link href={audience.href} className="mt-6 inline-block text-sm font-medium underline underline-offset-4">
                View page
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
