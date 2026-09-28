import type { AudiencesContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";

/**
 * Reference "Who we help" (1440): H2 at 5.9vw; three portrait image cards at
 * 16.4 / 43.1 / 69.7vw, each 25.4vw wide (≈0.76 aspect), title then body.
 */
export function AudiencesSection({ content }: { content: AudiencesContent }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-heading`} className="bg-surface pb-24 pt-16 md:pb-[7.8vw] md:pt-[6.1vw]">
      <h2 id={`${content.id}-heading`} className="h2 px-[6vw] md:px-[5.9vw]">
        <RichText text={content.heading} />
      </h2>
      <ul className="mt-12 grid gap-12 px-[6vw] md:mt-[3.9vw] md:grid-cols-3 md:gap-x-[1.3vw] md:pl-[16.4vw] md:pr-[4.9vw]">
        {content.items.map((item) => (
          <li key={item.title} className="reveal">
            <Figure
              photo={item.image}
              sizes="(min-width: 768px) 26vw, 88vw"
              className="aspect-[335/320] md:aspect-[366/480]"
            />
            <h3 className="h3 mt-8 md:mt-10">
              <RichText text={item.title} />
            </h3>
            <p className="mt-5 md:mt-6">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
