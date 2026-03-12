import { Link } from "react-router-dom";
import { ArrowRight, Sprout } from "lucide-react";

export const ProductCard = ({ product }) => (
  <Link
    to={`/products/${product.slug}`}
    className="group flex flex-col overflow-hidden rounded-[28px] border border-border bg-surface-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,24,40,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
  >
    {/* Image */}
    <div className="relative h-52 w-full shrink-0 overflow-hidden">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      <div className="absolute left-4 top-4">
        <span className="inline-flex rounded-full border border-white/30 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          {product.category ?? "Product line"}
        </span>
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-1 flex-col p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-heading text-xl font-semibold leading-snug text-foreground">
          {product.title}
        </h3>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
          <Sprout className="h-5 w-5" />
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
        {product.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {product.fit.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-primary"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        Read more
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);
