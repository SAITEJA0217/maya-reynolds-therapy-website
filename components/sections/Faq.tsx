import { faq } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The reference links to a separate FAQs page from its main navigation; here the
 * questions live on the homepage so the "FAQs" nav item has a destination.
 * Native <details> keeps the accordion keyboard- and screen-reader-accessible with no JS.
 */
export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-sand py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
        <SectionHeading id="faq-heading" eyebrow={faq.eyebrow} heading={faq.heading} className="lg:sticky lg:top-32 lg:self-start" />
        <div className="border-t border-olive/25">
          {faq.items.map((item) => (
            <details key={item.question} className="faq-item group border-b border-olive/25">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 font-serif text-[1.25rem] leading-snug text-ink transition-colors hover:text-olive sm:text-[1.35rem]">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative size-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-4 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-4 after:w-px after:bg-current after:transition-transform after:duration-300 group-open:after:rotate-90"
                />
              </summary>
              <p className="max-w-2xl pb-7 pr-10 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
