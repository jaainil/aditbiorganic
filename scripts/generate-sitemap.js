#!/usr/bin/env bun
/**
 * scripts/generate-sitemap.js
 *
 * Automatically generates public/sitemap.xml by reading:
 *   - Core static pages (hardcoded below)
 *   - Product slugs from src/data/products.js
 *   - Blog posts from src/content/blog/*.mdx  (frontmatter is source of truth)
 *   - Services   from src/content/services/*.mdx (frontmatter is source of truth)
 *
 * Run with:  bun run sitemap
 *
 * Add this to your CI/CD or pre-build step to keep the sitemap
 * automatically in sync whenever you add a new MDX file.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, basename } from "node:path";

const BASE_URL = "https://aditbiorganic.com";
const TODAY = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extracts frontmatter from an MDX/MD file without a full remark parse.
 * Reads the YAML block between the first two `---` lines.
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const yaml = match[1];
  const result = {};
  for (const line of yaml.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const val = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    result[key] = val;
  }
  return result;
}

/** Read all .mdx files in a directory and return { slug, frontmatter } objects */
async function readMdxDir(dir) {
  let files;
  try {
    files = await readdir(dir);
  } catch {
    console.warn(`  [warn] Directory not found: ${dir}`);
    return [];
  }
  const results = [];
  for (const file of files.filter((f) => f.endsWith(".mdx"))) {
    const slug = basename(file, ".mdx");
    const content = await readFile(join(dir, file), "utf8");
    const frontmatter = parseFrontmatter(content);
    results.push({ slug, frontmatter });
  }
  return results;
}

