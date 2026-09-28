import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "light" | "text";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
};

const base =
  "group inline-flex min-h-12 items-center justify-center gap-3 font-sans text-[0.95rem] font-medium tracking-[0.01em] transition-colors duration-300 ease-(--ease-calm)";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-olive px-7 text-paper hover:bg-olive-deep",
  outline:
    "rounded-full border border-olive/40 px-7 text-olive hover:border-olive hover:bg-olive hover:text-paper",
  light: "rounded-full bg-linen px-7 text-olive-deep hover:bg-paper",
  text: "min-h-11 text-olive underline decoration-olive/30 underline-offset-[6px] hover:decoration-clay",
};

/** Anchor styled as a button. All CTAs on this page are navigational links. */
export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
      {variant !== "text" && (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 ease-(--ease-calm) group-hover:translate-x-1 motion-reduce:transform-none"
        >
          →
        </span>
      )}
    </a>
  );
}
