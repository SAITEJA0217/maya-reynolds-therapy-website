import Image from "next/image";
import { hero, primaryCta } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RichText } from "@/components/ui/RichText";
import { ButtonLink } from "@/components/ui/ButtonLink";

/** Reference hero: eyebrow · H1 with italic accent · one line of support · CTA · overlapping image pair. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden">
      <Container className="grid items-center gap-14 pb-20 pt-12 md:pt-16 lg:grid-cols-[1.08fr_1fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div className="max-w-2xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-heading" className="mt-7 text-display text-ink">
            <RichText text={hero.heading} />
          </h1>
          <p className="mt-7 max-w-xl text-lead text-muted">{hero.body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="text">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 pl-10 sm:max-w-lg sm:pl-16 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px]">
            <Image
              src={hero.primaryImage.src}
              alt={hero.primaryImage.alt}
              fill
              preload
              placeholder="blur"
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 85vw"
              className="object-cover object-[35%_center]"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[38%] overflow-hidden border-[6px] border-linen sm:w-[34%]">
            <div className="relative aspect-[3/4]">
              <Image
                src={hero.secondaryImage.src}
                alt={hero.secondaryImage.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 14vw, 35vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
