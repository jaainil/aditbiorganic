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

// ─── Blog ────────────────────────────────────────────────────────────────────

const blogModules = import.meta.glob('../content/blog/*.mdx', { eager: true });

/**
 * Returns all blog posts sorted newest-first, with `slug` derived from filename.
 * @returns {{ slug: string, frontmatter: object, default: React.ComponentType }[]}
 */
export function getAllBlogs() {
  return Object.entries(blogModules)
    .map(([path, mod]) => {
      const slug = path.replace('../content/blog/', '').replace('.mdx', '');
      return { slug, ...mod.frontmatter, Component: mod.default };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

/**
 * Returns a single blog post by slug, or undefined if not found.
 * @param {string} slug
 */
export function getBlogBySlug(slug) {
  return getAllBlogs().find((b) => b.slug === slug);
}

// ─── Services ────────────────────────────────────────────────────────────────

const serviceModules = import.meta.glob('../content/services/*.mdx', { eager: true });

/**
 * Returns all services in file order (alphabetical by filename).
 * @returns {{ slug: string, frontmatter: object, default: React.ComponentType }[]}
 */
export function getAllServices() {
  return Object.entries(serviceModules).map(([path, mod]) => {
    const slug = path.replace('../content/services/', '').replace('.mdx', '');
    return { slug, ...mod.frontmatter, Component: mod.default };
  });
}

/**
 * Returns a single service by slug, or undefined if not found.
 * @param {string} slug
 */
export function getServiceBySlug(slug) {
  return getAllServices().find((s) => s.slug === slug);
}
