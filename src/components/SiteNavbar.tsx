import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, navigation } from "@/data/siteData";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive ? "bg-primary/10 text-primary" : "text-secondary hover:bg-primary/5"
  }`;

export const SiteNavbar = ({ onMobileToggle, mobileOpen }: { onMobileToggle: () => void; mobileOpen: boolean }) => {
  return (
    <>
      {/* ── Top utility bar (desktop only) ── */}
      <div className="hidden border-b border-secondary/20 bg-secondary text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 text-sm">
          <div className="flex flex-wrap items-center gap-5" data-testid="topbar-contact-list">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
              data-testid="topbar-phone-link"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
            <a
              href={`mailto:${company.emails[0]}`}
              className="inline-flex items-center gap-2 text-white/90 transition hover:text-white"
              data-testid="topbar-email-link"
            >
              <Mail className="h-4 w-4" />
              {company.emails[0]}
            </a>
            <div className="inline-flex items-center gap-2 text-white/90" data-testid="topbar-address-text">
              <MapPin className="h-4 w-4" />
              <span>{company.address}</span>
            </div>
          </div>
          <div
            className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/85"
            data-testid="topbar-tagline"
          >
            WELCOME TO ADIT BIORGANIC
          </div>
        </div>
      </div>

      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface-overlay/85 backdrop-blur-xl">
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
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary px-5 text-primary hover:bg-primary hover:text-primary-foreground"
              data-testid="header-call-button"
            >
              <a href={`tel:${company.phoneRaw}`}>Call now</a>
            </Button>
            <Button
              asChild
              className="h-11 rounded-full bg-accent px-5 text-secondary hover:bg-accent/90"
              data-testid="header-contact-button"
            >
              <Link to="/contact">Become a partner</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary lg:hidden"
            onClick={onMobileToggle}
            data-testid="mobile-menu-toggle-button"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-border bg-surface-card px-4 py-4 lg:hidden" data-testid="mobile-navigation-panel">
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
              <a
                href={`tel:${company.phoneRaw}`}
                className="rounded-full border border-primary px-4 py-3 text-center text-sm font-medium text-primary"
                data-testid="mobile-call-link"
              >
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
};
