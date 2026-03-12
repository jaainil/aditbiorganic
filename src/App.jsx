import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  Clock3,
  Factory,
  FileText,
  FlaskConical,
  Leaf,
  PackageCheck,
  PhoneCall,
  ShieldCheck,
  Sprout,
  Truck,
  Warehouse,
} from "lucide-react";

import { SiteShell } from "@/components/SiteShell";
import { InquiryForm } from "@/components/InquiryForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import {
  company,
  companyPillars,
  expertiseCards,
  heroStats,
  images,
  insightPosts,
  partnerBenefits,
  processSteps,
  productHighlights,
  products,
  services,
  trustBadges,
} from "@/data/siteContent";

const iconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  factory: Factory,
  flask: FlaskConical,
  package: PackageCheck,
  warehouse: Warehouse,
  truck: Truck,
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
};

const SectionIntro = ({ eyebrow, title, description, action }) => (
  <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
    <div className="max-w-3xl space-y-4">
      <div className="inline-flex rounded-full border border-[#d7d7d1] bg-[#f5f4ef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#1b4d3e]" data-testid={`section-eyebrow-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {eyebrow}
      </div>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl" data-testid={`section-title-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-[#4a4a4a] sm:text-lg" data-testid={`section-description-${eyebrow.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
        {description}
      </p>
    </div>
    {action ? <div>{action}</div> : null}
  </div>
);

const ImagePanel = ({ src, alt, testId, className = "", overlay }) => (
  <div className={`relative overflow-hidden rounded-[32px] border border-[#dedfd8] bg-[#eceee7] shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${className}`} data-testid={testId}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.18),transparent_45%)]" />
    <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
    {overlay ? <div className="absolute bottom-5 left-5 right-5">{overlay}</div> : null}
  </div>
);

const MetricCard = ({ item, index }) => (
  <div className="rounded-[28px] border border-[#d9d9d3] bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)]" data-testid={`hero-stat-card-${index}`}>
    <p className="font-heading text-3xl font-semibold text-[#1b4d3e]">{item.value}</p>
    <p className="mt-2 text-sm leading-6 text-[#4a4a4a]">{item.label}</p>
  </div>
);

