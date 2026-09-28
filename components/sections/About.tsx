import Image from "next/image";
import { about } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Reference "How we work": image beside italic lead, two paragraphs and a CTA — here, Maya's bio. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <div className="reveal relative mx-auto aspect-[4/5] max-w-md overflow-hidden lg:max-w-none">
            <Image
              src={about.portrait.src}
              alt={about.portrait.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 90vw"
              className="object-cover object-top"
            />
          </div>
          <p className="mx-auto mt-5 max-w-md text-small text-muted lg:max-w-none">
            <span className="font-serif text-base text-ink">Dr. Maya Reynolds, PsyD</span>
            <br />
            Licensed Clinical Psychologist · Santa Monica, CA
          </p>
        </div>

        <div>
          <SectionHeading id="about-heading" eyebrow={about.eyebrow} heading={about.heading} />
          <p className="mt-8 font-serif text-lead italic text-clay">{about.lead}</p>
          <div className="mt-6 space-y-5 text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div id="approach" className="mt-12 scroll-mt-28">
            <h3 className="eyebrow text-ink">{about.methodsHeading}</h3>
            <dl className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {about.methods.map((method) => (
                <div key={method.id} id={method.id} className="scroll-mt-28 border-b border-line py-5">
                  <dt className="font-serif text-[1.2rem] text-ink">{method.name}</dt>
                  <dd className="mt-1.5 text-small text-muted">{method.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ButtonLink href={about.cta.href} variant="outline" className="mt-10">
            {about.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
