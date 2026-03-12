import { ImagePanel } from "@/components/ImagePanel";

export const PageHero = ({ eyebrow, title, description, imageSrc, imageAlt, badges = [], primaryCta, secondaryCta, testId }) => (
  <section className="relative overflow-hidden border-b border-border bg-background">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,77,62,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,119,6,0.08),transparent_30%)]" />
    <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
      <div className="space-y-7" data-testid={testId}>
        <div className="inline-flex rounded-full border border-border bg-surface-overlay/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </div>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{description}</p>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge) => (
            <span key={badge} className="rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-primary">
              {badge}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {primaryCta}
          {secondaryCta}
        </div>
      </div>
      <ImagePanel
        src={imageSrc}
        alt={imageAlt}
        testId={`${testId}-image-panel`}
        className="aspect-4/4.5 min-h-[360px] lg:min-h-[560px]"
        overlay={
          <div className="rounded-[26px] border border-white/30 bg-surface-overlay/92 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Built for serious B2B buyers</p>
            <p className="mt-3 text-sm leading-7 text-secondary">Cleaner positioning, stronger credibility, and fast action paths for calls, inquiries, and distributor conversations.</p>
          </div>
        }
      />
    </div>
  </section>
);
