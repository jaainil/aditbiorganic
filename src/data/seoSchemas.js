/**
 * Central JSON-LD / Schema.org structured data for Adit Biorganic.
 * Used by SEOHead on every page for maximum Google Rich Results eligibility.
 *
 * Target keywords:
 *  - India: organic fertilizer manufacturer, granule fertilizer manufacturer india,
 *           b2b fertilizer manufacturer, bio fertilizer manufacturer gujarat
 *  - Gujarat: fertilizer manufacturer gujarat, anand gujarat fertilizer, organic granules gujarat
 *  - Export: organic fertilizer exporter india, granule fertilizer exporter, bio fertilizer export
 *  - AI/GEO: recipe granules, base granules, ISO certified fertilizer manufacturer
 */

const SITE_URL = "https://aditbiorganic.com";
const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

/* ─────────────────────────────────────────────
   1. Organization + LocalBusiness (Extended)
   ───────────────────────────────────────────── */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ManufacturingBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: "Adit Biorganic",
  alternateName: ["Adit Bio Organic", "Aditbiorganic", "Adit Biorganic Pvt Ltd"],
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 200,
    height: 60,
    caption: "Adit Biorganic Logo",
  },
  image: [
    {
      "@type": "ImageObject",
      url: OG_IMAGE_URL,
      width: 1200,
      height: 630,
      caption: "Adit Biorganic — India's #1 B2B Organic Fertilizer Granule Manufacturer, Anand Gujarat",
    },
    {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/factory.jpg`,
      caption: "Adit Biorganic Manufacturing Facility — Anand, Gujarat, India",
    },
  ],
  description:
    "Adit Biorganic is India's leading ISO 9001:2015 certified B2B organic fertilizer granule manufacturer based in Anand, Gujarat. We produce 190+ MT/day of mineral, bio-fertilizer, bio-stimulant, bio-pesticide, and organic base granules (Recipe Granules) for fertilizer brands, distributors, and exporters across India and worldwide.",
  foundingDate: "2014",
  founder: {
    "@type": "Person",
    name: "Akash Dadhania",
    jobTitle: "Founder & Director",
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  address: {
    "@type": "PostalAddress",
    "@id": `${SITE_URL}/#address`,
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
  hasMap: "https://maps.google.com/?q=22.5560,72.9273",
  telephone: "+919825045894",
  email: ["info@aditbiorganic.com", "sales@aditbiorganic.com"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+919825045894",
      contactType: "sales",
      contactOption: "TollFree",
      areaServed: ["IN", "Worldwide"],
      availableLanguage: ["English", "Gujarati", "Hindi"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
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
  openingHours: ["Mo-Sa 09:00-18:00"],
  sameAs: [
    "https://www.linkedin.com/company/adit-biorganic",
    "https://www.facebook.com/aditbiorganic",
    "https://www.instagram.com/aditbiorganic",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Organic Fertilizer Granule Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Mineral Base Granules",
          url: `${SITE_URL}/products/mineral-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bio-Fertilizer Base Granules",
          url: `${SITE_URL}/products/bio-fertilizer-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bio-Stimulant Base Granules",
          url: `${SITE_URL}/products/bio-stimulant-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Mix Micro Base Granules",
          url: `${SITE_URL}/products/mix-micro-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Bio-Pesticide Base Granules",
          url: `${SITE_URL}/products/bio-pesticide-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Pesticide Base Granules",
          url: `${SITE_URL}/products/pesticide-base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Base Granules",
          url: `${SITE_URL}/products/base-granules`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Organic Base Granules",
          url: `${SITE_URL}/products/organic-base-granules`,
        },
      },
    ],
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  award: "ISO 9001:2015 Certified Quality Management System",
  slogan: "Organic Naturally — Nurturing Farms, Preserving Nature",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Gujarat" },
    { "@type": "City", name: "Anand" },
    { "@type": "AdministrativeArea", name: "Worldwide Export" },
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
    "Recipe Granules",
    "Fertilizer Coating Technology",
    "ISO 9001:2015 Quality Management",
    "B2B Agricultural Supply",
    "Organic Farming",
  ],
  memberOf: [
    {
      "@type": "Organization",
      name: "Fertilizer Association of India",
    },
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
  description:
    "India's Leading B2B Organic Fertilizer Granule Manufacturer — ISO 9001:2015 Certified, Anand, Gujarat",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en-IN", "gu-IN"],
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
        text: "Adit Biorganic manufactures a complete range of organic fertilizer base granules including Mineral Base Granules, Bio-Fertilizer Base Granules, Bio-Stimulant Base Granules, Mix Micro Base Granules, Bio-Pesticide Base Granules, Pesticide Base Granules, Base Granules (Recipe Granules), and Organic Base Granules. All products are ISO 9001:2015 certified and produced at 190+ MT/day capacity in Anand, Gujarat, India.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Adit Biorganic located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adit Biorganic is located at S. No. 1152, Kanatalavdi Road, Adas, Anand, Gujarat — 388305, India (GPS: 22.5560°N, 72.9273°E). The factory operates 24/7 and is strategically situated in Gujarat's agricultural heartland.",
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
        text: "Yes. Adit Biorganic supplies fertilizer brands, distributors, and procurement teams across India and exports worldwide. We partner with 50+ trusted B2B partners. Contact our sales team at sales@aditbiorganic.com or call +91 98250 45894 for export inquiries.",
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
        text: "A Recipe Granule (or Base Granule) is a custom-formulated granular carrier that holds active nutrients — organic, mineral, or biological — in a stable, slow-release form. Adit Biorganic's Recipe Granules use Gypsum, Dolomite, and composted organic matter instead of plain bentonite, offering 70%+ coating capacity and superior agronomic efficiency compared to standard bentonite granules.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a quote from Adit Biorganic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Request a B2B quote by: (1) visiting our Contact page at aditbiorganic.com/contact, (2) calling +91 98250 45894, or (3) emailing sales@aditbiorganic.com. Our team responds within 24 hours on business days.",
      },
    },
    {
      "@type": "Question",
      name: "Can Adit Biorganic manufacture under my brand name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adit Biorganic offers complete white-label and private-label manufacturing services, including custom formulation, production, packaging, and labeling under the client's brand identity. This is a core B2B service used by fertilizer brands across India and worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "Which states in India does Adit Biorganic supply to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adit Biorganic supplies pan-India across Gujarat, Maharashtra, Rajasthan, Uttar Pradesh, Madhya Pradesh, Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, Punjab, Haryana, and more. Worldwide export is also available. Contact sales@aditbiorganic.com for your region.",
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
    image: [
      {
        "@type": "ImageObject",
        url: product.imageUrl.startsWith("http")
          ? product.imageUrl
          : `${SITE_URL}${product.imageUrl}`,
        caption: `${product.title} — manufactured by Adit Biorganic, Anand Gujarat India`,
      },
    ],
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
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "Worldwide" },
      ],
      eligibleRegion: [
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
      "recipe granules",
      "base granules manufacturer Gujarat",
      "Adit Biorganic",
    ].join(", "),
    countryOfOrigin: {
      "@type": "Country",
      name: "India",
    },
    isSimilarTo: [
      { "@type": "Product", name: "Organic Base Granules" },
      { "@type": "Product", name: "Bio-Fertilizer Base Granules" },
    ],
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
          text: `${product.title} are manufactured and supplied B2B by Adit Biorganic, located in Anand, Gujarat, India. We supply fertilizer brands, distributors, and exporters across India and worldwide. Contact us at sales@aditbiorganic.com or call +91 98250 45894.`,
        },
      },
      {
        "@type": "Question",
        name: `Does Adit Biorganic offer custom formulation for ${product.title}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Adit Biorganic's in-house ISO 9001:2015 certified laboratory can develop custom ${product.title} formulations (Recipe Granules) tailored to your specific crop targets, soil conditions, and brand requirements. Contact sales@aditbiorganic.com to discuss your requirements.`,
        },
      },
    ],
  };
}

