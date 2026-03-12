import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { InquiryForm } from "@/components/InquiryForm";
import { PhoneCall, Mail, MapPin, Clock3 } from "lucide-react";

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

const images = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  granules: "/images/granules.jpg",
  soil: "/images/soil.jpg",
  lab: "/images/lab.jpg",
  partnership: "/images/partnership.jpg",
};

export const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Get In Touch With Us"
      description="We'd love to hear from you. Contact us for product inquiries, partnerships, or any questions about our services."
      imageSrc={images.partnership}
      imageAlt="Business partnership and collaboration"
      badges={["Phone-first CTAs", "Form-driven leads", "B2B partnership focus"]}
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-accent px-6 text-white hover:bg-accent/80">
          <a href={`tel:${company.phoneRaw}`}>Call {company.phoneDisplay}</a>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
          <a href={`mailto:${company.emails[0]}`}>Email sales</a>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="space-y-6">
          <SectionIntro
            eyebrow="Direct contact"
            title="Reach The Team Your Way"
            description="Choose how you'd like to connect - call us directly, send an email, or fill out the inquiry form."
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
              icon: Mail,
            },
            {
              label: "Sales inquiries",
              value: company.emails[1],
              link: `mailto:${company.emails[1]}`,
              icon: Mail,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.label} href={item.link} className="flex items-start gap-4 rounded-[28px] border border-border bg-surface-card p-6 shadow-[0_16px_50px_rgba(16,24,40,0.05)] transition hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-foreground">{item.value}</p>
                </div>
              </a>
            );
          })}

          <div className="rounded-[32px] border border-border bg-primary p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Visit the facility</p>
            <p className="mt-4 text-lg font-semibold">{company.address}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-white/75">
              <Clock3 className="h-4 w-4" />
              Response goal: within 24 hours for qualified inquiries.
            </div>
          </div>
        </div>
        <InquiryForm
          title="Let's Discuss Your Requirement"
          description="Use this form for distributor partnerships, custom formulation discussions, manufacturing capacity conversations, or packaging support requirements."
          submitLabel="Submit inquiry"
        />
      </div>
    </section>
  </>
);
