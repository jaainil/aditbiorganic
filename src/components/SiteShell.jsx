import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, navigation, products } from "@/data/siteContent";

const linkClassName = ({ isActive }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? "bg-primary/10 text-primary" : "text-secondary hover:bg-primary/5"
  }`;

export const SiteShell = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="hidden border-b border-secondary/20 bg-secondary text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-5" data-testid="topbar-contact-list">
            <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white" data-testid="topbar-phone-link">
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <a href={`mailto:${company.emails[0]}`} className="inline-flex items-center gap-2 text-white/90 transition hover:text-white" data-testid="topbar-email-link">
              <Mail className="h-4 w-4" />
              {company.emails[0]}
            </a>
            <div className="inline-flex items-center gap-2 text-white/90" data-testid="topbar-address-text">
              <MapPin className="h-4 w-4" />
              <span>{company.address}</span>
            </div>
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/85" data-testid="topbar-tagline">
            WELCOME TO ADIT BIORGANIC          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" data-testid="site-logo-link">
            <img src="/logo.png" alt="Adit Biorganic" className="h-12 w-auto rounded-lg object-contain" />
            <div>
              <p className="font-heading text-lg font-semibold">{company.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Industrial • Organic • Trusted</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" data-testid="desktop-navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClassName}
                data-testid={`nav-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button asChild variant="outline" className="h-11 rounded-full border-primary px-5 text-primary hover:bg-primary hover:text-primary-foreground" data-testid="header-call-button">
              <a href={`tel:${company.phoneRaw}`}>Call now</a>
            </Button>
            <Button asChild className="h-11 rounded-full bg-accent px-5 text-secondary hover:bg-accent/90" data-testid="header-contact-button">
              <Link to="/contact">Become a partner</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            onClick={() => setMobileMenuOpen((current) => !current)}
            data-testid="mobile-menu-toggle-button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border bg-white px-4 py-4 lg:hidden" data-testid="mobile-navigation-panel">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={linkClassName}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <a href={`tel:${company.phoneRaw}`} className="rounded-full border border-primary px-4 py-3 text-center text-sm font-medium text-primary" data-testid="mobile-call-link">
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="overflow-hidden bg-secondary text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div className="space-y-6" data-testid="footer-company-block">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/60">Adit Biorganic</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-white">Reliable manufacturing for brands that want to grow responsibly.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/78" data-testid="footer-company-description">
              {company.legalTagline} Based in Anand, Gujarat, we support fertilizer brands and distribution networks with premium granule manufacturing, dependable production systems, and partnership-first execution.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a href={`tel:${company.phoneRaw}`} className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" data-testid="footer-phone-card">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">Phone</p>
                <p className="mt-3 text-lg font-semibold text-white">{company.phoneDisplay}</p>
              </a>
              <a href={`mailto:${company.emails[0]}`} className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" data-testid="footer-email-card">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">Email</p>
                <p className="mt-3 text-lg font-semibold text-white">{company.emails[0]}</p>
              </a>
            </div>
          </div>

          <div className="space-y-5" data-testid="footer-links-block">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Quick links</p>
            <div className="grid gap-3">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-white/80 transition hover:text-white" data-testid={`footer-link-${item.label.toLowerCase()}`}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5" data-testid="footer-address-card">
              <p className="text-xs uppercase tracking-[0.22em] text-white/60">Address</p>
              <p className="mt-3 text-sm leading-7 text-white/80">{company.address}</p>
            </div>
          </div>

          <div className="space-y-5" data-testid="footer-products-block">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/60">Featured product groups</p>
            <div className="grid gap-3">
              {products.slice(0, 4).map((product, index) => (
                <div key={product.title} className="rounded-[24px] border border-white/10 bg-white/5 p-4" data-testid={`footer-product-card-${index}`}>
                  <p className="text-sm font-semibold text-white">{product.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/70">{product.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/70 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p data-testid="footer-copyright-text">© 2025 Adit Biorganic. All rights reserved.</p>
            <p data-testid="footer-bottom-tagline">Built for stronger distributor trust, sharper positioning, and better-quality B2B inquiries.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};