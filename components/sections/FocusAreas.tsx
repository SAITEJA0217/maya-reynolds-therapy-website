import { focusAreas } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Reference "Our areas of expertise": a ruled list of italic terms, ending with "…and more". */
export function FocusAreas() {
  return (
    <section aria-labelledby="focus-heading" className="bg-paper py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        <SectionHeading id="focus-heading" heading={focusAreas.heading} level="h2" />
        <div>
          <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {focusAreas.items.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 font-serif text-[1.35rem] italic text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-serif text-lead italic text-clay">{focusAreas.closing}</p>
        </div>
      </Container>
    </section>
  );
}
