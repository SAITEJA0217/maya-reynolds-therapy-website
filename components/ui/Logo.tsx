import { practice } from "@/data/site";

type LogoProps = { tone?: "dark" | "light" };

/** Typographic wordmark — the practice has no supplied logo, so the name carries the brand. */
export function Logo({ tone = "dark" }: LogoProps) {
  const name = tone === "light" ? "text-linen" : "text-ink";
  const sub = tone === "light" ? "text-sage-light" : "text-muted";
  return (
    <span className="flex flex-col leading-none">
      <span className={`font-serif text-[1.35rem] tracking-[-0.01em] sm:text-2xl ${name}`}>
        Maya Reynolds<span className="text-clay">,</span>{" "}
        <span className="italic">PsyD</span>
      </span>
      <span className={`eyebrow mt-1.5 text-[0.66rem]! tracking-[0.2em]! ${sub}`}>
        {practice.title}
        <span className="hidden sm:inline"> · {practice.city}</span>
      </span>
    </span>
  );
}
