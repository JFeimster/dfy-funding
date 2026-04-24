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

function formatPublishDate(date: string) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export default function InsightsPage() {
  const posts = getAllInsights();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Funding insights for operators."
        description="Clear thinking on fundability, capital execution, and the systems that support repeatable approvals."
      />

      <section className="pb-20">
        <Container>
          {featuredPost ? (
            <article className="overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02]">
              <div className="grid gap-0 md:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/55">
                      {featuredPost.category}
                    </span>
                    {featuredPost.featured ? (
                      <span className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-black md:text-4xl">
                    <Link href={`/insights/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-base leading-8 text-black/70">
                    {featuredPost.excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black/50">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <time dateTime={featuredPost.date}>{formatPublishDate(featuredPost.date)}</time>
                  </div>

                  {featuredPost.tags.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featuredPost.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/insights/${featuredPost.slug}`}
                      className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Read featured article
                    </Link>
                    <Link
                      href="/start"
                      className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black transition hover:bg-black/[0.03]"
                    >
                      Start Your Funding Plan
                    </Link>
                  </div>
                </div>

                <div className="border-t border-black/10 md:border-l md:border-t-0">
                  {featuredPost.coverImage ? (
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="h-full min-h-[260px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[260px] items-end bg-gradient-to-br from-black/[0.02] to-black/[0.07] p-8">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
                          Operator-grade insights
                        </p>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-black/60">
                          Readiness, execution, workflows, and capital systems for businesses that need more than generic funding advice.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ) : null}

          {remainingPosts.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {remainingPosts.map((post) => (
                <article key={post.slug} className="rounded-3xl border border-black/10 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
                      {post.category}
                    </span>
                    {post.featured ? (
                      <span className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                        Featured
                      </span>
                    ) : null}
                  </div>

                  <h2 className="mt-4 text-xl font-semibold tracking-tight text-black">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-black/70">{post.excerpt}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-black/45">
                    <span>{post.author}</span>
                    <span>•</span>
                    <time dateTime={post.date}>{formatPublishDate(post.date)}</time>
                  </div>

                  {post.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-black/55"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <Link
                    href={`/insights/${post.slug}`}
                    className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                  >
                    Read article
                  </Link>
                </article>
              ))}
            </div>
          ) : null}
        </Container>
      </section>
    </>
  );
}
