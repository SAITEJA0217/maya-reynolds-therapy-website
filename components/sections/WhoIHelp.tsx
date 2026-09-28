import Image from "next/image";
import { whoIHelp } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Reference "Who we help": centered heading over a three-column image grid. */
export function WhoIHelp() {
  return (
    <section id="who-i-help" aria-labelledby="who-heading" className="bg-sand py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="who-heading"
          eyebrow={whoIHelp.eyebrow}
          heading={whoIHelp.heading}
          align="center"
        />
        <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-12">
          {whoIHelp.audiences.map((audience, index) => (
            <li key={audience.title} className="reveal group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={audience.image.src}
                  alt={audience.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 30vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-(--ease-calm) group-hover:scale-[1.03] motion-reduce:transform-none"
                />
              </div>
              <p aria-hidden="true" className="mt-7 font-serif text-small italic text-clay">
                0{index + 1}
              </p>
              <h3 className="mt-2 text-h3 text-ink">{audience.title}</h3>
              <p className="mt-3 text-muted">{audience.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
