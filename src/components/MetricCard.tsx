export const MetricCard = ({ item, index }) => (
  <div className="rounded-[28px] border border-border bg-surface-card p-6 shadow-[0_12px_40px_rgba(16,24,40,0.05)]">
    <p className="font-heading text-3xl font-semibold text-primary">{item.value}</p>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
  </div>
);
