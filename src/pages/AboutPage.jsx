import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { ImagePanel } from "@/components/ImagePanel";
import { company, images } from "@/data/siteContent";

export const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About us"
      title="Pioneers in Sustainable Agriculture Manufacturing"
      description="We are dedicated to manufacturing superior organic fertilizers that empower our B2B partners and preserve the environment."
      imageSrc={images.factory}
      imageAlt="Adit Biorganic factory and operations"
      badges={["ISO 9001:2015 Certified", "190+ MT/Day Capacity", "Anand, Gujarat"]}
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
          <Link to="/contact">Talk to our team</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
          <Link to="/products">Review products</Link>
        </Button>
      }
    />

    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <p className="font-heading text-5xl font-bold text-white">190+</p>
            <p className="mt-2 text-lg text-white/80">MT Daily Production</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl font-bold text-white">50+</p>
            <p className="mt-2 text-lg text-white/80">Trusted B2B Partners</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl font-bold text-white">10+</p>
            <p className="mt-2 text-lg text-white/80">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="font-heading text-5xl font-bold text-white">24/7</p>
            <p className="mt-2 text-lg text-white/80">Operations</p>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Welcome to Adit Biorganic
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Advanced Custom Fertilizer Manufacturing
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Adit Biorganic is an ISO 9001:2015 certified company and a pioneer in sustainable agriculture. We specialize in manufacturing high-quality, customized nutrient base and coating granular fertilizers. We are a trusted B2B partner for leading agricultural companies across India.
          </p>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            With over a decade of experience, our state-of-the-art facilities and 24/7 operations can produce over 190 MT per day. Our mission is to empower farmers and support our partners by providing innovative, eco-friendly solutions that enhance soil health and promote environmental sustainability.
          </p>
        </div>
        <ImagePanel src={images.soil} alt="Hands holding healthy soil" testId="about-welcome-image-panel" className="aspect-[4/4.7] min-h-[360px]" />
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="rounded-[32px] border border-border bg-surface-card p-8 shadow-[0_16px_50px_rgba(16,24,40,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Our Mission</p>
          <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
            "Our mission is to empower farmers and fertilizer brands with high-quality organic solutions that enhance soil health, improve crop yield, and promote environmental sustainability. We strive to be at the forefront of agricultural innovation, making a positive impact on the planet."
          </h3>
        </article>
        <article className="rounded-[32px] border border-border bg-primary p-8 text-white shadow-[0_16px_50px_rgba(16,24,40,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">A Message from Our Chairman</p>
          <p className="mt-4 font-accent text-xl leading-9 text-white">
            "I am proud to lead a team that is committed to excellence in organic agriculture. Our mission is not just about business but about contributing positively to the environment. With our innovative products and dedicated team, we aim to create a sustainable future for agriculture."
          </p>
          <p className="mt-6 text-sm font-medium text-white/75">{company.founder}, {company.founderTitle}</p>
        </article>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mb-12 text-center">
        <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          Our Manufacturing Expertise
        </div>
        <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          We Are Committed To Manufacturing The Best Products
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          We combine over a decade of experience with state-of-the-art technology. Our mission is to be the most trusted B2B partner in India, producing high-quality, customized organic fertilizers that deliver real results and enhance soil health.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Custom 'Recipe' Formulations", value: "98%", desc: "We manufacture unique mineral and organic 'Recipe Granules' tailored to your specific nutrient and coating requirements." },
          { title: "Absolute Quality", value: "100%", desc: "Our in-house, ISO 9001:2015 certified laboratory ensures every batch meets the highest standards for purity and consistency." },
          { title: "Environmentally Friendly", value: "100%", desc: "Our products are designed to enhance long-term soil health, support microbial life, and promote sustainable agriculture." },
          { title: "Reliable B2B Partnership", value: "190+", desc: "With a 190+ MT/day capacity and 24/7 operations, we deliver cost-effective, high-volume manufacturing solutions on time." },
        ].map((item, index) => (
          <div key={index} className="rounded-[28px] border border-border bg-surface-card p-6 shadow-[0_16px_50px_rgba(16,24,40,0.05)]">
            <p className="font-heading text-4xl font-bold text-primary">{item.value}</p>
            <p className="mt-3 font-heading text-lg font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            100+ Organic
          </div>
          <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Committed to Quality & Sustainability
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
            We believe that to grow healthy crops, high-quality, eco-friendly soil solutions are the key.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Sustainable Inputs", desc: "Eco-friendly raw materials that protect soil health" },
            { title: "Strict Quality Assurance", desc: "ISO certified testing for every batch" },
            { title: "Custom Formulations", desc: "Tailored nutrient solutions for your needs" },
            { title: "High-Volume Capacity", desc: "190+ MT/day production capability" },
          ].map((item, index) => (
            <div key={index} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="font-heading text-xl font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-white/75">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-6">
          <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Our History
          </div>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Key Milestones In Our Manufacturing Journey
          </h2>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            For over a decade, Adit Biorganic has been a leader in agricultural innovation. We began with a mission to revolutionize sustainable farming. Today, we are an ISO 9001:2015 certified manufacturer with a 24/7 production capacity of over 190 MT/day. We have grown into one of India's most trusted B2B partners for high-quality, customized organic granular fertilizers.
          </p>
        </div>
        <ImagePanel src={images.factory} alt="Our manufacturing journey" testId="about-history-image-panel" className="aspect-[4/4.7] min-h-[360px]" />
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Our Products
            </div>
            <p className="text-base leading-7 text-muted-foreground">
              Wide range of organic and mineral-based granular fertilizers tailored for various agricultural needs.
            </p>
          </div>
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Our Expert Team
            </div>
            <p className="text-base leading-7 text-muted-foreground">
              Our team comprises dedicated professionals with a shared passion for sustainable agriculture, from skilled technicians to agricultural experts, all working to deliver top-notch organic fertilizers.
            </p>
          </div>
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-border bg-surface-overlay px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              Our Advanced Infrastructure
            </div>
            <p className="text-base leading-7 text-muted-foreground">
              We operate state-of-the-art plants with advanced machinery for granulation, coating, and packaging, an in-house lab, and spacious warehouses to ensure quality and efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let's Cooperate Together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          Contact Us Today! We will reply you within 24 hours via email, thank you for contacting
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="h-12 rounded-full bg-accent px-6 text-secondary hover:bg-accent/80">
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-6 text-white hover:bg-white hover:text-secondary">
            <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  </>
);
