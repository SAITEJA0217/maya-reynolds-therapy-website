import type { StatementContent } from "@/data/types";

/** Reference statement band (1440): 666px tall, text 60vw wide at 8.8vw, sitting low. */
export function StatementBand({ content }: { content: StatementContent }) {
  return (
    <section aria-label="Statement" className="bg-band px-[6vw] pb-24 pt-40 md:px-[8.8vw] md:pb-[10.3vw] md:pt-[22.8vw]">
      <p className="reveal h2 max-w-[60rem] font-display font-display-weight leading-(--lh-display) tracking-(--display-tracking) text-on-band md:max-w-[60vw]">
        {content.text} <em className="italic">{content.emphasis}</em>
      </p>
    </section>
  );
}
