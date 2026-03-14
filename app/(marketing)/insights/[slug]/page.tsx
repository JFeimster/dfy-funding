import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getAllInsights, getInsightBySlug } from "@/lib/content/insights";

export async function generateStaticParams() {
  return getAllInsights().map((post) => ({ slug: post.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) notFound();

  return (
    <section className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.18em] text-black/45">Insights</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-sm text-black/45">{post.date}</p>
        <article className="prose prose-neutral mt-10 max-w-none whitespace-pre-wrap text-black/80">
          {post.content}
        </article>
      </Container>
    </section>
  );
}