/** Build a <url> XML block */
function urlEntry({ loc, lastmod, changefreq, priority, image }) {
  const imageBlock = image
    ? `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      ${image.caption ? `<image:caption>${escapeXml(image.caption)}</image:caption>` : ""}
    </image:image>`
    : "";
  return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    <lastmod>${lastmod || TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageBlock}
  </url>`;
}

function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const root = new URL("..", import.meta.url).pathname;

  console.log("Generating sitemap.xml...");

  const urls = [];

  // ── Static core pages ──────────────────────────────────────────────────────
  const corePages = [
    {
      loc: "/",
      changefreq: "weekly",
      priority: "1.0",
      image: {
        loc: `${BASE_URL}/images/hero.jpg`,
        title: "Adit Biorganic — India's Leading B2B Organic Fertilizer Manufacturer",
        caption: "ISO 9001:2015 certified organic fertilizer granule manufacturer in Anand, Gujarat, India",
      },
    },
    {
      loc: "/about",
      changefreq: "monthly",
      priority: "0.8",
      image: {
        loc: `${BASE_URL}/images/factory.jpg`,
        title: "Adit Biorganic Factory — Anand, Gujarat, India",
        caption: "State-of-the-art organic fertilizer manufacturing facility operating 24/7 at 190+ MT/day capacity",
      },
    },
    {
      loc: "/products",
      changefreq: "weekly",
      priority: "0.9",
      image: {
        loc: `${BASE_URL}/images/products-overview.png`,
        title: "Organic Fertilizer Granule Products — Adit Biorganic",
        caption: "Complete range of organic fertilizer base granules manufactured by Adit Biorganic",
      },
    },
    {
      loc: "/services",
      changefreq: "monthly",
      priority: "0.8",
      image: {
        loc: `${BASE_URL}/images/lab.jpg`,
        title: "Fertilizer Manufacturing Services — Adit Biorganic",
        caption: "ISO 9001:2015 certified laboratory and manufacturing services for B2B fertilizer brands",
      },
    },
    {
      loc: "/blog",
      changefreq: "weekly",
      priority: "0.7",
      image: {
        loc: `${BASE_URL}/images/granules.jpg`,
        title: "Agriculture & Fertilizer Blog — Adit Biorganic",
        caption: "Expert insights on organic fertilizer, sustainable agriculture and B2B procurement",
      },
    },
    {
      loc: "/contact",
      changefreq: "monthly",
      priority: "0.8",
    },
  ];

  for (const page of corePages) {
    urls.push(urlEntry(page));
  }

  // ── Product pages (from src/data/products.js) ─────────────────────────────
  console.log("  Reading products...");
  const productsPath = join(root, "src/data/products.js");
  let productsContent;
  try {
    productsContent = await readFile(productsPath, "utf8");
  } catch {
    console.warn("  [warn] Could not read products.js");
    productsContent = "";
  }
  // Extract all slug values via regex (avoids importing ESM in a script context)
  const productSlugs = [...productsContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map(
    (m) => m[1]
  );
  const productImages = {
    "mineral-base-granules": { title: "Mineral Base Granules — Slow-Release Fertilizer Manufacturer India", caption: "ISO 9001:2015 certified mineral base granules with gypsum, dolomite and micronutrients." },
    "bio-fertilizer-base-granules": { title: "Bio-Fertilizer Base Granules — Organic Fertilizer Manufacturer Gujarat India", caption: "Bio-fertilizer granules with beneficial microbes for sustainable soil fertility." },
    "bio-stimulant-base-granules": { title: "Bio-Stimulant Base Granules — Plant Growth Stimulant Manufacturer India", caption: "Bio-stimulant granules for enhanced plant growth and crop yield." },
    "mix-micro-base-granules": { title: "Mix Micro Base Granules — Micronutrient Fertilizer Manufacturer Gujarat", caption: "Custom micronutrient blend granules with Ca, Mg, Zn, Bo and more." },
    "bio-pesticide-base-granules": { title: "Bio-Pesticide Base Granules — Eco-Friendly Crop Protection Manufacturer India", caption: "Residue-free bio-pesticide granules for sustainable crop protection." },
    "pesticide-base-granules": { title: "Pesticide Base Granules — Dual-Action Fertilizer Manufacturer India", caption: "Dual-action pesticide granules combining pest control and nutrient delivery." },
    "base-granules": { title: "Base Granules — Multi-Purpose Carrier Granule Manufacturer Gujarat India", caption: "Multi-purpose base carrier granules for fertilizer formulation." },
    "organic-base-granules": { title: "Organic Base Granules — Certified Organic Carrier Granule Manufacturer India", caption: "Certified organic carrier granules for organic fertilizer manufacturing." },
  };

  for (const slug of productSlugs) {
    const img = productImages[slug];
    urls.push(
      urlEntry({
        loc: `/products/${slug}`,
        changefreq: "monthly",
        priority: "0.85",
        image: img
          ? {
              loc: `${BASE_URL}/images/products/${slug}.png`,
              title: img.title,
              caption: img.caption,
            }
          : undefined,
      })
    );
  }
  console.log(`  Found ${productSlugs.length} product pages.`);

  // ── Blog post pages (from MDX frontmatter) ────────────────────────────────
  console.log("  Reading blog MDX files...");
  const blogDir = join(root, "src/content/blog");
  const blogPosts = await readMdxDir(blogDir);
  for (const { slug, frontmatter } of blogPosts) {
    urls.push(
      urlEntry({
        loc: `/blog/${slug}`,
        lastmod: frontmatter.date || TODAY,
        changefreq: "monthly",
        priority: "0.65",
        image: frontmatter.img
          ? {
              loc: `${BASE_URL}${frontmatter.img}`,
              title: escapeXml(frontmatter.title || slug),
              caption: escapeXml(frontmatter.excerpt || ""),
            }
          : undefined,
      })
    );
  }
  console.log(`  Found ${blogPosts.length} blog posts.`);

  // ── Service detail pages (from MDX frontmatter) ───────────────────────────
  console.log("  Reading service MDX files...");
  const servicesDir = join(root, "src/content/services");
  const servicePages = await readMdxDir(servicesDir);
  for (const { slug, frontmatter } of servicePages) {
    urls.push(
      urlEntry({
        loc: `/services/${slug}`,
        changefreq: "monthly",
        priority: "0.75",
        image: frontmatter.imageSrc
          ? {
              loc: `${BASE_URL}${frontmatter.imageSrc}`,
              title: escapeXml(frontmatter.seoTitle || frontmatter.title || slug),
              caption: escapeXml(frontmatter.seoDescription || frontmatter.description || ""),
            }
          : undefined,
      })
    );
  }
  console.log(`  Found ${servicePages.length} service pages.`);

  // ── Assemble XML ──────────────────────────────────────────────────────────
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="
          http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
          http://www.google.com/schemas/sitemap-image/1.1
          http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
${urls.join("\n")}
</urlset>
`;

  const outPath = join(root, "public/sitemap.xml");
  await writeFile(outPath, xml, "utf8");

  const total = corePages.length + productSlugs.length + blogPosts.length + servicePages.length;
  console.log(`\nDone! sitemap.xml written with ${total} URLs:`);
  console.log(`  ${corePages.length} core pages`);
  console.log(`  ${productSlugs.length} product pages`);
  console.log(`  ${blogPosts.length} blog posts`);
  console.log(`  ${servicePages.length} service pages`);
  console.log(`\nOutput: ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