/* ─────────────────────────────────────────────
   7. Product HowTo schema builder
   ───────────────────────────────────────────── */
export function buildProductHowToSchema(product) {
  if (!product.howToApply || product.howToApply.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Apply ${product.title}`,
    description: `Step-by-step guide for applying ${product.title} manufactured by Adit Biorganic for optimal crop results.`,
    image: {
      "@type": "ImageObject",
      url: product.imageUrl.startsWith("http")
        ? product.imageUrl
        : `${SITE_URL}${product.imageUrl}`,
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: product.title,
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Broadcast spreader or soil applicator",
      },
    ],
    step: product.howToApply.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.detail,
    })),
  };
}

/* ─────────────────────────────────────────────
   8. Products ItemList schema
   ───────────────────────────────────────────── */
export const productsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/products#itemlist`,
  name: "Organic Fertilizer Granule Products — Adit Biorganic",
  description:
    "Complete range of B2B organic fertilizer base granules manufactured by Adit Biorganic: Mineral, Bio-Fertilizer, Bio-Stimulant, Mix Micro, Bio-Pesticide, Pesticide, Base, and Organic granules.",
  url: `${SITE_URL}/products`,
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Mineral Base Granules",
      url: `${SITE_URL}/products/mineral-base-granules`,
      description: "Slow-release mineral fertilizer carrier with Gypsum, Dolomite and micronutrients",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bio-Fertilizer Base Granules",
      url: `${SITE_URL}/products/bio-fertilizer-base-granules`,
      description: "Microbial carrier granule with beneficial microorganisms for soil health",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bio-Stimulant Base Granules",
      url: `${SITE_URL}/products/bio-stimulant-base-granules`,
      description: "Plant growth stimulant carrier for enhanced yield and stress tolerance",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Mix Micro Base Granules",
      url: `${SITE_URL}/products/mix-micro-base-granules`,
      description: "Custom multi-micronutrient granule with Ca, Mg, P2O5, Zn, Bo and Organic Carbon",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Bio-Pesticide Base Granules",
      url: `${SITE_URL}/products/bio-pesticide-base-granules`,
      description: "Eco-friendly biological pest control granule — residue-free crop protection",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Pesticide Base Granules",
      url: `${SITE_URL}/products/pesticide-base-granules`,
      description: "Dual-action granule combining precision pest control with nutrient delivery",
    },
    {
      "@type": "ListItem",
      position: 7,
      name: "Base Granules",
      url: `${SITE_URL}/products/base-granules`,
      description: "Multi-purpose carrier platform with 70%+ coating capacity — Recipe Granules concept",
    },
    {
      "@type": "ListItem",
      position: 8,
      name: "Organic Base Granules",
      url: `${SITE_URL}/products/organic-base-granules`,
      description: "100% organic matter-based granule — organic-certified ready for finished products",
    },
  ],
};

