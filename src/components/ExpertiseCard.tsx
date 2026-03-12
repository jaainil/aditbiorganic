import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, ShieldCheck, Factory, FlaskConical } from "lucide-react";

const iconMap = {
  leaf: BadgeCheck,
  shield: ShieldCheck,
  factory: Factory,
  flask: FlaskConical,
};

export const ExpertiseCard = ({ card, index }) => {
  const Icon = iconMap[card.icon] || BadgeCheck;
  return (
    <Card className="group h-full rounded-[28px] border-border bg-surface-card/95 shadow-[0_10px_40px_rgba(16,24,40,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,24,40,0.1)]">
      <CardContent className="p-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">{card.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{card.description}</p>
      </CardContent>
    </Card>
  );
};
