import type { FaqContent } from "@/data/types";
import { RichText } from "@/components/ui/RichText";

/**
 * The reference nav links to a separate FAQs page; here the questions sit on
 * the homepage, laid out like "Areas of expertise" (heading left, ruled list
 * right). Native <details> keeps it accessible with no JavaScript.
 */
export function FaqSection({ content }: { content: FaqContent }) {
  return (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-heading`}
      className="bg-surface px-[6vw] pb-24 pt-20 md:grid md:grid-cols-[26.5vw_minmax(0,1fr)] md:px-[8.8vw] md:pb-[8.9vw] md:pt-[8.3vw]"
    >
      <div className="md:pr-[3vw]">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-heading`} className="mt-6 text-[calc(var(--fs-h2)*0.84)] leading-[1.25]">
          <RichText text={content.heading} />
        </h2>
      </div>
      <div className="mt-10 border-t border-line md:mt-0">
        {content.items.map((item) => (
          <details key={item.question} className="faq-item group border-b border-line">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-display text-[1.2rem] font-display-weight text-ink transition-colors hover:text-accent md:text-[1.35rem]">
              {item.question}
              <span
                aria-hidden="true"
                className="relative size-3.5 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3.5 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3.5 after:w-px after:bg-current after:transition-transform after:duration-300 group-open:after:rotate-90"
              />
            </summary>
            <p className="max-w-[46rem] pb-7 pr-8">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