/* ─────────────────────────────────────────────
   9. BlogPosting schema builder
   ───────────────────────────────────────────── */
export function buildBlogPostingSchema({ slug, title, excerpt, date, author, image, tags }) {
  const postUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = image
    ? image.startsWith("http") ? image : `${SITE_URL}${image}`
    : OG_IMAGE_URL;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: title,
    description: excerpt || title,
    url: postUrl,
    datePublished: date || "2026-01-01",
    dateModified: date || "2026-03-12",
    author: {
      "@type": "Person",
      name: author || "Akash Dadhania",
      jobTitle: "Founder & Director",
      worksFor: { "@id": `${SITE_URL}/#organization` },
    },
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
      name: "Agriculture & Fertilizer Industry Blog — Adit Biorganic",
      url: `${SITE_URL}/blog`,
    },
    inLanguage: "en-IN",
    keywords: tags ? tags.join(", ") : "organic fertilizer, agriculture, granule manufacturing, Gujarat India",
    about: {
      "@id": `${SITE_URL}/#organization`,
    },
    mentions: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/* ─────────────────────────────────────────────
   10. Blog Listing Page Schema
   ───────────────────────────────────────────── */
export const blogPageSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog#blog`,
  url: `${SITE_URL}/blog`,
  name: "Agriculture & Fertilizer Industry Blog — Adit Biorganic",
  description:
    "Expert B2B insights on organic fertilizer manufacturing, granule formulation, sustainable agriculture, and supply chain for fertilizer brands and distributors.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  about: { "@id": `${SITE_URL}/#organization` },
};

