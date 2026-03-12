import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aditbiorganic.com";
const SITE_NAME = "Adit Biorganic";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
const DEFAULT_TWITTER_HANDLE = "@AditBiorganic";
const DEFAULT_KEYWORDS =
  "organic fertilizer manufacturer India, granule fertilizer manufacturer Gujarat, B2B fertilizer manufacturer, bio fertilizer manufacturer Anand, organic fertilizer exporter India, fertilizer granules manufacturer, organic base granules, bio-stimulant granules, custom fertilizer formulation, contract fertilizer manufacturing, ISO certified fertilizer manufacturer";

/**
 * SEOHead — Comprehensive SEO + GEO head manager for every page.
 *
 * Props:
 *   title        {string}   Page title (appended with brand)
 *   description  {string}   Meta description (150–160 chars)
 *   canonical    {string}   Canonical URL path e.g. "/products"
 *   ogImage      {string}   Absolute URL to OG image (1200×630)
 *   ogType       {string}   "website" | "article" | "product"
 *   keywords     {string}   Comma-separated keywords
 *   schema       {object|Array}  JSON-LD structured data object(s)
 *   noindex      {boolean}  If true, sets noindex,nofollow
 *   article      {object}   Article meta: { publishedTime, modifiedTime, author, section, tags[] }
 *   product      {object}   Product meta: { price, currency, availability }
 */
export function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords,
  schema,
  noindex = false,
  article,
  product,
}) {
  const fullTitle = title
    ? `${title} | Adit Biorganic — India's #1 B2B Organic Fertilizer Manufacturer`
    : "Adit Biorganic — India's #1 B2B Organic Fertilizer Granule Manufacturer | Anand, Gujarat";

  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  const ogImageAlt = title
    ? `${title} — Adit Biorganic, Organic Fertilizer Manufacturer Gujarat India`
    : "Adit Biorganic — India's #1 B2B Organic Fertilizer Granule Manufacturer";

  // Support single or array of schema objects
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  const allKeywords = keywords
    ? `${keywords}, ${DEFAULT_KEYWORDS}`
    : DEFAULT_KEYWORDS;

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en-IN" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex,nofollow"
            : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Author / Brand ── */}
      <meta name="author" content="Adit Biorganic" />
      <meta name="copyright" content="© 2026 Adit Biorganic. All rights reserved." />
      <meta name="publisher" content="Adit Biorganic" />

      {/* ── Business Classification ── */}
      <meta name="classification" content="Business, Agriculture, Organic Fertilizer Manufacturing" />
      <meta name="category" content="Organic Fertilizer Manufacturer, B2B Agricultural Inputs" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="rating" content="general" />
      <meta name="language" content="en-IN" />
      <meta name="revisit-after" content="7 days" />

      {/* ── Geo / Local targeting ── */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Anand, Gujarat, India" />
      <meta name="geo.position" content="22.5560;72.9273" />
      <meta name="ICBM" content="22.5560, 72.9273" />

      {/* ── Dublin Core Metadata ── */}
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="Adit Biorganic" />
      <meta name="DC.creator" content="Akash Dadhania" />
      <meta name="DC.language" content="en-IN" />
      <meta name="DC.coverage" content="India, Gujarat, Worldwide" />
      <meta name="DC.rights" content="© 2026 Adit Biorganic" />
      <meta name="DC.identifier" content={canonicalUrl} />
      <meta name="DC.subject" content="Organic Fertilizer Manufacturing, B2B Agricultural Inputs, Gujarat India" />
      {article?.publishedTime && (
        <meta name="DC.date" content={article.publishedTime} />
      )}

      {/* ── Open Graph — Core ── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="gu_IN" />

      {/* ── Open Graph — Image ── */}
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:secure_url" content={ogImageUrl} />
      <meta property="og:image:type" content={ogImageUrl.endsWith(".png") ? "image/png" : "image/jpeg"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* ── Open Graph — Business ── */}
      <meta property="og:see_also" content="https://www.linkedin.com/company/adit-biorganic" />
      <meta property="og:see_also" content="https://www.facebook.com/aditbiorganic" />
      <meta property="og:see_also" content="https://www.instagram.com/aditbiorganic" />

      {/* ── Open Graph — Article (for blog posts) ── */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags?.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* ── Open Graph — Product ── */}
      {product && (
        <>
          {product.price && (
            <meta property="product:price:amount" content={product.price} />
          )}
          {product.currency && (
            <meta property="product:price:currency" content={product.currency} />
          )}
          {product.availability && (
            <meta property="product:availability" content={product.availability} />
          )}
        </>
      )}

      {/* ── Twitter / X Cards ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:creator" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:domain" content="aditbiorganic.com" />
      
      {/* ── JSON-LD Structured Data ── */}
      {schemas.map((s) => (
        <script key={JSON.stringify(s)} type="application/ld+json">
          {JSON.stringify(s, null, 0)}
        </script>
      ))}
    </Helmet>
  );
}
