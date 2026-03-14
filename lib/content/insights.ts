import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const insightsDir = path.join(process.cwd(), "content/insights");

export type InsightPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
};

export function getAllInsights(): InsightPost[] {
  const files = fs.readdirSync(insightsDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(insightsDir, file), "utf8");
      const { data, content } = matter(raw);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getInsightBySlug(slug: string) {
  return getAllInsights().find((post) => post.slug === slug);
}
