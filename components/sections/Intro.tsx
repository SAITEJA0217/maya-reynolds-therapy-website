import Image from "next/image";
import { intro } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";

/** Reference: empathetic H2 + italic lead + paragraph, then an image beside a second paragraph. */
export function Intro() {
  return (
    <section aria-labelledby="intro-heading" className="pb-24 lg:pb-32">
      <Container>
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 id="intro-heading" className="text-h2 text-ink">
            <RichText text={intro.heading} />
          </h2>
          <p className="mt-6 font-serif text-lead italic text-clay">{intro.lead}</p>
          <p className="mx-auto mt-6 max-w-2xl text-muted">{intro.body}</p>
        </div>

        <div className="mt-16 grid items-center gap-10 md:grid-cols-[0.9fr_1fr] md:gap-16 lg:mt-20 lg:gap-24">
          <div className="reveal relative aspect-[4/5] overflow-hidden md:max-w-md">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="reveal max-w-lg">
            <span aria-hidden="true" className="block h-px w-16 bg-sage" />
            <p className="mt-8 font-serif text-[clamp(1.35rem,1.15rem+0.8vw,1.8rem)] leading-snug text-ink">
              {intro.aside}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
