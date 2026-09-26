/**
 * The S mark: a lime tile with the letterform knocked out.
 *
 * Geometry is duplicated in public/favicon.svg, which cannot read the theme's
 * CSS custom properties and so hardcodes the resolved hex. Edit both together.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <rect width="64" height="64" rx="14" className="fill-accent" />
      <path
        d="M45.5 17H25.5a7.5 7.5 0 0 0 0 15h13a7.5 7.5 0 0 1 0 15H18.5"
        fill="none"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-accent-foreground"
      />
    </svg>
  );
}
