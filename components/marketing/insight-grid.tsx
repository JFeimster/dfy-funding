import Link from "next/link";
import { Container } from "@/components/layout/container";
import { getAllInsights } from "@/lib/content/insights";

export function InsightGrid() {
  const posts = getAllInsights().slice(0, 3);

  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-black/55">Insights</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            Funding insights for operators.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-black/10 p-6">
              <div className="text-sm text-black/45">{post.date}</div>
              <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/70">{post.excerpt}</p>
              <Link href={`/insights/${post.slug}`} className="mt-6 inline-block text-sm font-medium underline underline-offset-4">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
