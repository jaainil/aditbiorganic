/**
 * Content helpers — MDX frontmatter is the single source of truth.
 *
 * How it works:
 *   Vite's import.meta.glob() eagerly imports every .mdx file and reads
 *   the `frontmatter` named export that remark-mdx-frontmatter generates.
 *   The slug is derived from the file name automatically.
 *
 * To add a new blog post:  create src/content/blog/<slug>.mdx  — done.
 * To add a new service:    create src/content/services/<slug>.mdx — done.
 * Then run `bun run sitemap` to regenerate sitemap.xml.
 */

import type { ComponentType } from "react";

// ─── Blog ────────────────────────────────────────────────────────────────────

const blogModules = import.meta.glob("../content/blog/*.mdx", { eager: true });

interface BlogModule {
  frontmatter: Record<string, unknown>;
  default: ComponentType;
}

interface BlogPost {
  slug: string;
  title?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  image?: string;
  topic?: string;
  tags?: string[];
  Component?: ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Returns all blog posts sorted newest-first, with `slug` derived from filename.
 * @returns Array of blog posts with slug and frontmatter data
 */
export function getAllBlogs(): BlogPost[] {
  return Object.entries(blogModules)
    .map(([path, mod]: [string, BlogModule]) => {
      const slug = path.replace("../content/blog/", "").replace(".mdx", "");
      return { slug, ...mod.frontmatter, Component: mod.default };
    })
    .sort((a: BlogPost, b: BlogPost) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
}

/**
 * Returns a single blog post by slug, or undefined if not found.
 * @param slug - The blog post slug
 */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogs().find((b) => b.slug === slug);
}

// ─── Services ────────────────────────────────────────────────────────────────

const serviceModules = import.meta.glob("../content/services/*.mdx", { eager: true });

interface ServiceModule {
  frontmatter: Record<string, unknown>;
  default: ComponentType;
}

interface Service {
  slug: string;
  title?: string;
  description?: string;
  image?: string;
  concept?: string;
  Component?: ComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Returns all services in file order (alphabetical by filename).
 * @returns Array of services with slug and frontmatter data
 */
export function getAllServices(): Service[] {
  return Object.entries(serviceModules).map(([path, mod]: [string, ServiceModule]) => {
    const slug = path.replace("../content/services/", "").replace(".mdx", "");
    return { slug, ...mod.frontmatter, Component: mod.default };
  });
}

/**
 * Returns a single service by slug, or undefined if not found.
 * @param slug - The service slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return getAllServices().find((s) => s.slug === slug);
}