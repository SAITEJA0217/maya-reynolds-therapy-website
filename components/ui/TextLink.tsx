import type { Link } from "@/data/types";

/** Reference primary CTA style: tracked caps with a 1px rule beneath. */
export function TextLink({ link, className = "" }: { link: Link; className?: string }) {
  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`caps inline-block border-b border-current pb-1.5 text-ink transition-colors duration-300 hover:text-accent ${className}`}
    >
      {link.label}
      {link.external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
