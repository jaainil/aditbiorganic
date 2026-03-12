import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import Sitemap from 'vite-plugin-sitemap';
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import banner from 'vite-plugin-banner';
import { VitePWA } from 'vite-plugin-pwa';
import sharp from 'sharp';
import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import path from 'node:path';

const BASE_URL = 'https://aditbiorganic.com';
const BUILD_DATE = new Date();
const ROOT_DIR = process.cwd();
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const SVG_WEBP_DENSITY = 192;

function readTextIfExists(filePath: string): string {
  return existsSync(filePath) ? readFileSync(filePath, 'utf8') : '';
}

function readMdxSlugs(dirPath: string): string[] {
  if (!existsSync(dirPath)) return [];

  return readdirSync(dirPath)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

function walkFiles(dirPath: string): string[] {
  if (!existsSync(dirPath)) return [];

  const entries = readdirSync(dirPath, { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      return walkFiles(fullPath);
    }

    return [fullPath];
  });
}

interface LosslessWebpGeneratorOptions {
  outDir?: string;
  include?: RegExp;
  writeEvenIfLarger?: boolean;
  svgDensity?: number;
}

function losslessWebpGenerator(options: LosslessWebpGeneratorOptions = {}) {
  const outDir = options.outDir || DIST_DIR;
  const include = options.include || /\.(png|jpe?g|gif|svg)$/i;
  const writeEvenIfLarger = options.writeEvenIfLarger ?? true;
  const svgDensity = options.svgDensity || SVG_WEBP_DENSITY;

  return {
    name: 'lossless-webp-generator',
    apply: 'build' as const,
    async closeBundle() {
      const files = walkFiles(outDir).filter((file) => include.test(file));

      await Promise.all(
        files.map(async (filePath) => {
          const outputPath = filePath.replace(/\.[^.]+$/i, '.webp');
          const originalSize = statSync(filePath).size;
          const isGif = /\.gif$/i.test(filePath);
          const isSvg = /\.svg$/i.test(filePath);

          try {
            const inputOptions: sharp.MetadataOptions = isGif
              ? { animated: true }
              : isSvg
                ? { density: svgDensity }
                : undefined;

            const buffer = await sharp(filePath, inputOptions)
              .webp({
                lossless: true,
                effort: 6,
              })
              .toBuffer();

            if (!writeEvenIfLarger && buffer.length >= originalSize) {
              return;
            }

            writeFileSync(outputPath, buffer);

            const delta = originalSize - buffer.length;
            const sign = delta >= 0 ? '-' : '+';

            console.log(
              `[webp] ${path.relative(outDir, filePath)} -> ${path.relative(
                outDir,
                outputPath,
              )} (${sign}${Math.abs(delta)} bytes)`,
            );
          } catch (error) {
            console.warn(`[webp] failed for ${filePath}`);
            console.warn(error);
          }
        }),
      );
    },
  };
}

interface ProductSource {
  slug: string;
}

const productsFile = path.resolve(ROOT_DIR, 'src/data/products.ts');
const blogDir = path.resolve(ROOT_DIR, 'src/content/blog');
const servicesDir = path.resolve(ROOT_DIR, 'src/content/services');

const productsSource = readTextIfExists(productsFile);

const productSlugs = Array.from(
  new Set(
    [...productsSource.matchAll(/slug:\s*["']([^"']+)["']/g)].map(
      (match): string => match[1],
    ),
  ),
);

const blogSlugs = Array.from(new Set(readMdxSlugs(blogDir)));
const serviceSlugs = Array.from(new Set(readMdxSlugs(servicesDir)));

const staticRoutes = ['/about', '/products', '/services', '/blog', '/contact'];

const dynamicRoutes = Array.from(
  new Set([
    ...staticRoutes,
    ...productSlugs.map((slug) => `/products/${slug}`),
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...blogSlugs.map((slug) => `/blog/${slug}`),
  ]),
);

const priorityMap: Record<string, number> = {
  '/': 1.0,
  '/contact': 0.9,
  '/products': 0.9,
  '/services': 0.85,
  '/about': 0.8,
  '/blog': 0.75,
  ...Object.fromEntries(
    productSlugs.map((slug) => [`/products/${slug}`, 0.85] as const),
  ),
  ...Object.fromEntries(
    serviceSlugs.map((slug) => [`/services/${slug}`, 0.8] as const),
  ),
  ...Object.fromEntries(blogSlugs.map((slug) => [`/blog/${slug}`, 0.7] as const)),
};

