import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall, CheckCircle2, ChevronRight, MoveRight } from "lucide-react";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ImagePanel } from "@/components/ImagePanel";
import { ExpertiseCard } from "@/components/ExpertiseCard";
import { ServiceCard } from "@/components/ServiceCard";
import { InsightCard } from "@/components/InsightCard";
import { InquiryForm } from "@/components/InquiryForm";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { SEOHead } from "@/components/SEOHead";
import { organizationSchema, websiteSchema, homeFaqSchema } from "@/data/seoSchemas";
import { getAllBlogs } from "@/lib/content";

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
  aboutDetails:
    "At Adit Biorganic, we are dedicated to sustainability by providing the agriculture industry with efficient and effective organic granular fertilizer solutions. As a leading ISO 9001:2015 certified manufacturer, we specialize in high-quality, customized nutrient base and coating granules. We partner with companies across India to produce the innovative, eco-friendly products that enhance soil health and maximize crop yield.",
  mission:
    "Our mission is to empower farmers and fertilizer brands with high-quality organic solutions that enhance soil health, improve crop yield, and promote environmental sustainability. We strive to be at the forefront of agricultural innovation, making a positive impact on the planet.",
  chairmanMessage:
    "I am proud to lead a team that is committed to excellence in organic agriculture. Our mission is not just about business but about contributing positively to the environment. With our innovative products and dedicated team, we aim to create a sustainable future for agriculture.",
  philosophy:
    "Quality You Can Trust, Results You Can See - Every product is manufactured using state-of-the-art technology under ISO 9001:2015 certified processes.",
  phoneDisplay: "+91 98250 45894",
  phoneRaw: "+919825045894",
  emails: ["info@aditbiorganic.com", "sales@aditbiorganic.com"],
  address: "S. No. 1152, Kanatalavdi Road, Adas, Anand, Gujarat - 388305",
  founder: "Akash Dadhania",
  founderTitle: "Founder & Director",
};

const heroStats = [
  { value: "190+", unit: "MT", label: "Daily Production Capacity" },
  { value: "50+", unit: "", label: "Trusted B2B Partners" },
  { value: "10+", unit: "Yrs", label: "Industry Experience" },
  { value: "ISO", unit: "", label: "9001:2015 Certified" },
];

const expertiseCards = [
  {
    icon: "leaf",
    title: "Customized Organic Solutions",
    description:
      'We specialize in "Recipe Granules," creating unique organic and mineral-based formulas tailored to your specific nutrient and coating requirements.',
  },
  {
    icon: "shield",
    title: "Absolute Quality",
    description:
      "Our state-of-the-art testing laboratory and ISO 9001:2015 certification ensure every batch meets the highest standards for consistency and purity.",
  },
  {
    icon: "factory",
    title: "Environmentally Friendly",
    description:
      "Our products are designed to enhance long-term soil health, support beneficial microbial life, and promote sustainable agriculture.",
  },
  {
    icon: "flask",
    title: "Reliable B2B Partnership",
    description:
      "With a massive 190+ MT/day capacity and over a decade of experience, we deliver high-volume, cost-effective manufacturing solutions on time, every time.",
  },
];



// Services with real bg images from the old site
const services = [
  {
    title: "Granule Manufacturing",
    concept: "190+ MT/day capacity",
    description:
      "Production of high-quality organic and mineral 'Recipe Granules' — a superior, customizable alternative to standard bentonite. Tailored to client-specific formulation requirements with 24/7 operations.",
    icon: "factory",
    imageSrc: "/images/service-bg-1.jpg",
  },
  {
    title: "Custom Formulation",
    concept: "Client-specific recipe development",
    description:
      "Unique nutrient profiles using materials like Gypsum, Dolomite, organic compost, and mineral blends. Supports diverse crop types and agricultural requirements.",
    icon: "flask",
    imageSrc: "/images/service-bg-2.jpg",
  },
  {
    title: "Contract Manufacturing",
    concept: "Your brand, our facility",
    description:
      "Full-scale white-label/contract manufacturing for B2B fertilizer brands. Cost-effective, high-volume production with consistent batch-to-batch quality assurance.",
    icon: "leaf",
    imageSrc: "/images/service-bg-3.jpg",
  },
  {
    title: "Precision Coating Services",
    concept: "Active ingredient application",
    description:
      "Application of active ingredients, liquids, or powders onto base granules. Ensures uniform coating and reliable field performance.",
    icon: "shield",
    imageSrc: "/images/service-bg-4.jpg",
  },
  {
    title: "Laboratory & Testing",
    concept: "ISO 9001:2015 certified",
    description:
      "In-house testing for purity, consistency, and performance on every batch. Strict quality assurance at every stage guarantees every product meets exact client specifications before dispatch.",
    icon: "package",
    imageSrc: "/images/service-bg-5.jpg",
  },
  {
    title: "Packaging & Dispatch",
    concept: "Market-ready finishing",
    description:
      "We support filling, packing, and brand-forward presentation so your finished output is easier to launch and distribute. Comprehensive logistics support for Pan-India delivery.",
    icon: "warehouse",
    imageSrc: "/images/service-bg-6.jpg",
  },
];

