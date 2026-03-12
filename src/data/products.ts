/**
 * Shared product data for Adit Biorganic.
 * Content sourced from the original WordPress site.
 */

export interface HowToApplyStep {
  step: string;
  title: string;
  detail: string;
}

export interface ProductBenefit {
  title: string;
  detail: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  title: string;
  imageUrl: string;
  summary: string;
  fit: string[];
  category: string;
  tagline: string;
  description: string;
  howToApply: HowToApplyStep[];
  benefits: ProductBenefit[];
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    slug: "mineral-base-granules",
    title: "Mineral Base Granules",
    imageUrl: "/images/products/mineral-base-granules.png",
    summary:
      "Slow-release fertilizers that supply essential minerals and trace elements for sustainable plant growth. Improve soil fertility and nutrient availability with sustained, long-term nutrient delivery.",
    fit: ["Soil fertility", "Long-term nutrients", "Sustainable growth"],
    category: "Mineral",
    tagline: "The foundation of long-term soil health.",
    description:
      "Mineral base granules are specialized slow-release fertilizers that contain essential minerals and trace elements necessary for robust plant growth. Unlike chemical fertilizers that provide a sudden, often wasteful, flood of nutrients, these granules are designed to enrich the soil, improve nutrient availability, and enhance overall crop productivity for the long term.\n\nAt Adit Biorganic, we see these granules as a cornerstone of modern, sustainable agriculture. They work with the soil's natural ecosystem, building structure and fertility simultaneously. This approach ensures that plants receive a steady, balanced diet, leading to healthier crops and more resilient farms.",
    howToApply: [
      {
        step: "01",
        title: "Incorporation",
        detail:
          "For new plantings or pre-season soil preparation, mix the granules directly into the soil. This ensures the nutrients are placed within the root zone from day one.",
      },
      {
        step: "02",
        title: "Top Dressing",
        detail:
          "For established plants, apply the granules in a circle around the base of the plant, extending to the drip line. Water gently to begin the nutrient release.",
      },
      {
        step: "03",
        title: "Dosage",
        detail:
          "Always follow the recommended application rates based on your specific crop type, soil analysis, and desired outcome.",
      },
    ],
    benefits: [
      {
        title: "Gradual Nutrient Release",
        detail:
          "The granules release nutrients slowly, ensuring a steady and consistent supply to plants throughout their growth cycle, preventing nutrient burn.",
      },
      {
        title: "Reduced Leaching",
        detail:
          "By holding essential nutrients in the root zone, our granules minimize the loss of valuable minerals to runoff and leaching, which is both economical and eco-friendly.",
      },
      {
        title: "Improved Soil Structure",
        detail:
          "The mineral components enhance soil aggregation, porosity, and aeration, creating a better environment for root growth and microbial life.",
      },
      {
        title: "Balanced Nutrition",
        detail:
          "Our granules provide a well-rounded and complex mix of essential minerals and trace elements, correcting deficiencies that simple NPK fertilizers miss.",
      },
    ],
    specs: [
      { label: "Type", value: "Slow-release mineral fertilizer" },
      { label: "Form", value: "Granules" },
      { label: "Key Minerals", value: "Gypsum, Dolomite, Micronutrients" },
      { label: "Application", value: "Soil incorporation, top dressing" },
      { label: "Certification", value: "ISO 9001:2015" },
    ],
  },
  {
    slug: "bio-fertilizer-base-granules",
    title: "Bio-Fertilizer Base Granules",
    imageUrl: "/images/products/bio-fertilizer-base-granules.png",
    summary:
      "Innovative agricultural inputs that improve soil fertility and support healthy plant growth through biological activity. Eco-friendly enhancement of soil microbiome and plant nutrition.",
    fit: ["Bio inputs", "Organic certified", "Soil microbiome"],
    category: "Biological",
    tagline: "Introducing life back into the soil.",
    description:
      "Bio-Fertilizer Base Granules are advanced agricultural inputs designed to enhance soil fertility and promote healthy plant growth. These granules are formulated with a blend of organic nutrients and beneficial microbes, providing a sustainable and eco-friendly solution for modern farming practices.\n\nUnlike sterile chemical fertilizers, our bio-fertilizer granules introduce life back into the soil. They are more than just plant food; they are a soil enhancement system that builds a robust, self-sustaining ecosystem for your crops to thrive in.",
    howToApply: [
      {
        step: "01",
        title: "Nutrient Uptake",
        detail:
          "They provide readily available organic nutrients, promoting efficient and rapid absorption by plant roots.",
      },
      {
        step: "02",
        title: "Growth Stimulation",
        detail:
          "The beneficial microbes in the granules actively stimulate root growth and development, leading to stronger, healthier plants and improved yields.",
      },
      {
        step: "03",
        title: "Disease Resistance",
        detail:
          "By fostering a healthy soil microbiome, these granules enhance the plant's natural immunity and microbial activity, which reduces the risk of soil-borne diseases and improves overall crop resilience.",
      },
    ],
    benefits: [
      {
        title: "Organic Nutrients",
        detail:
          "Provides essential nutrients in a natural, organic form, promoting vigorous plant health without the risk of chemical residues.",
      },
      {
        title: "Microbial Support",
        detail:
          "Enhances soil biodiversity and accelerates nutrient cycling by introducing and feeding beneficial microbial populations.",
      },
      {
        title: "Soil Health",
        detail:
          "Actively improves soil structure, water retention, and long-term nutrient availability.",
      },
      {
        title: "Plant Resilience",
        detail:
          "Boosts the plant's natural immunity, stress tolerance, and overall growth.",
      },
    ],
    specs: [
      { label: "Type", value: "Bio-fertilizer carrier granule" },
      { label: "Form", value: "Granules" },
      { label: "Active Organisms", value: "Beneficial microbes, organic nutrients" },
      { label: "Application", value: "Soil broadcast, seed treatment" },
      { label: "Certification", value: "ISO 9001:2015 / Organic compatible" },
    ],
  },
  {
    slug: "bio-stimulant-base-granules",
    title: "Bio-Stimulant Base Granules",
    imageUrl: "/images/products/bio-stimulant-base-granules.png",
    summary:
      "Plant growth stimulants that enhance plant biological processes beyond standard nutrition. Improves crop resilience, productivity, and natural stress tolerance.",
    fit: ["Crop resilience", "Stress tolerance", "Value-added blends"],
    category: "Stimulant",
    tagline: "Unlocking a plant's full genetic potential.",
    description:
      "Bio-Fertilizer Base Granules are advanced agricultural inputs designed to enhance soil fertility and promote healthy plant growth. These granules are formulated with a blend of organic nutrients and beneficial microbes, providing a sustainable and eco-friendly solution for modern farming practices.\n\nUnlike sterile chemical fertilizers, our bio-fertilizer granules introduce life back into the soil. They are more than just plant food; they are a soil enhancement system that builds a robust, self-sustaining ecosystem for your crops to thrive in.",
    howToApply: [
      {
        step: "01",
        title: "Nutrient Uptake",
        detail:
          "They provide readily available organic nutrients, promoting efficient and rapid absorption by plant roots.",
      },
      {
        step: "02",
        title: "Growth Stimulation",
        detail:
          "The beneficial microbes in the granules actively stimulate root growth and development, leading to stronger, healthier plants and improved yields.",
      },
      {
        step: "03",
        title: "Disease Resistance",
        detail:
          "By fostering a healthy soil microbiome, these granules enhance the plant's natural immunity and microbial activity, which reduces the risk of soil-borne diseases and improves overall crop resilience.",
      },
    ],
    benefits: [
      {
        title: "Organic Nutrients",
        detail:
          "Provides essential nutrients in a natural, organic form, promoting vigorous plant health without the risk of chemical residues.",
      },
      {
        title: "Microbial Support",
        detail:
          "Enhances soil biodiversity and accelerates nutrient cycling by introducing and feeding beneficial microbial populations.",
      },
      {
        title: "Soil Health",
        detail:
          "Actively improves soil structure, water retention, and long-term nutrient availability.",
      },
      {
        title: "Plant Resilience",
        detail:
          "Boosts the plant's natural immunity, stress tolerance, and overall growth.",
      },
    ],
    specs: [
      { label: "Type", value: "Bio-stimulant carrier granule" },
      { label: "Form", value: "Granules" },
      { label: "Key Actives", value: "Organic nutrients, beneficial microbes" },
      { label: "Application", value: "Basal, split, fertigation" },
      { label: "Certification", value: "ISO 9001:2015" },
    ],
  },
  {
    slug: "mix-micro-base-granules",
    title: "Mix Micro Base Granules",
    imageUrl: "/images/products/mix-micro-base-granules.png",
    summary:
      "Customizable micronutrient solution to correct deficiencies and boost soil fertility. Contains Calcium, Magnesium, Potash, Zinc and more for vegetables, fruits, and grains.",
    fit: ["Micronutrient blends", "Custom specification", "Multi-crop"],
    category: "Micronutrient",
    tagline: "Precision nutrition for every crop and soil type.",
    description:
      "Mix Micro Base Granules are a comprehensive, all-in-one solution designed to correct micronutrient deficiencies and build overall soil fertility. These highly customizable granules can be formulated with a precise blend of essential elements like Calcium (Ca), Magnesium (Mg), Potash (P2O5), Zinc (Zn), Boron (Bo), and more, all combined with a foundation of Organic Carbon and Humic substances.\n\nThey are the ultimate versatile tool for fertilizer manufacturers and large-scale agricultural operations, suitable for all types of crops, including vegetables, fruits, and grains.",
    howToApply: [
      {
        step: "01",
        title: "As Base Granules",
        detail:
          "Use them as-is for a powerful, direct-application product that delivers a broad spectrum of essential nutrients, microbes, and active ingredients.",
      },
      {
        step: "02",
        title: "As Homogeneous Granules",
        detail:
          "The granules are an ideal foundation for blending. They can be mixed with other materials to create a perfectly uniform (homogeneous) blend, ensuring consistent and even distribution of all active ingredients.",
      },
      {
        step: "03",
        title: "For Coating Applications",
        detail:
          "Use our micro-mix granules as the core for your advanced formulations. They are designed to be coated with various materials for targeted, controlled-release delivery, enhancing the effectiveness of your treatments and reducing waste.",
      },
    ],
    benefits: [
      {
        title: "Enhanced Soil Health",
        detail:
          "The balanced formula provides the essential building blocks for fertile soil, improving its structure and ability to retain nutrients.",
      },
      {
        title: "Boosted Microbial Activity",
        detail:
          "The inclusion of organic carbon and humic substances acts as a food source, stimulating the beneficial microbial life in the soil.",
      },
      {
        title: "Improved Plant Growth",
        detail:
          "By correcting multiple nutrient deficiencies at once, these granules ensure plants have everything they need for robust root development, healthy foliage, and higher yields.",
      },
      {
        title: "Increased Disease Resistance",
        detail:
          "A well-nourished plant with a healthy root system is naturally more resilient and better equipped to defend itself against common diseases and environmental stress.",
      },
    ],
    specs: [
      { label: "Type", value: "Custom micronutrient granule blend" },
      { label: "Form", value: "Granules" },
      { label: "Nutrients", value: "Ca, Mg, P2O5, Zn, Bo + Organic Carbon, Humic" },
      { label: "Application", value: "Direct, homogeneous blend, coating core" },
      { label: "Certification", value: "ISO 9001:2015" },
    ],
  },
  {
    slug: "bio-pesticide-base-granules",
    title: "Bio-Pesticide Base Granules",
    imageUrl: "/images/products/bio-pesticide-base-granules.png",
    summary:
      "Eco-friendly crop protection granules that protect plant health while preserving biodiversity. Custom-manufactured or applied using existing bio-pesticide liquids/powders.",
    fit: ["Eco-friendly", "IPM compatible", "Residue-free"],
    category: "Crop Protection",
    tagline: "Natural protection that works in harmony with the ecosystem.",
    description:
      "Our Bio-Pesticide Base Granules are natural, eco-friendly solutions designed to protect crops from pests while maintaining soil health and biodiversity. This is a specialized, custom-manufacturing service rather than a regular product line.\n\nWe offer two main B2B solutions: we can custom manufacture bio-pesticide granules based on your specific formulation, or we can take your existing bio-pesticide liquids or powders and expertly coat them onto our high-quality base granules. This provides a versatile, effective, and sustainable application method tailored to your agricultural needs.",
    howToApply: [
      {
        step: "01",
        title: "Granule Coating",
        detail:
          "The most common method. The bio-pesticide is coated onto our base granules for easy, uniform, and controlled application across fields.",
      },
      {
        step: "02",
        title: "Soil Treatment",
        detail:
          "Granules can be incorporated directly into the soil to control root-based pests, grubs, and harmful pathogens.",
      },
      {
        step: "03",
        title: "Seed Treatment",
        detail:
          "The bio-pesticide can be used to coat seeds before planting, protecting the vulnerable seedlings from early-stage pest attacks.",
      },
    ],
    benefits: [
      {
        title: "Eco-Friendly",
        detail:
          "Reduces environmental impact by using natural, non-toxic, and biodegradable ingredients that are safe for the ecosystem.",
      },
      {
        title: "Safer Alternative",
        detail:
          "Compared to harsh chemical pesticides, bio-pesticides are safer for farmers, consumers, and beneficial insects, minimizing the risks of toxicity.",
      },
      {
        title: "Residue-Free",
        detail:
          "Leaves no harmful chemical residues on crops, making it an ideal choice for organic farming and meeting stringent export standards.",
      },
      {
        title: "Supports IPM",
        detail:
          "Fits perfectly into Integrated Pest Management (IPM) strategies by providing a targeted solution that works in harmony with other biological controls.",
      },
    ],
    specs: [
      { label: "Type", value: "Bio-pesticide carrier granule" },
      { label: "Form", value: "Granules" },
      { label: "Service", value: "Custom manufacture or client liquid/powder coating" },
      { label: "Application", value: "Granule coating, soil treatment, seed treatment" },
      { label: "Certification", value: "ISO 9001:2015 / Residue-free" },
    ],
  },
  {
    slug: "pesticide-base-granules",
    title: "Pesticide Base Granules",
    imageUrl: "/images/products/pesticide-base-granules.png",
    summary:
      "Multi-functional crop protection foundation that acts as both carrier for pesticide active ingredients AND provider of essential nutrients and organic matter.",
    fit: ["Dual-action", "Pest control + soil health", "Customizable"],
    category: "Crop Protection",
    tagline: "Two functions. One powerful granule.",
    description:
      "Our Pesticide Base Granules are an advanced, versatile foundation for modern crop protection formulations. They are engineered to serve a dual purpose: acting as a high-quality, stable carrier for pesticide active ingredients while simultaneously delivering essential nutrients, organic carbon, and humic substances to the soil.\n\nThese granules are suitable for direct application but are primarily designed as a B2B solution for companies to create their own finished products. They can be used as a superior base for various pest control formulations or as a carrier for additional active ingredients.",
    howToApply: [
      {
        step: "01",
        title: "As Base Granules",
        detail:
          "Used as-is, they deliver a complex blend of nutrients, minerals, and organic matter, creating a healthier soil environment.",
      },
      {
        step: "02",
        title: "As Homogeneous Granules",
        detail:
          "They are an ideal foundation for blending. They can be mixed with other materials to create a perfectly uniform (homogeneous) product, ensuring consistent distribution of all active ingredients.",
      },
      {
        step: "03",
        title: "For Coating Applications",
        detail:
          "Use our granules as the stable, porous core for your advanced formulations. They are designed to be coated with various pesticide materials for targeted, controlled delivery.",
      },
    ],
    benefits: [
      {
        title: "Effective Pest Control",
        detail:
          "Provides a uniform, stable, and dust-free carrier for your active ingredients, ensuring even distribution and effective performance in the field.",
      },
      {
        title: "Easy Application",
        detail:
          "The granular form allows for simple and precise application, whether broadcast, applied in-furrow, or used in planters.",
      },
      {
        title: "Dual-Action Benefit",
        detail:
          "Our granules improve soil health and provide micronutrients at the same time they deliver your active pesticide — why use an inert carrier?",
      },
      {
        title: "Fully Customizable",
        detail:
          "We can adjust the mineral and organic composition of the base granule to meet your specific formulation and market needs.",
      },
    ],
    specs: [
      { label: "Type", value: "Pesticide carrier granule (nutrient-enhanced)" },
      { label: "Form", value: "Granules" },
      { label: "Carrier Base", value: "Organic carbon, humic substances, minerals" },
      { label: "Application", value: "Direct, homogeneous blend, coating core" },
      { label: "Certification", value: "ISO 9001:2015 / CIB&RC compatible" },
    ],
  },
  {
    slug: "base-granules",
    title: "Base Granules",
    imageUrl: "/images/products/base-granules.png",
    summary:
      "Fundamental product component and carrier granule - a customizable platform beyond traditional bentonite fillers. Made from Gypsum, Dolomite, and mineral/organic inputs.",
    fit: ["190 MT/day capacity", "Flexible use", "Recipe granules"],
    category: "Base Carrier",
    tagline: "The versatile foundation for any granular product.",
    description:
      "Our Base Granules are the foundation of Adit Biorganic's entire product ecosystem. They represent a fundamental shift away from simple fillers, like bentonite, to an advanced, fully customizable platform for your fertilizer or crop protection products. These granules are engineered to be the perfect carrier, blend, or base for your formulations.\n\nWe offer these granules as a comprehensive B2B solution, allowing you to leverage our state-of-the-art manufacturing (190 MT/day capacity) and R&D lab to create a product that is uniquely yours. Whether you need a mineral-rich base, an organic carrier, or a platform for bio-stimulants, it all starts here.",
    howToApply: [
      {
        step: "01",
        title: "Complete Customization",
        detail:
          "We can change the base itself, using materials like Gypsum, Dolomite, Silica, and more to create a unique recipe with specific pH, density, or nutrient profiles.",
      },
      {
        step: "02",
        title: "Superior Coating & Blending",
        detail:
          "Unlike bentonite, our granules are designed to be blended with nutrients before coating. They are also engineered to hold over 70% coating, allowing for much higher potency and more advanced formulations.",
      },
      {
        step: "03",
        title: "A Platform for R&D",
        detail:
          "Our customizable base makes genuine innovation possible. You can test and develop new formulations within the granule itself, not just on the surface.",
      },
    ],
    benefits: [
      {
        title: "Beyond Bentonite",
        detail:
          "Our 'Recipe Granules' are not passive carriers — they are an active, value-adding part of your final product, giving our B2B partners a significant competitive edge.",
      },
      {
        title: "190+ MT/Day Capacity",
        detail:
          "Our manufacturing scale means we can supply large volumes reliably, supporting your growth without supply chain risk, operating 24/7.",
      },
      {
        title: "Guaranteed Quality",
        detail:
          "As an ISO 9001:2015 certified company, we provide consistent, high-quality granules on a scale that can meet any demand.",
      },
      {
        title: "Broad Application Range",
        detail:
          "The platform supports fertilizers, bio-inputs, pesticides, soil amendments, and specialty agri-chemicals — one manufacturing partner for your entire product range.",
      },
    ],
    specs: [
      { label: "Type", value: "Multi-purpose carrier / base granule" },
      { label: "Form", value: "Granules (custom size)" },
      { label: "Key Inputs", value: "Gypsum, Dolomite, Silica, organic matter" },
      { label: "Coating Capacity", value: "Over 70%" },
      { label: "Capacity", value: "190+ MT/day — ISO 9001:2015" },
    ],
  },
  {
    slug: "organic-base-granules",
    title: "Organic Base Granules",
    imageUrl: "/images/products/organic-base-granules.png",
    summary:
      "Certified organic carrier granules - a sustainable, nutrient-rich foundation for organic-certified fertilizers. Actively enhances soil health and feeds soil microbes.",
    fit: ["Organic certified", "Soil health", "Premium positioning"],
    category: "Organic",
    tagline: "The premium foundation for certified organic products.",
    description:
      "Our Organic Base Granules provide a sustainable, high-quality, and nutrient-rich foundation for your organic-certified fertilizer and soil conditioning products. Formulated from rich, composted organic matter and other natural materials, these granules are the ideal, eco-friendly alternative to inert carriers like bentonite.\n\nUnlike a simple filler, our organic base actively adds value to your final product. It works to improve soil structure, feed beneficial microbes, and provide essential organic carbon, all while serving as a stable, uniform carrier for your active ingredients.",
    howToApply: [
      {
        step: "01",
        title: "A Carrier for Active Ingredients",
        detail:
          "Use as a clean, organic-compliant carrier for bio-stimulants, bio-pesticides, and microbial inoculants.",
      },
      {
        step: "02",
        title: "A Standalone Soil Conditioner",
        detail:
          "Can be packaged and sold as-is as a premium soil conditioner to boost organic matter, improve water retention, and enhance soil aeration.",
      },
      {
        step: "03",
        title: "A Base for Blending",
        detail:
          "The perfect foundation for creating custom, homogeneous organic fertilizer blends. Mix them with minerals or other nutrients to create a unique, value-added product.",
      },
    ],
    benefits: [
      {
        title: "Certified Organic-Ready",
        detail:
          "Provides the perfect, clean, and natural base for products seeking organic certification.",
      },
      {
        title: "Improves Soil Structure",
        detail:
          "Adds vital organic matter (carbon) to the soil, which is essential for improving water-holding capacity, porosity, and long-term fertility.",
      },
      {
        title: "Feeds Soil Life",
        detail:
          "The organic material acts as a food source for beneficial soil microbes, helping to build a healthy, living soil ecosystem.",
      },
      {
        title: "Consistent Quality & Scale",
        detail:
          "As an ISO 9001:2015 certified company, we deliver consistent, uniform granules at the scale your business needs (190 MT/day).",
      },
    ],
    specs: [
      { label: "Type", value: "Certified organic carrier granule" },
      { label: "Form", value: "Granules" },
      { label: "Key Inputs", value: "Composted organic matter, natural materials" },
      { label: "Application", value: "Carrier, soil conditioner, blending base" },
      { label: "Certification", value: "ISO 9001:2015 / Organic-compliant" },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getRelatedProducts = (slug: string): Product[] =>
  products.filter((p) => p.slug !== slug);