const changefreqMap: Record<string, string> = {
  '/': 'weekly',
  '/products': 'weekly',
  '/blog': 'weekly',
  '*': 'monthly',
};

export default defineConfig({
  plugins: [

    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),

    react({
      include: /\.(js|jsx|ts|tsx)$/,
      exclude: /\.(mdx)$/,
    }),

    tailwindcss(),

    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
      includePublic: true,
      cache: true,
      logStats: true,

      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
                convertPathData: false,
              },
            },
          },
          'sortAttrs',
          {
            name: 'addAttributesToSVGElement',
            params: {
              attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
            },
          },
        ],
      },

      png: {
        quality: 100,
      },
      jpeg: {
        quality: 100,
      },
      jpg: {
        quality: 100,
      },
      tiff: {
        quality: 100,
      },
      webp: {
        lossless: true,
      },
      avif: {
        lossless: true,
      },
      gif: {},
    }),

    losslessWebpGenerator({
      outDir: DIST_DIR,
      include: /\.(png|jpe?g|gif|svg)$/i,
      writeEvenIfLarger: true,
      svgDensity: SVG_WEBP_DENSITY,
    }),

    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 10240,
    }),

    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
    }),

    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'icon-192.png',
        'icon-512.png',
      ],
      manifest: {
        name: 'Adit Biorganic - Premium Organic Solutions',
        short_name: 'Adit Biorganic',
        description:
          'Sustainable biotechnology products for modern agriculture and healthcare.',
        theme_color: '#4f46e5',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '32x32',
            type: 'image/x-icon',
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,webp,avif,jpg,jpeg,gif,woff2}',
        ],
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|gif|webp|avif|svg)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.(?:js|css|woff2?|ttf|otf)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'asset-cache',
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),

    banner({
      outDir: 'dist',
      content: `/*
=================================================
  Adit Biorganic - Premium Organic Solutions
  Copyright © ${BUILD_DATE.getFullYear()} Adit Biorganic
  Built with Vite + React
  Version: ${process.env.npm_package_version || '0.1.0'}
  Build Date: ${BUILD_DATE.toISOString()}
  File: {{filename}}
=================================================
*/`,
    }),

    Sitemap({
      hostname: BASE_URL,
      dynamicRoutes,
      priority: priorityMap,
      changefreq: changefreqMap,
      lastmod: { '*': BUILD_DATE },
      readable: true,
      outDir: 'dist',
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', allow: '/' },
        { userAgent: 'Googlebot', allow: '/' },
        { userAgent: 'Googlebot-Image', allow: '/' },
        { userAgent: 'Googlebot-Video', allow: '/' },
        { userAgent: 'Googlebot-News', allow: '/' },
        { userAgent: 'Google-Extended', allow: '/' },
        { userAgent: 'Gemini-Web', allow: '/' },
        { userAgent: 'GPTBot', allow: '/' },
        { userAgent: 'ChatGPT-User', allow: '/' },
        { userAgent: 'OAI-SearchBot', allow: '/' },
        { userAgent: 'anthropic-ai', allow: '/' },
        { userAgent: 'ClaudeBot', allow: '/' },
        { userAgent: 'Claude-Web', allow: '/' },
        { userAgent: 'PerplexityBot', allow: '/' },
        { userAgent: 'Meta-ExternalAgent', allow: '/' },
        { userAgent: 'Meta-ExternalFetcher', allow: '/' },
        { userAgent: 'FacebookBot', allow: '/' },
        { userAgent: 'Bingbot', allow: '/' },
        { userAgent: 'msnbot', allow: '/' },
        { userAgent: 'msnbot-media', allow: '/' },
        { userAgent: 'Applebot', allow: '/' },
        { userAgent: 'Applebot-Extended', allow: '/' },
        { userAgent: 'Brave Bot', allow: '/' },
        { userAgent: 'DuckDuckBot', allow: '/' },
        { userAgent: 'YandexBot', allow: '/' },
        { userAgent: 'YandexImages', allow: '/' },
        { userAgent: 'Baiduspider', allow: '/' },
        { userAgent: 'xAI-Bot', allow: '/' },
        { userAgent: 'cohere-ai', allow: '/' },
        { userAgent: 'LinkedInBot', allow: '/' },
        { userAgent: 'Twitterbot', allow: '/' },
        { userAgent: 'facebookexternalhit', allow: '/' },
        { userAgent: 'WhatsApp', allow: '/' },
        { userAgent: 'TelegramBot', allow: '/' },
        { userAgent: 'ia_archiver', allow: '/' },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(ROOT_DIR, 'src'),
    },
  },

  server: {
    port: 3000,
  },
});