const insightPosts = getAllBlogs().slice(0, 3);

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
  facilityOverview: "/images/facility-overview.jpg",
  biopestGranulesHero: "/images/bio-pesticide-granules-hero.jpg",
  productsOverview: "/images/products-overview.png",
};

// Scrolling product ticker items (from old site)
const productTicker = [
  { name: "Pesticide Base Granules", img: "/images/products/pesticide-base-granules.png" },
  { name: "Base Granules", img: "/images/products/base-granules.png" },
  { name: "Organic Base Granules", img: "/images/products/organic-base-granules.png" },
  { name: "Mineral Base Granules", img: "/images/products/mineral-base-granules.png" },
  { name: "Bio-Fertilizer Base Granules", img: "/images/products/bio-fertilizer-base-granules.png" },
  { name: "Bio-Stimulant Base Granules", img: "/images/products/bio-stimulant-base-granules.png" },
  { name: "Mix Micro Base Granules", img: "/images/products/mix-micro-base-granules.png" },
  { name: "Bio-Pesticide Base Granules", img: "/images/products/bio-pesticide-base-granules.png" },
];

const HomePage = () => (
  <>
    <SEOHead
      title="India's #1 B2B Organic Fertilizer Granule Manufacturer | Anand, Gujarat"
      description="Adit Biorganic — ISO 9001:2015 certified organic fertilizer granule manufacturer in Anand, Gujarat. 190+ MT/day capacity. Mineral, Bio-Fertilizer, Bio-Stimulant, Organic Base Granules. Custom formulation, contract manufacturing & worldwide export."
      canonical="/"
      ogImage="/images/hero.jpg"
      keywords="organic fertilizer manufacturer india, granule fertilizer manufacturer gujarat, b2b fertilizer manufacturer, bio fertilizer manufacturer, organic base granules manufacturer, mineral base granules, fertilizer exporter india, anand gujarat fertilizer, ISO certified fertilizer manufacturer, custom fertilizer formulation"
      schema={[organizationSchema, websiteSchema, homeFaqSchema]}
      article={null}
      product={null}
    />
    {/* ── Hero ── */}
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
              <Link to="/services">
                Explore Our Services
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
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Our promise</p>
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

    {/* ── Stats Bar (floating) ── */}
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {heroStats.map((item) => (
          <div
            key={item.label}
            className="rounded-[28px] border border-border bg-surface-card p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)]"
          >
            <p className="font-heading text-3xl font-semibold text-primary">
              {item.value}
              {item.unit && <span className="ml-1 text-xl text-muted-foreground">{item.unit}</span>}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── Second Hero Panel — "The Future of Sustainable Agriculture" ── */}
    <section className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 lg:px-8 lg:pt-32 lg:pb-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ImagePanel
          src={images.facilityOverview}
          alt="Adit Biorganic facility overview"
          className="aspect-[4/3.5] min-h-[300px]"
          overlay={
            <div className="rounded-[24px] border border-white/30 bg-secondary/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">ISO 9001:2015 Certified</p>
              <p className="mt-2 font-heading text-lg font-semibold text-white">"Quality You Can Trust. Results You Can See."</p>
            </div>
          }
        />
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {company.heroTitle}
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Quality You Can Trust.<br />Results You Can See.
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Leveraging state-of-the-art technology and ISO 9001:2015 certified processes, we deliver high-performance, eco-friendly fertilizers you can depend on.
          </p>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            We are a leading manufacturer providing high-quality, customized organic fertilizer solutions that enhance soil health and ensure farm sustainability.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── Products Ticker / Marquee — like old site ── */}
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            What Is Our Expertise?
          </div>
          <h2 className="mt-5 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Manufacturing Advanced Granular Fertilizers
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-8 text-muted-foreground">
            Adit Biorganic specializes in manufacturing nutrient base and coating granular fertilizers. We provide customized 'Recipe Granules' using mineral and organic bases as a superior alternative to standard bentonite.
          </p>
        </div>
      </div>

      {/* Scrolling product image strip */}
      <div className="relative overflow-hidden border-y border-border bg-muted py-6">
        <div className="flex gap-0">
          {/* First copy */}
          <div className="flex shrink-0 animate-[marquee_35s_linear_infinite] items-center gap-0">
            {[...productTicker, ...productTicker].map((p) => (
              <div key={`ticker-1-${p.name.replace(/\s/g, '-')}-${Math.random().toString(36).slice(2)}`} className="flex shrink-0 items-center gap-4 px-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface-card p-2 shadow-sm">
                  <img src={p.img} alt={p.name} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <span className="whitespace-nowrap font-heading text-sm font-semibold text-foreground">{p.name}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60 ml-2" />
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div aria-hidden className="flex shrink-0 animate-[marquee_35s_linear_infinite] items-center gap-0">
            {[...productTicker, ...productTicker].map((p) => (
              <div key={`ticker-2-${p.name.replace(/\s/g, '-')}-${Math.random().toString(36).slice(2)}`} className="flex shrink-0 items-center gap-4 px-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface-card p-2 shadow-sm">
                  <img src={p.img} alt={p.name} className="h-full w-full object-contain" loading="lazy" />
                </div>
                <span className="whitespace-nowrap font-heading text-sm font-semibold text-foreground">{p.name}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60 ml-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View all products CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8 flex justify-center">
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-8 text-primary hover:bg-primary hover:text-white">
          <Link to="/products">View All Products</Link>
        </Button>
      </div>
    </section>

    {/* ── About / Foundation section ── */}
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
        <div className="space-y-7">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            {company.subTagline}
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            The Foundation of Your Harvest is Built on Quality
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            {company.aboutDetails}
          </p>
          {/* Mission + Chairman side by side */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-border bg-surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Our Mission</p>
              <p className="mt-3 font-accent text-base leading-7 text-foreground italic">
                "{company.mission.slice(0, 120)}…"
              </p>
            </div>
            <div className="rounded-[24px] bg-secondary p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Chairman's Note</p>
              <p className="mt-3 font-accent text-base leading-7 text-white italic">
                "{company.chairmanMessage.slice(0, 120)}…"
              </p>
              <p className="mt-3 text-xs font-medium text-white/65">— {company.founder}</p>
            </div>
          </div>
          <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
            <Link to="/about">More About Us</Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ── Core Expertise Cards ── */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 text-center">
        <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Core strengths
        </div>
        <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The Foundation for Sustainable Farming
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          We believe superior crops start with superior soil. Our high-quality granular fertilizers are the key.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertiseCards.map((card) => (
          <ExpertiseCard key={card.title} card={card} />
        ))}
      </div>
    </section>

    {/* ── Why Choose Us ── */}
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Why Choose Us
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            At Adit Biorganic, We Are Your Partner In Sustainable Agriculture.
          </h2>
          <p className="max-w-xl text-base leading-8 text-white/80 sm:text-lg">
            With over a decade of manufacturing experience, we operate 24/7 to produce advanced organic granular fertilizers. Our state-of-the-art facilities and robust R&D allow us to create customized, eco-friendly solutions that improve soil health and boost farm productivity nationwide.
          </p>
          <div className="grid gap-3">
            {partnerBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-7 text-white/85">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="h-12 rounded-full bg-accent px-6 text-secondary font-semibold hover:bg-accent/80">
              <Link to="/about">Read More</Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-secondary">
              <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
            </Button>
          </div>
        </div>
        {/* Right: real factory image */}
        <ImagePanel
          src={images.biopestGranulesHero}
          alt="Bio-Pesticide Granules — Adit Biorganic product"
          className="aspect-[4/4.6] min-h-[400px]"
          overlay={
            <div className="rounded-[24px] border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">India's Leading B2B Fertilizer Manufacturer</p>
              <p className="mt-1 font-heading text-lg font-semibold text-white">ISO 9001:2015 Certified</p>
            </div>
          }
        />
      </div>
    </section>

    {/* ── Products Carousel ── */}
    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex rounded-full border border-border bg-surface-overlay px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
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
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-6 items-stretch">
            {products.map((product) => (
              <CarouselItem key={product.slug} className="pl-6 md:basis-1/2 lg:basis-1/3">
                <Link
                  to={`/products/${product.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-surface-card shadow-[0_16px_50px_rgba(16,24,40,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,24,40,0.1)]"
                >
                  <div className="relative h-56 w-full shrink-0 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-semibold text-foreground">{product.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.fit.map((tag) => (
                        <span key={tag} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                      Read more
                      <MoveRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="-right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </section>

    {/* ── Services with Real Images ── */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Our Services
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            What We Offer
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            We provide comprehensive, end-to-end B2B solutions for the fertilizer industry, from custom formulation and manufacturing to precision coating and quality assurance.
          </p>
        </div>
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white shrink-0">
          <Link to="/services">View All Services</Link>
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>

    {/* ── Blog / Insights ── */}
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            From The Blog Post
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Latest News &amp; Articles
          </h2>
          <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Explore our latest insights on sustainable agriculture, organic fertilizer technology, and manufacturing innovations for our B2B partners.
          </p>
        </div>
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white shrink-0">
          <Link to="/blog">View All Articles</Link>
        </Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {insightPosts.map((post) => (
          <InsightCard key={post.slug} post={post} />
        ))}
      </div>
    </section>

    {/* ── Contact / Inquiry ── */}
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-start">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Why Choose Us
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Quality You Can Trust, Results You Can See
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Every product is manufactured using state-of-the-art technology under ISO 9001:2015 certified processes.
          </p>
          <div className="grid gap-4">
            {partnerBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm leading-7 text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-full bg-accent px-6 text-secondary font-semibold hover:bg-accent/80">
              <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-secondary">
              <Link to="/contact">Open contact page</Link>
            </Button>
          </div>
          {/* Contact details */}
          <div className="grid gap-3 pt-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-accent" />
              <span>{company.address}</span>
            </div>
            {company.emails.map((email) => (
              <div key={email} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-accent" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
              </div>
            ))}
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
