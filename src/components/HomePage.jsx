import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { ImagePanel } from "@/components/ImagePanel";
import { SectionIntro } from "@/components/SectionIntro";
import { MetricCard } from "@/components/MetricCard";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ProductCard } from "@/components/ProductCard";
import { ServiceCard } from "@/components/ServiceCard";
import { InsightCard } from "@/components/InsightCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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

const heroStats = [
  { value: "190+ MT", label: "Daily Production Capacity" },
  { value: "480+", label: "Trusted B2B Partners" },
  { value: "10+ Years", label: "Industry Experience" },
  { value: "ISO 9001:2015", label: "Certified" },
];

const expertiseCards = [
  {
    icon: "leaf",
    title: "Customized Formulations",
    description:
      "Goes beyond standard bentonite to create unique mineral and organic 'Recipe Granules' tailored to specific requirements.",
  },
  {
    icon: "shield",
    title: "Consistent Quality",
    description:
      "Every granule is manufactured to exact client specifications with guaranteed purity. In-house ISO-certified testing laboratory.",
  },
  {
    icon: "factory",
    title: "High Capacity",
    description:
      "190+ MT/day capacity with 24/7 operations ensures bulk orders are met even during peak seasons.",
  },
  {
    icon: "flask",
    title: "Reliable B2B Partnership",
    description:
      "Over a decade of experience delivering high-volume, cost-effective solutions to 480+ trusted B2B partners across India.",
  },
];

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

const services = [
  {
    title: "Granule Manufacturing",
    concept: "190+ MT/day capacity",
    description:
      "Production of high-quality organic and mineral 'Recipe Granules' - superior, customizable alternative to standard bentonite. Tailored to client-specific formulation requirements with 24/7 operations.",
    icon: "factory",
  },
  {
    title: "Custom Formulation",
    concept: "Client-specific recipe development",
    description:
      "Unique nutrient profiles using materials like Gypsum, Dolomite, organic compost, and mineral blends. Supports diverse crop types and agricultural requirements.",
    icon: "flask",
  },
  {
    title: "Contract Manufacturing",
    concept: "Your brand, our facility",
    description:
      "Full-scale white-label/contract manufacturing for B2B fertilizer brands. Cost-effective, high-volume production with consistent batch-to-batch quality assurance.",
    icon: "leaf",
  },
  {
    title: "Precision Coating Services",
    concept: "Active ingredient application",
    description:
      "Application of active ingredients, liquids, or powders onto base granules. Used for bio-pesticide and pesticide product lines. Ensures uniform coating and reliable field performance.",
    icon: "shield",
  },
  {
    title: "Laboratory & Testing",
    concept: "ISO 9001:2015 certified",
    description:
      "In-house testing for purity, consistency, and performance on every batch. Strict quality assurance at every stage guarantees every product meets exact client specifications before dispatch.",
    icon: "package",
  },
  {
    title: "Packaging & Dispatch",
    concept: "Market-ready finishing",
    description:
      "We support filling, packing, and brand-forward presentation so your finished output is easier to launch and distribute. Comprehensive logistics support for Pan-India delivery.",
    icon: "warehouse",
  },
];

const processSteps = [
  {
    title: "Requirement alignment",
    description: "We understand the formulation goal, target application, packaging needs, and dispatch expectations.",
  },
  {
    title: "Granule design and validation",
    description: "Base selection, recipe development, and production checks are aligned before scale manufacturing begins.",
  },
  {
    title: "Controlled production",
    description: "Granulation, coating, drying, and handling follow a disciplined production workflow built for repeatability.",
  },
  {
    title: "Packing and dispatch readiness",
    description: "Finished goods are prepared for warehouse movement, partner pickup, or onward distribution support.",
  },
];

const insightPosts = [
  {
    title: "Why custom recipe granules matter for fertilizer brands",
    excerpt:
      "A stronger base granule can improve consistency, reduce compromise in formulation strategy, and sharpen your brand promise in the market.",
    topic: "Custom manufacturing",
  },
  {
    title: "What procurement teams should check before choosing a granule partner",
    excerpt:
      "Capacity, testing discipline, dispatch capability, and formulation flexibility are the non-negotiables for dependable B2B supply.",
    topic: "B2B procurement",
  },
  {
    title: "How quality assurance protects distributor confidence",
    excerpt:
      "Repeatable batches, controlled handling, and clear process discipline reduce downstream risk for large distribution networks.",
    topic: "Quality systems",
  },
];

