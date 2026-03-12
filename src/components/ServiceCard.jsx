import { FileText, Leaf, ShieldCheck, Factory, FlaskConical, PackageCheck, Warehouse, Truck } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  shield: ShieldCheck,
  factory: Factory,
  flask: FlaskConical,
  package: PackageCheck,
  warehouse: Warehouse,
  truck: Truck,
};

export const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon] || FileText;
  const spanClass = index === 0 ? "lg:col-span-2" : index === 3 ? "lg:col-span-2" : "";

  return (
    <article className={`rounded-[30px] border border-border bg-surface-card p-7 shadow-[0_16px_50px_rgba(16,24,40,0.06)] ${spanClass}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {service.concept}
          </div>
          <h3 className="font-heading text-2xl font-semibold text-foreground">{service.title}</h3>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">{service.description}</p>
    </article>
  );
};
