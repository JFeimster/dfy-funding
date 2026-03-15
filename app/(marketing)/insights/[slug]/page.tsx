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
    <article className="py-24 md:py-32">
      <Container className="max-w-2xl">
        <header>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Insights</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-black md:text-5xl">
            {post.title}
          </h1>
          <time className="mt-4 block text-sm text-black/50" dateTime={post.date}>
            {post.date}
          </time>
        </header>
        <div className="mt-12 border-t border-black/[0.08] pt-10">
          <div className="prose prose-neutral max-w-none text-black/85 leading-relaxed [&_p]:mb-5 [&_ul]:my-5 [&_li]:my-1 whitespace-pre-wrap">
            {post.content}
          </div>
        </div>
      </Container>
    </article>
  );
}
