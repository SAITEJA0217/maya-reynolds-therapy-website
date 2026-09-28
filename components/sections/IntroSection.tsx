import type { IntroContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";

/**
 * Reference intro (1440): H2 at 8.8vw starting ~127px below the top of an image
 * that bleeds off the right edge (69.7vw→, 624px tall). Below the H2, two text
 * columns: 8.8→34vw (tracked-caps lead + body) and 35.4→60.6vw.
 * Mobile order (reference): heading → lead → body → image → second column.
 * One image element serves both layouts (no hidden duplicate).
 */
export function IntroSection({ content }: { content: IntroContent }) {
  return (
    <section aria-labelledby="intro-heading" className="bg-canvas pb-18 pt-22 md:pb-[8.9vw] md:pt-[12.8vw]">
      <div className="flex flex-col px-[6vw] md:grid md:grid-cols-[8.8vw_25.2vw_1.4vw_25.2vw_9.1vw_30.3vw] md:grid-rows-[auto_auto_1fr] md:px-0">
        <h2 id="intro-heading" className="h2 md:col-span-3 md:col-start-2 md:row-start-1 md:max-w-[48vw] md:pt-[8.9vw]">
          <RichText text={content.heading} />
        </h2>
        <div className="mt-7 md:col-start-2 md:row-start-2 md:mt-[3.6vw]">
          <p className="eyebrow">{content.lead}</p>
          {content.body.map((p) => (
            <p key={p} className="mt-5">
              {p}
            </p>
          ))}
        </div>
        <Figure
          photo={content.image}
          sizes="(min-width: 768px) 31vw, 88vw"
          className="my-12 aspect-[344/235] md:col-start-6 md:row-span-3 md:row-start-1 md:my-0 md:aspect-[437/624] md:self-start"
        />
        <div className="space-y-5 md:col-start-4 md:row-start-2 md:mt-[3.6vw]">
          {content.aside.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