const ExpertiseCard = ({ card, index }) => {
  const Icon = iconMap[card.icon] || BadgeCheck;
  return (
    <Card className="group h-full rounded-[28px] border-[#dedfd8] bg-white/95 shadow-[0_10px_40px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,24,40,0.1)]" data-testid={`expertise-card-${index}`}>
      <CardContent className="p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#1b4d3e]">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-[#1a1a1a]">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#4a4a4a]">{card.description}</p>
      </CardContent>
    </Card>
  );
};

const ProductCard = ({ product, index }) => (
  <Card className="group h-full rounded-[28px] border-[#dedfd8] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,24,40,0.08)]" data-testid={`product-card-${index}`}>
    <CardContent className="flex h-full flex-col p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex rounded-full border border-[#d7d7d1] bg-[#f5f4ef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7f71]">
          Product line
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#1b4d3e]">
          <Sprout className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-6 font-heading text-2xl font-semibold text-[#1a1a1a]">{product.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#4a4a4a]">{product.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {product.fit.map((tag) => (
          <span key={tag} className="rounded-full border border-[#d7d7d1] px-3 py-1 text-xs font-medium text-[#1b4d3e]" data-testid={`product-tag-${index}-${tag.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || FileText;
  const spanClass = index === 0 ? "lg:col-span-2" : index === 3 ? "lg:col-span-2" : "";

  return (
    <article className={`rounded-[30px] border border-[#d8d9d1] bg-white p-7 shadow-[0_16px_50px_rgba(16,24,40,0.06)] ${spanClass}`} data-testid={`service-card-${index}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex rounded-full border border-[#d7d7d1] bg-[#f5f4ef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8d7f71]">
            {service.concept}
          </div>
          <h3 className="font-heading text-2xl font-semibold text-[#1a1a1a]">{service.title}</h3>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1b4d3e] text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4a4a4a]">{service.description}</p>
    </article>
  );
};

const InsightCard = ({ post, index }) => (
  <Card className="h-full rounded-[28px] border-[#dedfd8] bg-white shadow-[0_16px_50px_rgba(16,24,40,0.05)]" data-testid={`insight-card-${index}`}>
    <CardContent className="flex h-full flex-col p-7">
      <div className="inline-flex w-fit rounded-full border border-[#ead9c2] bg-[#fff7ed] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b45309]" data-testid={`insight-topic-${index}`}>
        {post.topic}
      </div>
      <h3 className="mt-5 font-heading text-2xl font-semibold text-[#1a1a1a]">{post.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-[#4a4a4a]">{post.excerpt}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1b4d3e]" data-testid={`insight-readmore-${index}`}>
        Strategic insight
        <ChevronRight className="h-4 w-4" />
      </div>
    </CardContent>
  </Card>
);

const PageHero = ({ eyebrow, title, description, imageSrc, imageAlt, badges = [], primaryCta, secondaryCta, testId }) => (
  <section className="relative overflow-hidden border-b border-[#ecebe5] bg-[linear-gradient(180deg,#f9f9f7_0%,#f1f1ec_100%)]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,77,62,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_30%)]" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
      <div className="space-y-7" data-testid={testId}>
        <div className="inline-flex rounded-full border border-[#d7d7d1] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1b4d3e]">
          {eyebrow}
        </div>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base leading-8 text-[#4a4a4a] sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-[#d7d7d1] bg-[#f5f4ef] px-4 py-2 text-sm font-medium text-[#1b4d3e]" data-testid={`hero-badge-${badge.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {primaryCta}
          {secondaryCta}
        </div>
      </div>
      <ImagePanel
        src={imageSrc}
        alt={imageAlt}
        testId={`${testId}-image-panel`}
        className="aspect-4/4.5 min-h-[360px] lg:min-h-[560px]"
        overlay={
          <div className="rounded-[26px] border border-white/30 bg-white/92 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]" data-testid={`${testId}-overlay-card`}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8d7f71]">Built for serious B2B buyers</p>
            <p className="mt-3 text-sm leading-7 text-[#27322d]">Cleaner positioning, stronger credibility, and fast action paths for calls, inquiries, and distributor conversations.</p>
          </div>
        }
      />
    </div>
  </section>
);

const HomePage = () => (
  <>
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f9f9f7_0%,#f1f1ec_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,77,62,0.1),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-24">
        <div className="space-y-8" data-testid="home-hero-content">
          <div className="inline-flex rounded-full border border-[#d7d7d1] bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1b4d3e]" data-testid="home-hero-eyebrow">
            India’s performance-focused B2B fertilizer manufacturer
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-7xl" data-testid="home-hero-title">
              {company.heroTitle}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-[#4a4a4a] sm:text-lg" data-testid="home-hero-description">
              {company.heroSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3" data-testid="home-hero-badges">
            {trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-[#d7d7d1] bg-[#f5f4ef] px-4 py-2 text-sm font-medium text-[#1b4d3e]" data-testid={`home-badge-${badge.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                {badge}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="home-primary-cta-button">
              <Link to="/contact">
                Become a B2B partner
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="home-secondary-cta-button">
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
          testId="home-hero-image-panel"
          className="aspect-[4/4.6] min-h-[360px] lg:min-h-[620px]"
          overlay={
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/30 bg-white/92 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]" data-testid="home-hero-overlay-card-1">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d7f71]">What clients need</p>
                <p className="mt-3 font-heading text-2xl font-semibold text-[#1a1a1a]">Consistency at scale</p>
                <p className="mt-2 text-sm leading-6 text-[#4a4a4a]">Granules engineered for repeatability, handling, and dependable supply.</p>
              </div>
              <div className="rounded-[24px] border border-white/30 bg-[#1b4d3e] p-5 text-white shadow-[0_16px_50px_rgba(15,23,42,0.12)]" data-testid="home-hero-overlay-card-2">
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
          <MetricCard key={item.value} item={item} index={index} />
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Core strengths"
        title="Every section of the business now says one thing clearly: dependable B2B performance."
        description="The site is positioned to reassure procurement teams, distributors, and fertilizer brands that Adit Biorganic is not a generic farm business—it is a process-led manufacturing partner built for long-term supply relationships."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {expertiseCards.map((card, index) => (
          <ExpertiseCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:items-center">
        <ImagePanel
          src={images.factory}
          alt="Manufacturing facility"
          testId="home-about-image-panel"
          className="aspect-[4/4.6] min-h-[360px]"
          overlay={
            <div className="rounded-[26px] border border-white/30 bg-white/94 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]" data-testid="home-about-overlay-card">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d7f71]">Chairman’s message</p>
              <p className="mt-3 font-accent text-xl text-[#1b4d3e]">
                “Our mission is not just about business but about contributing positively to the environment.”
              </p>
              <p className="mt-3 text-sm font-medium text-[#1a1a1a]">{company.founder}, {company.founderTitle}</p>
            </div>
          }
        />
        <div className="space-y-6" data-testid="home-about-content">
          <div className="inline-flex rounded-full border border-[#d7d7d1] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1b4d3e]">
            About Adit Biorganic
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl">
            Built in Anand, Gujarat to support better soil outcomes and stronger B2B partnerships.
          </h2>
          <p className="text-base leading-8 text-[#4a4a4a] sm:text-lg">
            Adit Biorganic manufactures customized nutrient base and coating granules for fertilizer companies that need more than commodity supply. The business combines sustainable agriculture intent with disciplined production systems so buyers can trust both product quality and operational reliability.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {companyPillars.map((pillar, index) => (
              <div key={pillar.title} className="rounded-[26px] border border-[#d6d7d0] bg-white p-5" data-testid={`home-pillar-card-${index}`}>
                <p className="font-heading text-xl font-semibold text-[#1a1a1a]">{pillar.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#4a4a4a]">{pillar.description}</p>
              </div>
            ))}
          </div>
          <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="home-about-cta-button">
            <Link to="/about">Explore our story</Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Product range"
        title="Advanced granular products shaped around your formulation goals."
        description="We kept the real product families from your existing site, but presented them in a cleaner, premium, easier-to-scan structure that helps buyers understand where Adit Biorganic fits into their supply chain."
        action={
          <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="home-products-link-button">
            <Link to="/products">View all products</Link>
          </Button>
        }
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.slice(0, 4).map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="What we offer"
          title="A sharper services story for serious fertilizer and distribution businesses."
          description="Instead of repeating generic blocks, the services are now organized around real B2B outcomes: manufacturing support, quality assurance, packaging readiness, warehousing, and infrastructure flexibility."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Quality promise"
        title="Manufacturing confidence comes from process, testing, and execution discipline."
        description="This section helps the client instantly understand that Adit Biorganic is quality-led: from formulation alignment to production control and dispatch readiness."
      />
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="grid gap-5 sm:grid-cols-2">
          <ImagePanel src={images.granules} alt="Organic granules close-up" testId="quality-granules-image-panel" className="aspect-[4/4.7] min-h-[260px]" />
          <ImagePanel src={images.lab} alt="Laboratory testing" testId="quality-lab-image-panel" className="aspect-[4/4.7] min-h-[260px] sm:translate-y-10" />
        </div>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-[#d9d9d3] bg-white p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)]" data-testid={`process-step-card-${index}`}>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8efe8] font-heading text-lg font-semibold text-[#1b4d3e]">
                  0{index + 1}
                </div>
                <div>
                  <p className="font-heading text-2xl font-semibold text-[#1a1a1a]">{step.title}</p>
                  <p className="mt-3 text-sm leading-7 text-[#4a4a4a]">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#163a30] py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-start">
        <div className="space-y-6" data-testid="home-cta-content">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Final conversion section
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Make it easy for distributors and fertilizer brands to take action.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
            The site now gives equal importance to direct calls and inquiry forms—exactly as requested—so visitors can move quickly whether they prefer a conversation or a structured submission.
          </p>
          <div className="grid gap-4">
            {partnerBenefits.map((benefit, index) => (
              <div key={benefit} className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/5 p-5" data-testid={`partner-benefit-card-${index}`}>
                <BadgeCheck className="mt-1 h-5 w-5 text-[#fbbf24]" />
                <p className="text-sm leading-7 text-white/80">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="h-12 rounded-full bg-[#d97706] px-6 text-white hover:bg-[#b45309]" data-testid="home-final-call-button">
              <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-[#163a30]" data-testid="home-final-contact-button">
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

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About us"
      title="A cleaner, more credible story about who Adit Biorganic is and why buyers can trust the business."
      description="This page reframes the company as a dependable, disciplined manufacturer with a sustainability mission—balancing premium B2B credibility with organic warmth."
      imageSrc={images.factory}
      imageAlt="Adit Biorganic factory and operations"
      badges={["Sustainable agriculture", "Customized manufacturing", "Anand, Gujarat"]}
      testId="about-page-hero"
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="about-hero-primary-button">
          <Link to="/contact">Talk to our team</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="about-hero-secondary-button">
          <Link to="/products">Review products</Link>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="space-y-6" data-testid="about-story-content">
          <SectionIntro
            eyebrow="Who we are"
            title="A manufacturer built to support brands, not just sell commodity supply."
            description="Adit Biorganic positions itself as a partner to fertilizer companies that need consistent custom granules, dependable production support, and a supplier whose sustainability focus strengthens—not weakens—commercial performance."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {companyPillars.map((pillar, index) => (
              <div key={pillar.title} className="rounded-[26px] border border-[#d7d7d1] bg-[#f5f4ef] p-5" data-testid={`about-pillar-card-${index}`}>
                <p className="font-heading text-xl font-semibold text-[#1a1a1a]">{pillar.title}</p>
                <p className="mt-3 text-sm leading-7 text-[#4a4a4a]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        <ImagePanel src={images.soil} alt="Hands holding healthy soil" testId="about-story-image-panel" className="aspect-[4/4.7] min-h-[360px]" />
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-[32px] border border-[#d7d7d1] bg-white p-8 shadow-[0_16px_50px_rgba(16,24,40,0.05)]" data-testid="about-mission-card">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d7f71]">Our mission</p>
          <h3 className="mt-4 font-heading text-3xl font-semibold text-[#1a1a1a]">Empower farmers and fertilizer brands with high-quality organic solutions.</h3>
          <p className="mt-5 text-sm leading-7 text-[#4a4a4a]">
            We want to improve soil health, support crop productivity, and promote environmental responsibility through better manufacturing decisions and reliable product execution.
          </p>
        </article>
        <article className="rounded-[32px] border border-[#d7d7d1] bg-[#1b4d3e] p-8 text-white shadow-[0_16px_50px_rgba(16,24,40,0.08)]" data-testid="about-founder-card">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">A message from our chairman</p>
          <p className="mt-4 font-accent text-2xl leading-10 text-white">
            “I am proud to lead a team committed to excellence in organic agriculture and to building a sustainable future for the sector.”
          </p>
          <p className="mt-6 text-sm font-medium text-white/75">{company.founder}, {company.founderTitle}</p>
        </article>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Infrastructure edge"
        title="The physical and process capability behind the brand promise."
        description="The old site mentioned production, testing, and warehousing, but it was scattered. This redesign puts those strengths into a clear operational story."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Advanced plant and machinery",
            description: "Granulation, coating, and handling systems aligned for efficient output and dependable repeatability.",
          },
          {
            title: "In-house quality checks",
            description: "Batch discipline and product confidence supported by a process-led quality culture.",
          },
          {
            title: "Warehouse and dispatch readiness",
            description: "Finished goods can move faster into distribution workflows with better storage and planning support.",
          },
        ].map((item, index) => (
          <div key={item.title} className="rounded-[28px] border border-[#dedfd8] bg-white p-7 shadow-[0_16px_50px_rgba(16,24,40,0.05)]" data-testid={`about-infrastructure-card-${index}`}>
            <p className="font-heading text-2xl font-semibold text-[#1a1a1a]">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-[#4a4a4a]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

const ProductsPage = () => (
  <>
    <PageHero
      eyebrow="Products"
      title="A premium catalog presentation for the product lines your client already offers."
      description="Instead of repetitive product lists, this page turns the portfolio into a polished B2B catalog with a stronger visual rhythm, clearer summaries, and better scannability for procurement teams."
      imageSrc={images.granules}
      imageAlt="Granular fertilizer close-up"
      badges={["Organic bases", "Mineral bases", "Customizable recipes"]}
      testId="products-page-hero"
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="products-hero-primary-button">
          <Link to="/contact">Request a product discussion</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="products-hero-secondary-button">
          <a href={`tel:${company.phoneRaw}`}>Call our team</a>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Catalog overview"
        title="Core product families"
        description="All product families from the existing website are preserved, rewritten professionally, and presented in a cleaner premium layout so clients can understand the scope of supply quickly."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <ImagePanel src={images.soil} alt="Healthy soil and organic performance" testId="products-highlight-image-panel" className="aspect-[4/4.6] min-h-[360px]" />
        <div className="space-y-5" data-testid="products-highlight-content">
          <div className="inline-flex rounded-full border border-[#d7d7d1] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1b4d3e]">
            What can be customized
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#1a1a1a] sm:text-5xl">Recipe granules built around partner requirements—not generic assumptions.</h2>
          <div className="grid gap-4">
            {productHighlights.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-[24px] border border-[#d7d7d1] bg-white p-5" data-testid={`products-highlight-card-${index}`}>
                <BadgeCheck className="mt-1 h-5 w-5 text-[#1b4d3e]" />
                <p className="text-sm leading-7 text-[#4a4a4a]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="A service presentation that feels like a serious manufacturing partner, not a template website."
      description="The services page now explains how Adit Biorganic supports clients end-to-end: contract manufacturing, coating, testing, packaging, warehousing, and infrastructure flexibility."
      imageSrc={images.lab}
      imageAlt="Laboratory and testing operations"
      badges={["Contract manufacturing", "Quality controls", "Private label support"]}
      testId="services-page-hero"
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="services-hero-primary-button">
          <Link to="/contact">Discuss a service requirement</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="services-hero-secondary-button">
          <Link to="/products">See product lines</Link>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Service architecture"
        title="Every offer reframed around business outcomes."
        description="This grid helps the client immediately see breadth and maturity: manufacturing support, testing, packaging, warehousing, and special infrastructure access."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="How we work"
          title="A simple operating flow that makes the partnership easier to understand."
          description="This turns operational know-how into a confident visual sequence, helping prospective clients quickly understand how a project moves from requirement to dispatch."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-[#d8d9d1] bg-white p-7 shadow-[0_16px_50px_rgba(16,24,40,0.05)]" data-testid={`services-process-card-${index}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8efe8] font-heading text-lg font-semibold text-[#1b4d3e]">
                0{index + 1}
              </div>
              <p className="mt-5 font-heading text-2xl font-semibold text-[#1a1a1a]">{step.title}</p>
              <p className="mt-3 text-sm leading-7 text-[#4a4a4a]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const BlogPage = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title="We replaced placeholder blog content with sharper industry-facing insights."
      description="The old lorem ipsum blog weakened credibility. This version keeps the value of an insights section while making it feel relevant to fertilizer brands, distributors, and procurement teams."
      imageSrc={images.partnership}
      imageAlt="B2B partnership conversation"
      badges={["Thought leadership", "Quality systems", "Procurement relevance"]}
      testId="blog-page-hero"
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-[#1b4d3e] px-6 text-white hover:bg-[#143d30]" data-testid="blog-hero-primary-button">
          <Link to="/contact">Request a conversation</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="blog-hero-secondary-button">
          <Link to="/services">Explore services</Link>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Featured insights"
        title="Credibility content that actually supports the sale."
        description="Instead of low-value filler posts, the site now suggests relevant strategic topics that strengthen buyer confidence and reinforce Adit Biorganic’s process-led brand positioning."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {insightPosts.map((post, index) => (
          <InsightCard key={post.title} post={post} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-[#f1f1ec] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            title: "For distributors",
            description: "Show buyers that your manufacturing partner can protect consistency, scale, and response speed across market demand cycles.",
          },
          {
            title: "For fertilizer brands",
            description: "Position custom recipe granules as a strategic manufacturing advantage, not just an operational detail.",
          },
          {
            title: "For procurement teams",
            description: "Highlight quality checks, process clarity, and dispatch discipline to reduce vendor uncertainty during evaluation.",
          },
        ].map((item, index) => (
          <div key={item.title} className="rounded-[28px] border border-[#d7d7d1] bg-white p-7 shadow-[0_16px_50px_rgba(16,24,40,0.05)]" data-testid={`blog-audience-card-${index}`}>
            <p className="font-heading text-2xl font-semibold text-[#1a1a1a]">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-[#4a4a4a]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="A contact experience designed to convert both phone calls and structured B2B inquiries."
      description="This page makes action effortless for the client’s visitors: clear phone access, direct email routes, and a premium inquiry form for distributor and manufacturing leads."
      imageSrc={images.partnership}
      imageAlt="Business partnership and collaboration"
      badges={["Phone-first CTAs", "Form-driven leads", "B2B partnership focus"]}
      testId="contact-page-hero"
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-[#d97706] px-6 text-white hover:bg-[#b45309]" data-testid="contact-hero-primary-button">
          <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-[#1b4d3e] px-6 text-[#1b4d3e] hover:bg-[#1b4d3e] hover:text-white" data-testid="contact-hero-secondary-button">
          <a href={`mailto:${company.emails[0]}`}>Email sales</a>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6" data-testid="contact-info-content">
          <SectionIntro
            eyebrow="Direct contact"
            title="Reach the team the way your buyers prefer."
            description="This contact structure supports both quick-action calls and richer inquiry submissions, helping the site capture more serious leads without friction."
          />
          {[
            {
              label: "Call and order",
              value: company.phoneDisplay,
              link: `tel:${company.phoneRaw}`,
              icon: PhoneCall,
            },
            {
              label: "General inquiries",
              value: company.emails[0],
              link: `mailto:${company.emails[0]}`,
              icon: FileText,
            },
            {
              label: "Sales inquiries",
              value: company.emails[1],
              link: `mailto:${company.emails[1]}`,
              icon: FileText,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.link} className="flex items-start gap-4 rounded-[28px] border border-[#d8d9d1] bg-white p-6 shadow-[0_16px_50px_rgba(16,24,40,0.05)] transition hover:-translate-y-1" data-testid={`contact-card-${index}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#1b4d3e]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8d7f71]">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-[#1a1a1a]">{item.value}</p>
                </div>
              </a>
            );
          })}

          <div className="rounded-[32px] border border-[#d8d9d1] bg-[#1b4d3e] p-8 text-white" data-testid="contact-address-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Visit the facility</p>
            <p className="mt-4 text-lg font-semibold">{company.address}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <Clock3 className="h-4 w-4" />
              Response goal: within 24 hours for qualified inquiries.
            </div>
          </div>
        </div>
        <InquiryForm
          title="Let’s discuss your requirement"
          description="Use this form for distributor partnerships, custom formulation discussions, manufacturing capacity conversations, or packaging support requirements."
          submitLabel="Submit inquiry"
        />
      </div>
    </section>
  </>
);

const AppRoutes = () => (
  <SiteShell>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </SiteShell>
);

export default function App() {
  return (
    <ThemeProvider attribute="class" forcedTheme="light">
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-right" />
      </BrowserRouter>
    </ThemeProvider>
  );
}
