import type { Brand } from "@/data/types";

/** Two-line wordmark: display-serif name over widely tracked caps tagline. */
export function Wordmark({ brand }: { brand: Brand }) {
  return (
    <span className="flex flex-col items-center whitespace-nowrap leading-none">
      <span className="font-display text-[1.75rem] font-display-weight tracking-[-0.01em] text-ink md:text-[2.4rem]">
        {brand.name}
      </span>
      <span className="mt-1.5 font-body text-[0.6875rem] tracking-[0.28em] text-accent uppercase md:text-[0.78rem] md:tracking-[0.36em]">
        {brand.tagline}
      </span>
    </span>
  );
}
