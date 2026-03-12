export const SectionIntro = ({ eyebrow, title, description, action = null }) => (
  <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
    <div className="max-w-3xl space-y-4">
      <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </div>
      <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
    {action ? <div>{action}</div> : null}
  </div>
);