const partnerBenefits = [
  "Over a decade of manufacturing experience",
  "24/7 operations for advanced organic granular fertilizers",
  "State-of-the-art facilities and robust R&D",
  "Customized, eco-friendly solutions that improve soil health",
  "Boost farm productivity nationwide",
];

const images = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  granules: "/images/granules.jpg",
  soil: "/images/soil.jpg",
  lab: "/images/lab.jpg",
  partnership: "/images/partnership.jpg",
};

const MetricCardComponent = ({ item, index }) => (
  <div className="rounded-[28px] border border-border bg-surface-card p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)]">
    <p className="font-heading text-3xl font-semibold text-primary">{item.value}</p>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
  </div>
);

const HomePage = () => (
  <>
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,77,62,0.1),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {company.tagline}
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
              {company.subTagline}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {company.heroSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-primary">
              {company.missionTagline}
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
              <Link to="/contact">
                Become a B2B partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
              <a href={`tel:${company.phoneRaw}`}>
                Call {company.phoneDisplay}
                <PhoneCall className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <ImagePanel
          src={images.hero}
          alt="Aerial sustainable agriculture field"
          className="aspect-[4/4.6] min-h-[360px] lg:min-h-[620px]"
          overlay={
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/30 bg-surface-overlay/92 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">What clients need</p>
                <p className="mt-3 font-heading text-2xl font-semibold text-foreground">Consistency at scale</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Granules engineered for repeatability, handling, and dependable supply.</p>
              </div>
              <div className="rounded-[24px] border border-white/30 bg-primary p-5 text-white shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">Why Adit Biorganic</p>
                <p className="mt-3 font-heading text-2xl font-semibold">Industrial discipline, organic intent</p>
              </div>
            </div>
          }
        />
      </div>
    </section>

    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {heroStats.map((item, index) => (
          <MetricCardComponent key={item.value} item={item} index={index} />
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Products
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Premium Granular Products
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            High-quality base granules engineered for consistent performance and sustainable agriculture.
          </p>
        </div>
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white shrink-0">
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
      
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {products.map((product, index) => (
            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3">
              <ProductCard product={product} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6 top-1/2 -translate-y-1/2" />
        <CarouselNext className="-right-6 top-1/2 -translate-y-1/2" />
      </Carousel>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Core strengths"
        title="The Foundation for Sustainable Farming"
        description="We believe superior crops start with superior soil. Our high-quality granular fertilizers are the key."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertiseCards.map((card, index) => (
          <ExpertiseCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:items-center">
        <ImagePanel
          src={images.factory}
          alt="Manufacturing facility"
          className="aspect-[4/4.6] min-h-[360px]"
          overlay={
            <div className="rounded-[26px] border border-white/30 bg-surface-overlay/94 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Chairman's message</p>
              <p className="mt-3 font-accent text-xl text-primary">
                "Our mission is not just about business but about contributing positively to the environment."
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">{company.founder}, {company.founderTitle}</p>
            </div>
          }
        />
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            About Adit Biorganic
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {company.aboutIntro}
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {company.aboutDetails}
          </p>
          <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
            <Link to="/about">Explore our story</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="What we offer"
        title="Comprehensive Manufacturing Services"
        description="From contract manufacturing to quality assurance, we provide end-to-end solutions for fertilizer brands."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {services.slice(0, 6).map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Why Choose Us
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Quality You Can Trust, Results You Can See
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            Every product is manufactured using state-of-the-art technology under ISO 9001:2015 certified processes.
          </p>
          <div className="grid gap-4">
            {partnerBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <svg className="mt-1 h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm leading-7 text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-full bg-accent px-6 text-white hover:bg-accent/80">
              <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-secondary">
              <Link to="/contact">Open contact page</Link>
            </Button>
          </div>
        </div>
        <InquiryForm
          title="Request a production or distributor discussion"
          description="Share your requirement and the Adit Biorganic team will follow up with the right commercial or technical conversation."
          submitLabel="Send B2B inquiry"
        />
      </div>
    </section>
  </>
);

export { HomePage };