/* ─────────────────────────────────────────────
   11. Services Page Schema
   ───────────────────────────────────────────── */
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services#service`,
  name: "Organic Fertilizer Manufacturing Services",
  provider: { "@id": `${SITE_URL}/#organization` },
  description:
    "Adit Biorganic offers comprehensive B2B fertilizer manufacturing services including organic granule production (190+ MT/day), custom formulation (Recipe Granules), job work/contract manufacturing, advanced coating, ISO 9001:2015 certified laboratory testing, custom packaging & private labeling, and warehouse facilities in Anand, Gujarat, India.",
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
          description:
            "190+ MT/day production of organic and mineral fertilizer granules using proprietary Recipe Granule formulations.",
          url: `${SITE_URL}/services/organic-coated-granule-manufacturing`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Job Work / Contract Manufacturing",
          description:
            "White-label B2B manufacturing for fertilizer brands and distributors — full lifecycle from raw materials to dispatch.",
          url: `${SITE_URL}/services/job-work-contract-manufacturing`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Advanced Coating Services",
          description:
            "Precision liquid and powder coating technology for slow-release and specialty fertilizer granules.",
          url: `${SITE_URL}/services/advanced-coating-services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Packaging & Private Labeling",
          description:
            "Flexible B2B packaging solutions with full private-label branding for fertilizer brands.",
          url: `${SITE_URL}/services/custom-packaging-private-labeling`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laboratory & Quality Testing",
          description:
            "ISO 9001:2015 certified in-house testing: nutrient content, granule size, moisture, pH, and custom formulation development.",
          url: `${SITE_URL}/services/laboratory-testing-services`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Infrastructure Leasing",
          description:
            "Lease of manufacturing infrastructure and equipment at Adit Biorganic's Anand, Gujarat facility.",
          url: `${SITE_URL}/services/infrastructure-leasing`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Warehouse / Go-Down Facilities",
          description:
            "Secure bulk storage facilities in Anand, Gujarat for B2B partners and export preparation.",
          url: `${SITE_URL}/services/warehouse-go-down-facilities`,
        },
      },
    ],
  },
};

/* ─────────────────────────────────────────────
   12. Individual Service schema builder
   ───────────────────────────────────────────── */
export function buildServiceSchema({ slug, name, description, image }) {
  const serviceUrl = `${SITE_URL}/services/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name,
    description,
    url: serviceUrl,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Worldwide" },
    ],
    image: image
      ? { "@type": "ImageObject", url: image.startsWith("http") ? image : `${SITE_URL}${image}` }
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": serviceUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name, item: serviceUrl },
      ],
    },
  };
}

/* ─────────────────────────────────────────────
   13. About Page Schema
   ───────────────────────────────────────────── */
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#aboutpage`,
  url: `${SITE_URL}/about`,
  name: "About Adit Biorganic — India's Leading B2B Organic Fertilizer Manufacturer",
  description:
    "Learn about Adit Biorganic, founded by Akash Dadhania — ISO 9001:2015 certified organic fertilizer granule manufacturer in Anand, Gujarat with 190+ MT/day production capacity, 50+ B2B partners, and worldwide export capabilities.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
    ],
  },
};

/* ─────────────────────────────────────────────
   14. Contact Page Schema
   ───────────────────────────────────────────── */
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contact#contactpage`,
  url: `${SITE_URL}/contact`,
  name: "Contact Adit Biorganic — B2B Fertilizer Manufacturer, Anand Gujarat",
  description:
    "Get in touch with Adit Biorganic for B2B fertilizer granule inquiries, bulk orders, custom formulation (Recipe Granules), and worldwide export partnerships. Call +91 98250 45894 or email sales@aditbiorganic.com.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  },
};

/* ─────────────────────────────────────────────
   15. Products Listing Page Schema
   ───────────────────────────────────────────── */
export const productsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/products#collection`,
  url: `${SITE_URL}/products`,
  name: "Organic Fertilizer Granule Products — Adit Biorganic",
  description:
    "Browse Adit Biorganic's complete B2B range of organic fertilizer base granules: Mineral, Bio-Fertilizer, Bio-Stimulant, Mix Micro, Bio-Pesticide, Pesticide, Base, and Organic granules. ISO 9001:2015 certified, manufactured in Anand, Gujarat, India.",
  provider: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    ],
  },
};
