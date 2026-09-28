import type { HeroContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { TextLink } from "@/components/ui/TextLink";
import { PillLink } from "@/components/ui/PillLink";

/**
 * Reference hero (1440): left image bleeds 0→34.4vw (495×581), text column at
 * 42.8vw with the eyebrow top-aligned and the H1 group bottom-aligned to the
 * image, and a second image bleeding off the right edge from 93.4vw, ~200px lower.
 * Mobile: text first, then the image pair. With a secondary CTA (Maya), the
 * primary becomes a solid button beside a quieter text link.
 */
export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section aria-labelledby="hero-heading" className="bg-canvas pt-15 md:pt-12 lg:pt-9.5">
      <div className="flex flex-col md:grid md:grid-cols-[34.4vw_8.4vw_minmax(0,1fr)_6.6vw]">
        <div className="px-[6vw] md:col-start-3 md:row-start-1 md:flex md:flex-col md:justify-between md:px-0 md:pr-[4vw]">
          <p className="eyebrow md:max-w-[30vw] lg:max-w-[27vw] xl:max-w-[25rem]">{content.eyebrow}</p>
          <div className="mt-6 md:mt-10">
            <h1 id="hero-heading" className="h1 md:max-w-[44vw]">
              <RichText text={content.heading} />
            </h1>
            <p className="mt-6 md:mt-7 md:max-w-[45vw]">{content.body}</p>
            {content.secondaryCta ? (
              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5 md:mt-11">
                <PillLink href={content.cta.href}>{content.cta.label}</PillLink>
                <TextLink link={content.secondaryCta} />
              </div>
            ) : (
              <TextLink link={content.cta} className="mt-9 md:mt-11" />
            )}
          </div>
        </div>

        <div className="mt-16 flex items-end md:contents">
          <Figure
            photo={content.image}
            preload
            sizes="(min-width: 768px) 35vw, 72vw"
            className="aspect-[279/306] w-[71.6vw] md:col-start-1 md:row-start-1 md:aspect-[495/581] md:w-auto"
          />
          <Figure
            photo={content.sideImage}
            sizes="(min-width: 768px) 7vw, 15vw"
            className="ml-auto h-[51.5vw] w-[14.3vw] md:ml-0 md:col-start-4 md:row-start-1 md:mt-[13.8vw] md:h-auto md:w-auto md:self-stretch"
          />
        </div>
      </div>
    </section>
  );
}
