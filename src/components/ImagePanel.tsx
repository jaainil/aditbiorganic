export const ImagePanel = ({ src, alt, testId, className = "", overlay }) => (
  <div className={`relative overflow-hidden rounded-[32px] border border-border bg-muted shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${className}`} data-testid={testId}>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.18),transparent_45%)]" />
    <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
    {overlay ? <div className="absolute bottom-5 left-5 right-5">{overlay}</div> : null}
  </div>
);
