import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export const InsightCard = ({ post, index }) => (
  <Card className="h-full rounded-[28px] border-border bg-surface-card shadow-[0_16px_50px_rgba(16,24,40,0.05)]">
    <CardContent className="flex h-full flex-col p-7">
      <div className="inline-flex w-fit rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {post.topic}
      </div>
      <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">{post.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Strategic insight
        <ChevronRight className="h-4 w-4" />
      </div>
    </CardContent>
  </Card>
);
