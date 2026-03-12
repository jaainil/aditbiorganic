import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const InsightCard = ({ post, index }) => (
  <Link to="/blog" className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[28px]">
    <Card className="h-full rounded-[28px] border-border bg-surface-card shadow-[0_16px_50px_rgba(16,24,40,0.05)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(16,24,40,0.09)]">
      <CardContent className="flex h-full flex-col p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {post.topic}
          </div>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground leading-snug">{post.title}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Read more
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  </Link>
);
