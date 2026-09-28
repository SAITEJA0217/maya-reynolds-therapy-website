import type { Link } from "@/data/types";

type TextLinkProps = {
  link: Link;
  className?: string;
  /** Screen-reader-only context for repeated labels, e.g. "Get started" → "…: Trauma & EMDR". */
  context?: string;
};

/** Reference primary CTA style: tracked caps with a 1px rule beneath. */
export function TextLink({ link, className = "", context }: TextLinkProps) {
  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`caps inline-block border-b border-current pb-1.5 text-ink transition-colors duration-300 hover:text-accent ${className}`}
    >
      {link.label}
      {context && <span className="sr-only">: {context}</span>}
      {link.external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
