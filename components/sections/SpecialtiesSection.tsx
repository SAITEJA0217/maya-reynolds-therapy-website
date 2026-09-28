import type { SpecialtiesContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { TextLink } from "@/components/ui/TextLink";

/**
 * Reference "Honoring where you've been…" + "Our specialties include…" (1440):
 * large image on the left (position inferred) with the statement H2 at 58.9vw,
 * then the heading at 8.8vw beside a two-column grid at 39vw / 69.3vw.
 */
export function SpecialtiesSection({ content }: { content: SpecialtiesContent }) {
  return (
    <section id={content.id} aria-labelledby={`${content.id}-heading`} className="bg-surface pb-24 md:pb-[8.6vw] md:pt-[4.2vw]">
      <div className="md:grid md:grid-cols-[50vw_8.9vw_36vw] md:items-end">
        <Figure
          photo={content.image}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-[390/300] md:aspect-[720/560]"
        />
        <h2 className="h2 mt-14 px-[6vw] md:col-start-3 md:mt-0 md:px-0">
          <RichText text={content.statement} />
        </h2>
      </div>

      <div className="mt-20 px-[6vw] md:mt-[13.9vw] md:grid md:grid-cols-[30.2vw_25.7vw_4.6vw_25.7vw] md:px-[8.8vw]">
        <h3 id={`${content.id}-heading`} className="text-[calc(var(--fs-h2)*0.84)] leading-[1.25] md:max-w-[22vw]">
          <RichText text={content.heading} />
        </h3>
        <div className="mt-12 grid gap-16 md:col-span-3 md:col-start-2 md:mt-8 md:grid-cols-[25.7vw_25.7vw] md:gap-x-[4.6vw] md:gap-y-[8.6vw]">
          {content.items.map((item) => (
            <article key={item.id} id={item.id} aria-labelledby={`${item.id}-title`} className="reveal scroll-mt-6">
              <h4 id={`${item.id}-title`} className="h3">
                {item.title}
              </h4>
              <p className="mt-6 md:mt-7">{item.body}</p>
              <TextLink link={item.link} className="mt-8" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
