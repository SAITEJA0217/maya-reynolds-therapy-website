import { primaryCta, specialties } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Reference: "Honoring where you've been…" H2, "Our specialties include…" H3, card grid. */
export function Specialties() {
  return (
    <section id="specialties" aria-labelledby="specialties-heading" className="bg-sand py-24 lg:py-32">
      <Container>
        <SectionHeading
          id="specialties-heading"
          heading={specialties.heading}
          align="center"
          className="mx-auto max-w-4xl"
        />
        <h3 className="mt-6 text-center font-serif text-lead italic text-muted">
          {specialties.subheading}
        </h3>
        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {specialties.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
