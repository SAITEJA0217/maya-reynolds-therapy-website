import Image from "next/image";
import { office } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * NEW SECTION — not present on the reference site.
 * Uses Maya's own office photographs and only the office details in her profile.
 */
export function Office() {
  const [lounge, sessionRoom, detail] = office.images;

  return (
    <section id="office" aria-labelledby="office-heading" className="py-24 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
          <SectionHeading id="office-heading" eyebrow={office.eyebrow} heading={office.heading} />
          <div className="space-y-5 text-muted lg:pb-2">
            {office.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-2" aria-label="About the space">
              {office.qualities.map((quality) => (
                <li
                  key={quality}
                  className="rounded-full border border-line bg-paper px-4 py-1.5 text-[0.9rem] text-olive"
                >
                  {quality}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery: one wide room view, a second room, and a detail of the light */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1.6fr_1fr] lg:grid-rows-2 lg:gap-5">
          <figure className="reveal group relative aspect-[4/3] overflow-hidden sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:aspect-auto">
            <Image
              src={lounge.src}
              alt={lounge.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 60vw, 95vw"
              className="object-cover transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.02] motion-reduce:transform-none"
            />
          </figure>
          <figure className="reveal group relative aspect-[4/3] overflow-hidden">
            <Image
              src={sessionRoom.src}
              alt={sessionRoom.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 48vw, 95vw"
              className="object-cover transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.02] motion-reduce:transform-none"
            />
          </figure>
          <figure className="reveal group relative aspect-[4/3] overflow-hidden">
            <Image
              src={detail.src}
              alt={detail.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 48vw, 95vw"
              className="object-cover object-[center_35%] transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.02] motion-reduce:transform-none"
            />
          </figure>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          {office.details.map((detail) => (
            <div key={detail.label} className="bg-linen p-7 lg:p-9">
              <dt className="eyebrow text-clay">{detail.label}</dt>
              <dd className="mt-3 font-serif text-[1.3rem] leading-snug text-ink">
                {detail.value}
                {detail.link && (
                  <a
                    href={detail.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-sans text-small text-olive underline decoration-olive/30 underline-offset-4 hover:decoration-clay"
                  >
                    {detail.link.label}
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
