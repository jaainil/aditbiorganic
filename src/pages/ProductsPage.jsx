import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionIntro } from "@/components/SectionIntro";
import { ProductCard } from "@/components/ProductCard";

const company = {
  name: "Adit Biorganic",
  tagline: "Organic Naturally",
  subTagline: "Nurturing Farms, Preserving Nature",
  missionTagline: "EVERY CROP COUNTS. EVERY FARMER MATTERS.",
  legalTagline: "India's Leading B2B Fertilizer Manufacturer - ISO 9001:2015 Certified",
  heroTitle: "The Future of Sustainable Agriculture",
  heroSubtitle:
    "As pioneers in organic fertilizers, we provide nutrient-rich, sustainable solutions to enhance your crop yield and protect the land for generations to come.",
  aboutIntro: "Leading manufacturer of premium organic fertilizer granules",
  aboutDetails: "At Adit Biorganic, we are dedicated to sustainability by providing the agriculture industry with efficient and effective organic granular fertilizer solutions. As a leading ISO 9001:2015 certified manufacturer, we specialize in high-quality, customized nutrient base and coating granules. We partner with companies across India to produce the innovative, eco-friendly products that enhance soil health and maximize crop yield.",
  mission: "Our mission is to empower farmers and fertilizer brands with high-quality organic solutions that enhance soil health, improve crop yield, and promote environmental sustainability. We strive to be at the forefront of agricultural innovation, making a positive impact on the planet.",
  chairmanMessage: "I am proud to lead a team that is committed to excellence in organic agriculture. Our mission is not just about business but about contributing positively to the environment. With our innovative products and dedicated team, we aim to make a meaningful impact.",
  philosophy: "Quality You Can Trust, Results You Can See - Every product is manufactured using state-of-the-art technology under ISO 9001:2015 certified processes.",
  phoneDisplay: "+91 98250 45894",
  phoneRaw: "+919825045894",
  emails: ["info@aditbiorganic.com", "sales@aditbiorganic.com"],
  address: "S. No. 1152, Kanatalavdi Road, Adas, Anand, Gujarat - 388305",
  founder: "Akash Dadhania",
  founderTitle: "Founder & Director",
};

const products = [
  {
    title: "Mineral Base Granules",
    imageUrl: "/images/products/mineral-base-granules.png",
    summary: "Slow-release fertilizers that supply essential minerals and trace elements for sustainable plant growth. Improve soil fertility and nutrient availability with sustained, long-term nutrient delivery.",
    fit: ["Soil fertility", "Long-term nutrients", "Sustainable growth"],
  },
  {
    title: "Bio-Fertilizer Base Granules",
    imageUrl: "/images/products/bio-fertilizer-base-granules.png",
    summary: "Innovative agricultural inputs that improve soil fertility and support healthy plant growth through biological activity. Eco-friendly enhancement of soil microbiome and plant nutrition.",
    fit: ["Bio inputs", "Organic certified", "Soil microbiome"],
  },
  {
    title: "Bio-Stimulant Base Granules",
    imageUrl: "/images/products/bio-stimulant-base-granules.png",
    summary: "Plant growth stimulants that enhance plant biological processes beyond standard nutrition. Improves crop resilience, productivity, and natural stress tolerance.",
    fit: ["Crop resilience", "Stress tolerance", "Value-added blends"],
  },
  {
    title: "Mix Micro Base Granules",
    imageUrl: "/images/products/mix-micro-base-granules.png",
    summary: "Customizable micronutrient solution to correct deficiencies and boost soil fertility. Contains Calcium, Magnesium, Potash, Zinc and more for vegetables, fruits, and grains.",
    fit: ["Micronutrient blends", "Custom specification", "Multi-crop"],
  },
  {
    title: "Bio-Pesticide Base Granules",
    imageUrl: "/images/products/bio-pesticide-base-granules.png",
    summary: "Eco-friendly crop protection granules that protect plant health while preserving biodiversity. Custom-manufactured or applied using existing bio-pesticide liquids/powders.",
    fit: ["Eco-friendly", "IPM compatible", "Residue-free"],
  },
  {
    title: "Pesticide Base Granules",
    imageUrl: "/images/products/pesticide-base-granules.png",
    summary: "Multi-functional crop protection foundation that acts as both carrier for pesticide active ingredients AND provider of essential nutrients and organic matter.",
    fit: ["Dual-action", "Pest control + soil health", "Customizable"],
  },
  {
    title: "Base Granules",
    imageUrl: "/images/products/base-granules.png",
    summary: "Fundamental product component and carrier granule - a customizable platform beyond traditional bentonite fillers. Made from Gypsum, Dolomite, and mineral/organic inputs.",
    fit: ["190 MT/day capacity", "Flexible use", "Recipe granules"],
  },
  {
    title: "Organic Base Granules",
    imageUrl: "/images/products/organic-base-granules.png",
    summary: "Certified organic carrier granules - a sustainable, nutrient-rich foundation for organic-certified fertilizers. Actively enhances soil health and feeds soil microbes.",
    fit: ["Organic certified", "Soil health", "Premium positioning"],
  },
];

const productHighlights = [
  "Customized 'Recipe Granules' - superior alternative to standard bentonite",
  "Unique nutrient profiles using Gypsum, Dolomite, organic compost, and mineral blends",
  "Supports diverse crop types and agricultural requirements",
  "Every product manufactured under ISO 9001:2015 certified processes",
];

const images = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  granules: "/images/granules.jpg",
  soil: "/images/soil.jpg",
  lab: "/images/lab.jpg",
  partnership: "/images/partnership.jpg",
};

export const ProductsPage = () => (
  <>
    <PageHero
      eyebrow="Products"
      title="Premium Organic Fertilizer Products"
      description="High-quality granular fertilizers engineered for consistent performance and sustainable agriculture."
      imageSrc={images.granules}
      imageAlt="Granular fertilizer close-up"
      badges={["Organic bases", "Mineral bases", "Customizable recipes"]}
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
          <Link to="/contact">Request a product discussion</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
          <a href={`tel:${company.phoneRaw}`}>Call our team</a>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Catalog overview"
        title="Core Product Families"
        description="All product families from the existing website are preserved, rewritten professionally, and presented in a cleaner premium layout so clients can understand the scope of supply quickly."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <ImagePanel src={images.soil} alt="Healthy soil and organic performance" testId="products-highlight-image-panel" className="aspect-[4/4.6] min-h-[360px]" />
        <div className="space-y-5">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            What Can Be Customized
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Recipe Granules Built Around Partner Requirements</h2>
          <div className="grid gap-4">
            {productHighlights.map((item, index) => (
              <div key={index} className="flex items-start gap-3 rounded-[24px] border border-border bg-surface-card p-5">
                <svg className="mt-1 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);
