import { Helmet } from "react-helmet-async";

const SITE_URL = "https://aditbiorganic.com";
const SITE_NAME = "Adit Biorganic";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero.jpg`;
const DEFAULT_TWITTER_HANDLE = "@AditBiorganic";

/**
 * SEOHead — Comprehensive SEO head manager for every page.
 *
 * Props:
 *   title        {string}  Page title (appended with brand)
 *   description  {string}  Meta description (150-160 chars)
 *   canonical    {string}  Canonical URL path e.g. "/products"
 *   ogImage      {string}  Absolute URL to OG image (1200×630)
 *   ogType       {string}  "website" | "article" | "product"
 *   keywords     {string}  Comma-separated keywords
 *   schema       {object|Array} JSON-LD structured data object(s)
 *   noindex      {boolean} If true, sets noindex,nofollow
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
}) {
  const fullTitle = title
    ? `${title} | Adit Biorganic — India's #1 B2B Organic Fertilizer Manufacturer`
    : "Adit Biorganic — India's Leading B2B Organic Fertilizer Manufacturer | Gujarat, India";

  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical}`
    : SITE_URL;

  const ogImageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  // Support single or array of schema objects
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      {/* ── Core ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />
      <link rel="canonical" href={canonicalUrl} />

      {/* ── Geo / Local targeting ── */}
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Anand, Gujarat, India" />
      <meta name="geo.position" content="22.5560;72.9273" />
      <meta name="ICBM" content="22.5560, 72.9273" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Adit Biorganic" />
      <meta name="copyright" content="Adit Biorganic" />
      <meta name="classification" content="Business, Agriculture, Fertilizer Manufacturing" />
      <meta name="category" content="Organic Fertilizer Manufacturer" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="target" content="all" />
      <meta name="rating" content="general" />

      {/* ── Open Graph ── */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="gu_IN" />

      {/* ── Twitter / X Cards ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:creator" content={DEFAULT_TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title || SITE_NAME} />

      {/* ── JSON-LD Structured Data ── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s, null, 0)}
        </script>
      ))}
    </Helmet>
  );
}
