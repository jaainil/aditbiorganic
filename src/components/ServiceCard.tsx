import { Link } from "react-router-dom";
import { ArrowRight, FileText, Leaf, ShieldCheck, Factory, FlaskConical, PackageCheck, Warehouse, Truck } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  factory: Factory,
  flask: FlaskConical,
  package: PackageCheck,
  warehouse: Warehouse,
  truck: Truck,
};

export const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || FileText;

  const href = service.slug ? `/services/${service.slug}` : "/services";

  // Image-backed card
  if (service.imageSrc) {
    return (
      <Link to={href} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[30px]">
        <article className="relative flex h-full flex-col overflow-hidden rounded-[30px] border border-border shadow-[0_16px_50px_rgba(16,24,40,0.08)]">
          <img
            src={service.imageSrc}
            alt={service.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-secondary/10" />
          <div className="relative flex h-full flex-col justify-end p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  {service.concept}
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white">{service.title}</h3>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/90 text-secondary">
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80">{service.description}</p>
            <div className="mt-auto pt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Learn more
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // Default text-only card
  return (
    <Link to={href} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[30px]">
      <article className="flex h-full flex-col rounded-[30px] border border-border bg-surface-card p-7 shadow-[0_16px_50px_rgba(16,24,40,0.06)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(16,24,40,0.09)]">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {service.concept}
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground">{service.title}</h3>
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{service.description}</p>
        <div className="mt-auto pt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Learn more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </article>
    </Link>
  );
};
