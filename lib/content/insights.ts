import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const insightsDir = path.join(process.cwd(), "content/insights");

const insightSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(3).optional(),
  excerpt: z.string().min(20),
  date: z.string().min(4),
  author: z.string().default("DFY Funding"),
  category: z.string().default("Capital Ops"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  coverImage: z.string().optional(),
  body: z.string(),
});

export type InsightPost = z.infer<typeof insightSchema>;

function normalizeSlug(fileName: string, frontmatterSlug?: string) {
  return frontmatterSlug ?? fileName.replace(/\.mdx$/, "");
}

function parseInsightFile(fileName: string): InsightPost {
  const raw = fs.readFileSync(path.join(insightsDir, fileName), "utf8");
  const { data, content } = matter(raw);

  return insightSchema.parse({
    ...data,
    slug: normalizeSlug(fileName, data.slug),
    body: content.trim(),
  });
}

export function getAllInsights(): InsightPost[] {
  if (!fs.existsSync(insightsDir)) return [];

  const files = fs.readdirSync(insightsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map(parseInsightFile)
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    });
}

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return getAllInsights().find((post) => post.slug === slug);
}

export function getFeaturedInsights(limit = 3): InsightPost[] {
  return getAllInsights()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getRelatedInsights(
  currentSlug: string,
  options?: {
    category?: string;
    tags?: string[];
    limit?: number;
  }
): InsightPost[] {
  const { category, tags = [], limit = 3 } = options ?? {};

  return getAllInsights()
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      let score = 0;

      if (category && post.category === category) score += 3;

      if (tags.length > 0 && post.tags.length > 0) {
        const sharedTags = post.tags.filter((tag) => tags.includes(tag));
        score += sharedTags.length * 2;
      }

      if (post.featured) score += 1;

      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || (a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((item) => item.post);
}
