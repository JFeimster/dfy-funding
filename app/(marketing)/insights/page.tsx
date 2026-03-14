import Link from "next/link";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/layout/container";
import { getAllInsights } from "@/lib/content/insights";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Insights",
  description: "Capital readiness, funding strategy, and operator-grade execution insights.",
  path: "/insights",
});

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Funding insights for operators."
        description="Clear thinking on fundability, capital execution, and the systems that support repeatable approvals."
      />
      <section className="pb-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-black/10 p-6">
              <p className="text-sm text-black/45">{post.date}</p>
              <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/70">{post.excerpt}</p>
              <Link href={`/insights/${post.slug}`} className="mt-6 inline-block underline underline-offset-4">
                Read article
              </Link>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
