import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { company, navigation } from "@/data/siteData";

const services = [
  { label: "Granule Manufacturing", path: "/services/organic-coated-granule-manufacturing" },
  { label: "Contract Manufacturing", path: "/services/job-work-contract-manufacturing" },
  { label: "Advanced Coating", path: "/services/advanced-coating-services" },
  { label: "Lab & Testing", path: "/services/laboratory-testing-services" },
  { label: "Custom Packaging", path: "/services/custom-packaging-private-labeling" },
  { label: "Warehousing", path: "/services/warehouse-go-down-facilities" },
];

export const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-secondary text-white" data-testid="site-footer">
      {/* Atmospheric background layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* ── CTA Band ── */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Partner with us</p>
            <h2 className="mt-2 font-heading text-3xl font-semibold text-white lg:text-4xl">
              Let's grow something great.
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-7 text-white/60">
              Manufacture under your brand. Scale with our facility. Build trust with every granule.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-accent px-7 font-semibold text-secondary hover:bg-accent/90">
              <Link to="/contact">
                Become a partner <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/20 px-7 text-white hover:border-white/30 hover:bg-white/10"
            >
              <a href={`tel:${company.phoneRaw}`}>Call us now</a>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div
        className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8 lg:px-8"
        data-testid="footer-main-grid"
      >
        {/* Brand column */}
        <div className="space-y-7" data-testid="footer-company-block">
          <Link to="/" className="group inline-flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Adit Biorganic"
              className="h-11 w-auto rounded-xl object-contain brightness-0 invert"
            />
            <div>
              <p className="font-heading text-base font-semibold text-white transition-colors group-hover:text-accent">
                {company.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.26em] text-white/50">{company.tagline}</p>
            </div>
          </Link>

          <p className="text-sm leading-7 text-white/60" data-testid="footer-company-description">
            India's leading ISO 9001:2015 certified B2B fertilizer granule manufacturer. Based in Anand, Gujarat —
            trusted by brands across the country.
          </p>

          {/* Contact cards */}
          <div className="space-y-3">
            <a
              href={`tel:${company.phoneRaw}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm transition-all hover:border-white/15 hover:bg-white/10"
              data-testid="footer-phone-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary/30">
                <Phone className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Phone</p>
                <p className="font-medium text-white">{company.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${company.emails[0]}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm transition-all hover:border-white/15 hover:bg-white/10"
              data-testid="footer-email-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent transition-colors group-hover:bg-accent/25">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Email</p>
                <p className="font-medium text-white">{company.emails[0]}</p>
              </div>
            </a>

            <div
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm"
              data-testid="footer-address-card"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/50">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">Address</p>
                <p className="mt-0.5 leading-6 text-white/70">{company.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation column */}
        <div className="space-y-5" data-testid="footer-links-block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Navigate</p>
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group inline-flex items-center gap-2 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                data-testid={`footer-link-${item.label.toLowerCase()}`}
              >
                <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <p className="text-xs font-semibold text-accent/90">ISO 9001:2015 Certified</p>
          </div>
        </div>

        {/* Products column */}
        <div className="space-y-5" data-testid="footer-products-block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Product Groups</p>
          <div className="flex flex-col gap-1">
            {products.slice(0, 6).map((product, index) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group inline-flex items-center gap-2 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                data-testid={`footer-product-link-${index}`}
              >
                <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-4" />
                {product.title}
              </Link>
            ))}
          </div>
          <Link
            to="/products"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/80 transition hover:text-primary"
          >
            View all products <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Services column */}
        <div className="space-y-5" data-testid="footer-services-block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Services</p>
          <div className="flex flex-col gap-1">
            {services.map((svc, i) => (
              <Link
                key={i}
                to={svc.path}
                className="group inline-flex items-center gap-2 py-1.5 text-sm text-white/70 transition-colors hover:text-white"
                data-testid={`footer-service-link-${i}`}
              >
                <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                {svc.label}
              </Link>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent/80 transition hover:text-accent"
          >
            View all services <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="relative border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
            <p data-testid="footer-copyright-text">
              © {new Date().getFullYear()} Adit Biorganic Pvt. Ltd. All rights reserved.
            </p>
            <span className="hidden h-3 w-px bg-white/20 lg:block" />
            <p>Anand, Gujarat, India</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-xs italic text-white/30" data-testid="footer-bottom-tagline">
              Nurturing Farms, Preserving Nature
            </p>
            <span className="hidden h-3 w-px bg-white/15 lg:block" />
            <a
              href="https://aexaware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white/30 transition-colors hover:text-white/60"
              data-testid="footer-credit"
            >
              Designed &amp; built by
              <span className="font-semibold text-white/50 hover:text-white/80 transition-colors">Aexaware Private Limited</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
