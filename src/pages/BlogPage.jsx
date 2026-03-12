import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { InsightCard } from "@/components/InsightCard";

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

const images = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  granules: "/images/granules.jpg",
  soil: "/images/soil.jpg",
  lab: "/images/lab.jpg",
  partnership: "/images/partnership.jpg",
};

export const BlogPage = () => (
  <>
    <PageHero
      eyebrow="Insights"
      title="Industry Insights & Knowledge"
      description="Stay informed with the latest trends, tips, and developments in sustainable agriculture and fertilizer manufacturing."
      imageSrc={images.partnership}
      imageAlt="B2B partnership conversation"
      badges={["Thought leadership", "Quality systems", "Procurement relevance"]}
      primaryCta={
        <Button asChild className="h-12 rounded-full bg-primary px-6 text-white hover:bg-primary/90">
          <Link to="/contact">Request a conversation</Link>
        </Button>
      }
      secondaryCta={
        <Button asChild variant="outline" className="h-12 rounded-full border-primary px-6 text-primary hover:bg-primary hover:text-white">
          <Link to="/services">Explore services</Link>
        </Button>
      }
    />

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionIntro
        eyebrow="Featured insights"
        title="Latest Articles"
        description="Expert perspectives on agriculture, fertilizer manufacturing, and sustainable farming practices."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {insightPosts.map((post, index) => (
          <InsightCard key={post.title} post={post} index={index} />
        ))}
      </div>
    </section>

    <section className="bg-muted py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          {
            title: "For Distributors",
            description: "Show buyers that your manufacturing partner can protect consistency, scale, and response speed across market demand cycles.",
          },
          {
            title: "For Fertilizer Brands",
            description: "Position custom recipe granules as a strategic manufacturing advantage, not just an operational detail.",
          },
          {
            title: "For Procurement Teams",
            description: "Highlight quality checks, process clarity, and dispatch discipline to reduce vendor uncertainty during evaluation.",
          },
        ].map((item, index) => (
          <div key={item.title} className="rounded-[28px] border border-border bg-surface-card p-7 shadow-[0_16px_50px_rgba(16,24,40,0.05)]">
            <p className="font-heading text-2xl font-semibold text-foreground">{item.title}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);
