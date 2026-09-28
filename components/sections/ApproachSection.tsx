import type { ApproachContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { TextLink } from "@/components/ui/TextLink";

/**
 * Reference "How we work" (1440, tint background, 922px): eyebrow at +129,
 * H2 ~175px below, then two columns 8.8→38vw (caps lead + body) and 39.3→68vw,
 * "LEARN MORE ABOUT US" link. Right-hand image position is inferred (see spec).
 */
export function ApproachSection({ content }: { content: ApproachContent }) {
  return (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-heading`}
      className="bg-tint px-[6vw] pb-24 pt-20 md:grid md:grid-cols-[29.2vw_1.3vw_28.7vw_4.3vw_19.7vw] md:px-[8.8vw] md:pb-[8.9vw] md:pt-[8.3vw]"
    >
      <p className="eyebrow md:col-span-5">{content.eyebrow}</p>
      <h2 id={`${content.id}-heading`} className="h2 mt-14 md:col-span-3 md:mt-[10vw]">
        <RichText text={content.heading} />
      </h2>

      <div className="mt-8 md:col-start-1 md:row-start-3 md:mt-[3.3vw]">
        <p className="eyebrow">{content.lead}</p>
        {content.body.map((p) => (
          <p key={p} className="mt-5">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 md:col-start-5 md:row-span-3 md:row-start-2 md:mt-[10vw]">
        <Figure
          photo={content.image}
          sizes="(min-width: 768px) 20vw, 88vw"
          className="aspect-[4/5] md:aspect-[3/4]"
        />
        {content.imageCaption && <p className="mt-4 text-[0.875rem]">{content.imageCaption}</p>}
      </div>

      <div className="mt-8 md:col-start-3 md:row-start-3 md:mt-[3.3vw]">
        <div className="space-y-5">
          {content.aside.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {content.list && (
          <div id="approach" className="mt-8">
            <h3 className="eyebrow">{content.list.heading}</h3>
            <dl className="mt-3 border-t border-ink/15">
              {content.list.items.map((item) => (
                <div key={item.id} id={item.id} className="scroll-mt-6 border-b border-ink/15 py-3.5">
                  <dt className="font-medium text-ink">{item.label}</dt>
                  <dd className="text-[0.9375rem]">{item.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>

      <div className="mt-12 md:col-span-3 md:row-start-4 md:mt-[5vw]">
        <TextLink link={content.cta} />
      </div>
    </section>
  );
}
