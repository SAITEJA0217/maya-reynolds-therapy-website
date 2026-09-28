import type { OfficeContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { TextLink } from "@/components/ui/TextLink";

/**
 * NEW — not on the reference site. Built from the same system as the rest of
 * the page: tracked-caps eyebrow, H2 at 8.8vw, an image that bleeds off the
 * left edge (as in the hero and specialties), and a ruled caps list for details
 * (as in "Areas of focus").
 */
export function OfficeSection({ content }: { content: OfficeContent }) {
  const [main, second, detail] = content.images;

  return (
    <section id={content.id} aria-labelledby={`${content.id}-heading`} className="bg-canvas pb-24 pt-20 md:pb-[8.9vw] md:pt-[8.3vw]">
      <div className="px-[6vw] md:grid md:grid-cols-[51.8vw_1fr] md:px-[8.8vw]">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-heading`} className="h2 mt-10 md:mt-16 md:max-w-[44vw]">
            <RichText text={content.heading} />
          </h2>
        </div>
        <div className="mt-7 space-y-5 md:mt-0 md:self-end">
          {content.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:mt-[5.6vw] md:grid-cols-[57vw_4.2vw_minmax(0,1fr)] md:gap-0 md:pr-[8.8vw]">
        <Figure
          photo={main}
          sizes="(min-width: 768px) 57vw, 100vw"
          className="reveal aspect-[4/3] md:row-span-2 md:aspect-auto md:h-full"
        />
        <Figure
          photo={second}
          sizes="(min-width: 768px) 30vw, 100vw"
          className="reveal mx-[6vw] aspect-[4/3] md:col-start-3 md:mx-0"
        />
        <Figure
          photo={detail}
          sizes="(min-width: 768px) 30vw, 100vw"
          className="reveal mx-[6vw] aspect-[4/3] md:col-start-3 md:mx-0 md:mt-4"
        />
      </div>

      <dl id="office-details" className="mt-14 scroll-mt-6 px-[6vw] md:ml-[35.3vw] md:mt-[5.6vw] md:px-0 md:pr-[8.7vw]">
        {content.details.map((detail) => (
          <div key={detail.label} className="grid gap-2 border-b border-line py-6 first:border-t md:grid-cols-[16vw_1fr] md:gap-6">
            <dt className="caps font-medium tracking-[0.15em] text-ink">{detail.label}</dt>
            <dd>
              {detail.value}
              {detail.link && (
                <span className="mt-3 block">
                  <TextLink link={detail.link} />
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
