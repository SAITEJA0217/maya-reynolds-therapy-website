import type { OfficeContent, Photo } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { TextLink } from "@/components/ui/TextLink";

/**
 * NEW — not on the reference site. An editorial spread built from the page's
 * own system: the dominant image bleeds off the left edge (as in the hero and
 * specialties), a smaller supporting image sits lower on the right beside a
 * pull quote, and practical details close on ruled columns (as in "Areas of focus").
 */
export function OfficeSection({ content }: { content: OfficeContent }) {
  const [dominant, supporting] = content.images;

  return (
    <section id={content.id} aria-labelledby={`${content.id}-heading`} className="overflow-hidden bg-canvas pb-24 pt-20 md:pb-[8.9vw] md:pt-[8.3vw]">
      <div className="px-[6vw] md:grid md:grid-cols-[51.8vw_1fr] md:px-[8.8vw]">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id={`${content.id}-heading`} className="h2 mt-8 md:mt-12 md:max-w-[44vw]">
            <RichText text={content.heading} />
          </h2>
        </div>
        <div className="mt-7 space-y-5 md:mt-0 md:self-end">
          {content.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-14 md:mt-[5.6vw] md:grid md:grid-cols-[58vw_6vw_minmax(0,1fr)_8.8vw] md:grid-rows-[auto_1fr_auto]">
        <OfficeFigure
          photo={dominant}
          index={1}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="md:col-start-1 md:row-span-3 md:row-start-1"
          imageClassName="aspect-[4/3]"
          captionClassName="px-[6vw] md:pl-[8.8vw] md:pr-0"
        />

        {content.quote && (
          <blockquote className="reveal mx-[6vw] mt-12 border-l border-accent pl-6 md:col-start-3 md:row-start-1 md:mx-0 md:mt-0 md:pl-7">
            <p className="font-display text-[1.35rem] font-display-weight italic leading-[1.45] text-ink md:text-[calc(var(--fs-h3)*1.02)]">
              “{content.quote}”
            </p>
          </blockquote>
        )}

        <OfficeFigure
          photo={supporting}
          index={2}
          sizes="(min-width: 768px) 28vw, 70vw"
          className="reveal ml-[24vw] mr-[6vw] mt-12 md:col-start-3 md:row-start-3 md:mx-0 md:mt-0 md:translate-y-[4.5vw]"
          imageClassName="aspect-[4/5]"
        />
      </div>

      <dl id="office-details" className="mt-16 grid scroll-mt-6 px-[6vw] md:mt-[9vw] md:grid-cols-3 md:gap-x-[3.5vw] md:px-[8.8vw]">
        {content.details.map((detail) => (
          <div key={detail.label} className="border-t border-line py-6 md:pb-0 md:pt-7">
            <dt className="caps font-medium tracking-[0.15em] text-ink">{detail.label}</dt>
            <dd className="mt-2.5">
              {detail.value}
              {detail.link && (
                <span className="mt-4 block">
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

function OfficeFigure({
  photo,
  index,
  sizes,
  className = "",
  imageClassName = "",
  captionClassName = "",
}: {
  photo: Photo;
  index: number;
  sizes: string;
  className?: string;
  imageClassName?: string;
  captionClassName?: string;
}) {
  return (
    <figure className={className}>
      <Figure photo={photo} sizes={sizes} className={imageClassName} />
      {photo.caption && (
        <figcaption className={`mt-4 flex items-baseline gap-3 text-[0.875rem] ${captionClassName}`}>
          <span aria-hidden="true" className="font-display italic text-accent">
            {String(index).padStart(2, "0")}
          </span>
          {photo.caption}
        </figcaption>
      )}
    </figure>
  );
}
