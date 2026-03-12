import { Card, CardContent } from "@/components/ui/card";
import { Sprout } from "lucide-react";

export const ProductCard = ({ product, index }) => (
  <Card className="group h-full rounded-[28px] border-border bg-surface-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,24,40,0.08)]">
    <div className="overflow-hidden rounded-t-[28px]">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
      />
    </div>
    <CardContent className="flex h-full flex-col p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Product line
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sprout className="h-5 w-5" />
        </div>
      </div>
      <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">{product.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{product.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {product.fit.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs font-medium text-primary">
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);
