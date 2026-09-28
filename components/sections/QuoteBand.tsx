import { quoteBand } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";

/** Reference: full-width statement band between "Who we help" and the expertise list. */
export function QuoteBand() {
  return (
    <section aria-label="A note from Dr. Reynolds" className="bg-olive-deep py-24 text-linen lg:py-32">
      <Container>
        <figure className="reveal mx-auto max-w-4xl text-center">
          <span aria-hidden="true" className="font-serif text-6xl leading-none text-clay-light">
            “
          </span>
          <blockquote className="mt-2 font-serif text-[clamp(1.6rem,1.2rem+1.8vw,2.75rem)] leading-[1.2] tracking-[-0.01em] [&_em]:text-clay-light">
            <p>
              <RichText text={quoteBand.quote} />
            </p>
          </blockquote>
          <figcaption className="eyebrow mt-10 text-sage-light">— {quoteBand.attribution}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
