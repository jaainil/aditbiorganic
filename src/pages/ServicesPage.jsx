import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { ServiceCard } from "@/components/ServiceCard";

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

const images = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  granules: "/images/granules.jpg",
  soil: "/images/soil.jpg",
  lab: "/images/lab.jpg",
  partnership: "/images/partnership.jpg",
};

export const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="End-to-End Fertilizer Manufacturing Services"
      description="We support clients with contract manufacturing, coating, testing, packaging, warehousing, and infrastructure flexibility."
      imageSrc={images.lab}
      imageAlt="Laboratory and testing operations"
      badges={["Contract manufacturing", "Quality controls", "Private label support"]}
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
          <Link to="/contact">Discuss a service requirement</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
          <Link to="/products">See product lines</Link>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Service architecture"
        title="Comprehensive Manufacturing Solutions"
        description="From custom formulation to final packaging, we provide end-to-end services that help your business grow."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="How we work"
          title="Our Operating Process"
          description="A simple flow that makes the partnership easy to understand, from requirement to dispatch."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-border bg-surface-card p-7 shadow-[0_16px_50px_rgba(16,24,40,0.05)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 font-heading text-lg font-semibold text-primary">
                0{index + 1}
              </div>
              <p className="mt-5 font-heading text-2xl font-semibold text-foreground">{step.title}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
