import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { FinalCTA } from "@/components/marketing/final-cta";
import {
  getAllInsights,
  getInsightBySlug,
  getRelatedInsights,
} from "@/lib/content/insights";
import { buildMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return getAllInsights().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) {
    return buildMetadata({
      title: "Insight Not Found",
      description: "This insight article could not be found.",
      path: `/insights/${slug}`,
    });
  }

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    path: `/insights/${post.slug}`,
  });
}

function formatPublishDate(date: string) {
  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) return date;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function renderBody(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={index} className="mt-10 text-2xl font-semibold tracking-tight text-black">
            {block.replace(/^## /, "")}
          </h2>
        );
      }

      if (block.startsWith("### ")) {
        return (
          <h3 key={index} className="mt-8 text-xl font-semibold tracking-tight text-black">
            {block.replace(/^### /, "")}
          </h3>
        );
      }

      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .map((line) => line.replace(/^- /, "").trim())
          .filter(Boolean);

        return (
          <ul key={index} className="my-6 list-disc pl-6 text-black/80">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="my-2 leading-7">
                {item}
              </li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="mb-5 leading-8 text-black/80">
          {block}
        </p>
      );
    });
}

function getInlineCta(post: {
  category: string;
  tags: string[];
}) {
  const category = post.category.toLowerCase();
  const tags = post.tags.map((tag) => tag.toLowerCase());

  if (
    category.includes("readiness") ||
    tags.includes("funding readiness") ||
    tags.includes("approvals")
  ) {
    return {
      title: "See where your funding path is actually getting blocked.",
      description:
        "Use the intake flow to spot readiness gaps, approval friction, and the best next move before urgency makes the decision for you.",
      primaryLabel: "Take the Funding Readiness Check",
      primaryHref: "/start",
      secondaryLabel: "View Capital Readiness Ops",
      secondaryHref: "/services/capital-readiness-ops",
    };
  }

  if (
    category.includes("agency") ||
    category.includes("real estate") ||
    category.includes("self-employed") ||
    category.includes("ecommerce")
  ) {
    return {
      title: "Get the right funding path for your kind of business.",
      description:
        "DFY Funding helps operators match capital strategy, execution, and systems to how the business actually works in the real world.",
      primaryLabel: "Start Your Funding Plan",
      primaryHref: "/start",
      secondaryLabel: "See Who We Help",
      secondaryHref: "/who-we-help",
    };
  }

  if (
    category.includes("capital ops") ||
    category.includes("workflow") ||
    category.includes("automation")
  ) {
    return {
      title: "Turn funding from a scramble into a system.",
      description:
        "If the process around capital feels sloppy, repetitive, or fragile, start with a cleaner plan and build the operating layer underneath it.",
      primaryLabel: "Start Your Funding Plan",
      primaryHref: "/start",
      secondaryLabel: "Explore Capital Ops System",
      secondaryHref: "/services/capital-ops-system",
    };
  }

  return {
    title: "Stop winging high-stakes capital decisions.",
    description:
      "DFY Funding helps operators become fundable, pursue the right capital, and build systems that make the next round easier.",
    primaryLabel: "Start Your Funding Plan",
    primaryHref: "/start",
    secondaryLabel: "Explore Services",
    secondaryHref: "/services",
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getInsightBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedInsights(post.slug, {
    category: post.category,
    tags: post.tags,
    limit: 3,
  });

  const inlineCta = getInlineCta(post);

  return (
    <article className="py-24 md:py-32">
      <Container className="max-w-3xl">
        <header className="border-b border-black/[0.08] pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-black/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/55">
              {post.category}
            </span>
            {post.featured ? (
              <span className="rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Featured
              </span>
            ) : null}
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black md:text-5xl">
            {post.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-black/70">
            {post.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-black/50">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{formatPublishDate(post.date)}</time>
          </div>

          {post.tags.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs text-black/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {post.coverImage ? (
            <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-black/[0.02]">
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}
        </header>

        <div className="mt-12">
          <div className="prose prose-neutral max-w-none text-black/85">
            {renderBody(post.body)}
          </div>
        </div>

        <section className="mt-14 rounded-3xl border border-black/10 bg-black/[0.02] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
            Next step
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">
            {inlineCta.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-black/70">
            {inlineCta.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={inlineCta.primaryHref}
              className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {inlineCta.primaryLabel}
            </Link>
            <Link
              href={inlineCta.secondaryHref}
              className="inline-flex items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-black transition hover:bg-black/[0.03]"
            >
              {inlineCta.secondaryLabel}
            </Link>
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="mt-16 border-t border-black/[0.08] pt-10">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/50">
                  Related insights
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-black">
                  Keep going.
                </h2>
              </div>
              <Link
                href="/insights"
                className="text-sm font-medium underline underline-offset-4"
              >
                View all insights
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="rounded-3xl border border-black/10 p-5"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                    {relatedPost.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-black">
                    <Link href={`/insights/${relatedPost.slug}`}>
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {relatedPost.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-black/45">
                    {formatPublishDate(relatedPost.date)}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-16">
          <FinalCTA />
        </section>
      </Container>
    </article>
  );
}
