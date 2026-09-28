import Image from "next/image";
import { contact, formattedAddress } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";

/** Reference "Schedule an appointment": eyebrow, fit-focused H2, reassurance copy, CTA, image. */
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 lg:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading id="contact-heading" eyebrow={contact.eyebrow} heading={contact.heading} />
          <p className="mt-8 max-w-md text-muted">{contact.body}</p>
          <div className="mt-10 flex items-center gap-5">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-full">
              <Image
                src={contact.image.src}
                alt={contact.image.alt}
                fill
                placeholder="blur"
                sizes="160px"
                className="object-cover object-[center_22%] scale-[1.6]"
              />
            </div>
            <p className="text-small text-muted">
              <span className="font-serif text-base text-ink">Dr. Maya Reynolds, PsyD</span>
              <br />
              In person at {formattedAddress}
              <br />
              or by telehealth across California
            </p>
          </div>
        </div>
        <ContactForm sessionOptions={contact.sessionOptions} note={contact.note} />
      </Container>
    </section>
  );
}
