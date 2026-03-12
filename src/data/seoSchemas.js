/**
 * Central JSON-LD / Schema.org structured data for Adit Biorganic.
 * Used by SEOHead on every page for maximum Google Rich Results eligibility.
 *
 * Target keywords:
 *  - India: organic fertilizer manufacturer, granule fertilizer manufacturer india,
 *           b2b fertilizer manufacturer, bio fertilizer manufacturer gujarat
 *  - Gujarat: fertilizer manufacturer gujarat, anand gujarat fertilizer, organic granules gujarat
 *  - Export: organic fertilizer exporter india, granule fertilizer exporter, bio fertilizer export
 */

const SITE_URL = "https://aditbiorganic.com";
const LOGO_URL = `${SITE_URL}/logo.png`;

/* ─────────────────────────────────────────────
   1. Organization
   ───────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "FoodEstablishment"],
  "@id": `${SITE_URL}/#organization`,
  name: "Adit Biorganic",
  alternateName: ["Adit Bio Organic", "Aditbiorganic"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 200,
    height: 60,
  },
  image: `${SITE_URL}/images/factory.jpg`,
  description:
    "Adit Biorganic is India's leading ISO 9001:2015 certified B2B organic fertilizer granule manufacturer based in Anand, Gujarat. We produce 190+ MT/day of mineral, bio-fertilizer, bio-stimulant, bio-pesticide, and organic base granules for fertilizer brands, distributors, and exporters across India and worldwide.",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Akash Dadhania",
    jobTitle: "Founder & Director",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "S. No. 1152, Kanatalavdi Road, Adas",
    addressLocality: "Anand",
    addressRegion: "Gujarat",
    postalCode: "388305",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.5560",
    longitude: "72.9273",
  },
  telephone: "+919825045894",
  email: ["info@aditbiorganic.com", "sales@aditbiorganic.com"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919825045894",
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Gujarati", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      email: "sales@aditbiorganic.com",
      contactType: "sales",
      areaServed: ["IN", "Worldwide"],
    },
    {
      "@type": "ContactPoint",
      email: "info@aditbiorganic.com",
      contactType: "customer support",
      areaServed: ["IN", "Worldwide"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/adit-biorganic",
    "https://www.facebook.com/aditbiorganic",
    "https://www.instagram.com/aditbiorganic",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Organic Fertilizer Granule Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Mineral Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bio-Fertilizer Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bio-Stimulant Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Mix Micro Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bio-Pesticide Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pesticide Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Base Granules" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Organic Base Granules" } },
    ],
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  award: "ISO 9001:2015 Certified",
  slogan: "Organic Naturally — Nurturing Farms, Preserving Nature",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "AdministrativeArea", name: "Anand" },
    { "@type": "Country", name: "Worldwide Export" },
  ],
  knowsAbout: [
    "Organic Fertilizer Manufacturing",
    "Granular Fertilizer Production",
    "Bio-Fertilizer Manufacturing",
    "Bio-Stimulant Granules",
    "Organic Base Granules",
    "Mineral Base Granules",
    "Custom Fertilizer Formulation",
    "Contract Manufacturing",
    "Agricultural Inputs",
    "Sustainable Agriculture",
  ],
};

/* ─────────────────────────────────────────────
   2. WebSite (with SearchAction for Sitelinks)
   ───────────────────────────────────────────── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Adit Biorganic",
  description: "India's Leading B2B Organic Fertilizer Granule Manufacturer — ISO 9001:2015 Certified, Anand, Gujarat",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ─────────────────────────────────────────────
   3. BreadcrumbList helper
   ───────────────────────────────────────────── */
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/* ─────────────────────────────────────────────
   4. Home Page FAQ
   ───────────────────────────────────────────── */
