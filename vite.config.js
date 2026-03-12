import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import sitemap from 'vite-plugin-sitemap';
import path from 'path';
import fs from 'fs';

const BASE_URL = 'https://aditbiorganic.com';

// ── Auto-discover all slugs from source files — zero hardcoding ───────────────

// Product slugs — extracted from src/data/products.js slug fields
const productsSource = fs.readFileSync('./src/data/products.js', 'utf8');
const productSlugs = [...productsSource.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);

// Blog slugs — every .mdx file in src/content/blog/
const blogSlugs = fs
  .readdirSync('./src/content/blog')
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.replace('.mdx', ''));

// Service slugs — every .mdx file in src/content/services/
const serviceSlugs = fs
  .readdirSync('./src/content/services')
  .filter((f) => f.endsWith('.mdx'))
  .map((f) => f.replace('.mdx', ''));

// Static SPA routes (plugin only auto-discovers / from dist/index.html)
const staticRoutes = ['/about', '/products', '/services', '/blog', '/contact'];

const dynamicRoutes = [
  ...staticRoutes,
  ...productSlugs.map((s) => `/products/${s}`),
  ...serviceSlugs.map((s) => `/services/${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

// ── Per-route priority / changefreq ──────────────────────────────────────────

const priorityMap = {
  '/':         1.0,
  '/contact':  0.9,
  '/products': 0.9,
  '/services': 0.85,
  '/about':    0.8,
  '/blog':     0.75,
  ...Object.fromEntries(productSlugs.map((s) => [`/products/${s}`, 0.85])),
  ...Object.fromEntries(serviceSlugs.map((s) => [`/services/${s}`, 0.8])),
  ...Object.fromEntries(blogSlugs.map((s) => [`/blog/${s}`, 0.7])),
};

const changefreqMap = {
  '/':         'weekly',
  '/products': 'weekly',
  '/blog':     'weekly',
  '*':         'monthly',
};

// ── Vite config ───────────────────────────────────────────────────────────────

export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    react(),
    tailwindcss(),
    sitemap({
      hostname: BASE_URL,
      dynamicRoutes,
      priority: priorityMap,
      changefreq: changefreqMap,
      lastmod: { '*': new Date() },
      exclude: ['*'],         // exclude the wildcard/404 catch-all route
      readable: true,         // human-readable XML
      outDir: 'dist',
      generateRobotsTxt: true,
      robots: [
        // ── Default: allow everything ──────────────────────────────
        { userAgent: '*',                    allow: '/' },

        // ── Google ─────────────────────────────────────────────────
        { userAgent: 'Googlebot',            allow: '/' },
        { userAgent: 'Googlebot-Image',      allow: '/' },
        { userAgent: 'Googlebot-Video',      allow: '/' },
        { userAgent: 'Googlebot-News',       allow: '/' },
        { userAgent: 'Google-Extended',      allow: '/' }, // Gemini / AI Overviews
        { userAgent: 'Gemini-Web',           allow: '/' }, // Gemini AI

        // ── OpenAI / ChatGPT ───────────────────────────────────────
        { userAgent: 'GPTBot',               allow: '/' }, // OpenAI training
        { userAgent: 'ChatGPT-User',         allow: '/' }, // ChatGPT browsing
        { userAgent: 'OAI-SearchBot',        allow: '/' }, // OpenAI realtime search

        // ── Anthropic / Claude ─────────────────────────────────────
        { userAgent: 'anthropic-ai',         allow: '/' },
        { userAgent: 'ClaudeBot',            allow: '/' },
        { userAgent: 'Claude-Web',           allow: '/' },

        // ── Perplexity ─────────────────────────────────────────────
        { userAgent: 'PerplexityBot',        allow: '/' },

        // ── Meta AI (Llama) ────────────────────────────────────────
        { userAgent: 'Meta-ExternalAgent',   allow: '/' },
        { userAgent: 'Meta-ExternalFetcher', allow: '/' },
        { userAgent: 'FacebookBot',          allow: '/' },

        // ── Microsoft / Bing / Copilot ─────────────────────────────
        { userAgent: 'Bingbot',              allow: '/' },
        { userAgent: 'msnbot',               allow: '/' },
        { userAgent: 'msnbot-media',         allow: '/' },

        // ── Apple / Siri ───────────────────────────────────────────
        { userAgent: 'Applebot',             allow: '/' },
        { userAgent: 'Applebot-Extended',    allow: '/' },

        // ── Brave Search (used by Claude) ──────────────────────────
        { userAgent: 'Brave Bot',            allow: '/' },

        // ── DuckDuckGo ─────────────────────────────────────────────
        { userAgent: 'DuckDuckBot',          allow: '/' },

        // ── Yandex ─────────────────────────────────────────────────
        { userAgent: 'YandexBot',            allow: '/' },
        { userAgent: 'YandexImages',         allow: '/' },

        // ── Baidu ──────────────────────────────────────────────────
        { userAgent: 'Baiduspider',          allow: '/' },

        // ── xAI / Grok ─────────────────────────────────────────────
        { userAgent: 'xAI-Bot',              allow: '/' },

        // ── Cohere ─────────────────────────────────────────────────
        { userAgent: 'cohere-ai',            allow: '/' },

        // ── Social previews ────────────────────────────────────────
        { userAgent: 'LinkedInBot',          allow: '/' },
        { userAgent: 'Twitterbot',           allow: '/' },
        { userAgent: 'facebookexternalhit',  allow: '/' },
        { userAgent: 'WhatsApp',             allow: '/' },
        { userAgent: 'TelegramBot',          allow: '/' },

        // ── Archive ────────────────────────────────────────────────
        { userAgent: 'ia_archiver',          allow: '/' },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
});
