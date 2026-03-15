import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getAllInsights } from "@/lib/content/insights";

export function InsightGrid() {
  const posts = getAllInsights().slice(0, 3);

  return (
    <section className="py-24">
      <Container>
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Insights</div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">
            Funding insights for operators.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-black/[0.08] bg-white p-6 shadow-sm transition hover:shadow-md ring-1 ring-black/[0.04]"
            >
              <time className="text-xs text-black/45" dateTime={post.date}>{post.date}</time>
              <h3 className="mt-3 text-xl font-semibold text-black">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{post.excerpt}</p>
              <Link
                href={`/insights/${post.slug}`}
                className="mt-6 inline-block text-sm font-medium text-black underline underline-offset-4 transition hover:no-underline"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