export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does Adit Biorganic manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adit Biorganic manufactures a complete range of organic fertilizer base granules including Mineral Base Granules, Bio-Fertilizer Base Granules, Bio-Stimulant Base Granules, Mix Micro Base Granules, Bio-Pesticide Base Granules, Pesticide Base Granules, Base Granules, and Organic Base Granules. All products are ISO 9001:2015 certified and produced at 190+ MT/day capacity.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Adit Biorganic located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adit Biorganic is located at S. No. 1152, Kanatalavdi Road, Adas, Anand, Gujarat — 388305, India. The factory operates 24/7 and is strategically situated in Gujarat's agricultural heartland.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adit Biorganic offer custom fertilizer formulation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adit Biorganic specializes in custom fertilizer formulation (Recipe Granules) and contract/job work manufacturing. Our in-house ISO 9001:2015 certified laboratory develops bespoke nutrient formulations tailored to specific crop types, soil conditions, and agronomic goals.",
      },
    },
    {
      "@type": "Question",
      name: "What is Adit Biorganic's daily production capacity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adit Biorganic operates at a daily production capacity of 190+ MT (metric tons), running 24 hours a day, 7 days a week. This makes us one of India's largest organic granular fertilizer manufacturers.",
      },
    },
    {
      "@type": "Question",
      name: "Does Adit Biorganic export fertilizers worldwide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adit Biorganic supplies fertilizer brands, distributors, and procurement teams across India and exports worldwide. We partner with 50+ trusted B2B partners. Contact our sales team at sales@aditbiorganic.com for export inquiries.",
      },
    },
    {
      "@type": "Question",
      name: "Is Adit Biorganic ISO certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adit Biorganic is ISO 9001:2015 certified. Our in-house laboratory performs rigorous quality testing at every stage of production to ensure consistent, premium-grade fertilizer granules.",
      },
    },
    {
      "@type": "Question",
      name: "What is a Recipe Granule (Base Granule)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Recipe Granule (or Base Granule) is a custom-formulated granular carrier that holds active nutrients — organic, mineral, or biological — in a stable, slow-release form. It is a superior alternative to standard bentonite granules, offering better nutrient distribution, higher agronomic efficiency, and compatibility with coating applications.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote from Adit Biorganic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can request a B2B quote by visiting our Contact page at aditbiorganic.com/contact, calling +91 98250 45894, or emailing sales@aditbiorganic.com. Our team responds within 24 hours on business days.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────
   5. Product Schema builder
   ───────────────────────────────────────────── */
export function buildProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}#product`,
    name: product.title,
    description: product.summary,
    image: product.imageUrl.startsWith("http")
      ? product.imageUrl
      : `${SITE_URL}${product.imageUrl}`,
    brand: {
      "@type": "Brand",
      name: "Adit Biorganic",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: `${product.category} Fertilizer Granules`,
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/products/${product.slug}`,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Worldwide" },
      ],
    },
    keywords: [
      product.title,
      `${product.title} manufacturer India`,
      `${product.title} Gujarat`,
      `${product.category} fertilizer granules`,
      "organic fertilizer manufacturer",
      "B2B fertilizer manufacturer India",
      "Adit Biorganic",
    ].join(", "),
  };
}

/* ─────────────────────────────────────────────
   6. Product FAQ builder (per-product)
   ───────────────────────────────────────────── */
export function buildProductFaqSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What are ${product.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.summary,
        },
      },
      {
        "@type": "Question",
        name: `What are the key benefits of ${product.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.benefits
            .map((b) => `${b.title}: ${b.detail}`)
            .join(" "),
        },
      },
      {
        "@type": "Question",
        name: `How do I apply ${product.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: product.howToApply
            .map((s) => `${s.title}: ${s.detail}`)
            .join(" "),
        },
      },
      {
        "@type": "Question",
        name: `Where can I buy ${product.title} in India?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${product.title} are manufactured and supplied by Adit Biorganic, located in Anand, Gujarat, India. We supply B2B customers across India and export worldwide. Contact us at sales@aditbiorganic.com or call +91 98250 45894.`,
        },
      },
    ],
  };
}

/* ─────────────────────────────────────────────
   7. Services Page Schema
   ───────────────────────────────────────────── */
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services#service`,
  name: "Organic Fertilizer Manufacturing Services",
  provider: { "@id": `${SITE_URL}/#organization` },
  description:
    "Adit Biorganic offers comprehensive B2B fertilizer manufacturing services including organic granule production (190+ MT/day), custom formulation, job work/contract manufacturing, advanced coating, ISO 9001:2015 certified laboratory testing, custom packaging & private labeling, and warehouse facilities.",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Worldwide" },
  ],
  serviceType: [
    "Organic Granule Manufacturing",
    "Custom Fertilizer Formulation",
    "Contract Manufacturing",
    "Fertilizer Coating Services",
    "Laboratory Testing",
    "Private Label Packaging",
    "Warehouse Facilities",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manufacturing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organic & Coated Granule Manufacturing",
          description: "190+ MT/day production capacity for organic and mineral fertilizer granules.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Formulation / Recipe Development",
          description: "Bespoke nutrient formulations developed in our ISO 9001:2015 certified in-house laboratory.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Job Work / Contract Manufacturing",
          description: "White-label B2B manufacturing for fertilizer brands and distributors across India.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advanced Coating Services",
          description: "Precision coating technology for slow-release and specialty fertilizer products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laboratory & Quality Testing",
          description: "ISO 9001:2015 certified in-house testing for nutrient content, granule size, and quality parameters.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Packaging & Private Labeling",
          description: "Flexible packaging solutions with private-label branding for B2B partners.",
        },
      },
    ],
  },
};

/* ─────────────────────────────────────────────
   8. About Page — ManuFacturer Schema
   ───────────────────────────────────────────── */
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: "About Adit Biorganic — India's Leading Organic Fertilizer Manufacturer",
  description:
    "Learn about Adit Biorganic, founded by Akash Dadhania — ISO 9001:2015 certified organic fertilizer granule manufacturer in Anand, Gujarat with 190+ MT/day production capacity and 50+ B2B partners.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  },
};

/* ─────────────────────────────────────────────
   9. Contact Page Schema
   ───────────────────────────────────────────── */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact Adit Biorganic — B2B Fertilizer Manufacturer, Anand Gujarat",
  description:
    "Get in touch with Adit Biorganic for B2B fertilizer granule inquiries, bulk orders, custom formulation, and export partnerships. Call +91 98250 45894 or email sales@aditbiorganic.com.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

/* ─────────────────────────────────────────────
   10. Products Listing Page Schema
   ───────────────────────────────────────────── */
export const productsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/products#collection`,
  url: `${SITE_URL}/products`,
  name: "Organic Fertilizer Granule Products — Adit Biorganic",
  description:
    "Browse Adit Biorganic's complete range of B2B organic fertilizer base granules: Mineral, Bio-Fertilizer, Bio-Stimulant, Mix Micro, Bio-Pesticide, Pesticide, Base, and Organic granules. ISO 9001:2015 certified, manufactured in Gujarat, India.",
  provider: { "@id": `${SITE_URL}/#organization` },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    ],
  },
};
