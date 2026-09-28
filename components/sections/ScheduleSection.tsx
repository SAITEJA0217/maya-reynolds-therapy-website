import type { ReactNode } from "react";
import type { ScheduleContent } from "@/data/types";
import { Figure } from "@/components/ui/Figure";
import { RichText } from "@/components/ui/RichText";
import { PillLink } from "@/components/ui/PillLink";

/**
 * Reference "Schedule an appointment" (1440, canvas, 836px): content indented to
 * 20.1vw — eyebrow, H2, body ≈36vw wide, "BOOK NOW" ellipse. The right-hand
 * column (image, position inferred) accepts an optional `aside` instead.
 */
export function ScheduleSection({ content, aside }: { content: ScheduleContent; aside?: ReactNode }) {
  return (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-heading`}
      className="bg-canvas px-[6vw] pb-24 pt-20 md:grid md:grid-cols-[36vw_6vw_1fr] md:pb-[10vw] md:pl-[20.1vw] md:pr-[8.8vw] md:pt-[7.5vw]"
    >
      <div>
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 id={`${content.id}-heading`} className="h2 mt-10 md:mt-[6.7vw] md:max-w-[38vw]">
          <RichText text={content.heading} />
        </h2>
        <div className="mt-7 space-y-3">
          {content.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        {content.cta && (
          <PillLink href={content.cta.href} className="mt-5">
            {content.cta.label}
          </PillLink>
        )}
      </div>
      <div className="mt-14 md:col-start-3 md:mt-0 md:self-center">
        {aside ??
          (content.image && (
            <Figure photo={content.image} sizes="(min-width: 768px) 30vw, 88vw" className="aspect-[4/5]" />
          ))}
      </div>
    </section>
  );
}
