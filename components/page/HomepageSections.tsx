import type { ReactNode } from "react";
import type { SiteContent } from "@/data/types";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { AudiencesSection } from "@/components/sections/AudiencesSection";
import { StatementBand } from "@/components/sections/StatementBand";
import { AreasSection } from "@/components/sections/AreasSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";

type HomepageSectionsProps = {
  content: SiteContent;
  /** Sections inserted after Specialties (Maya: Office + FAQ). */
  additions?: ReactNode;
  /** Replaces the Schedule section's right-hand image (Maya: request form). */
  scheduleAside?: ReactNode;
};

/**
 * The reference homepage's information architecture, in order.
 * Both /reference (clone) and / (Dr. Reynolds) render through this component,
 * so the structural composition is shared by construction.
 */
export function HomepageSections({ content, additions, scheduleAside }: HomepageSectionsProps) {
  return (
    <>
      <div id="top" />
      <SiteHeader brand={content.brand} nav={content.nav} />
      <main id="main">
        <HeroSection content={content.hero} />
        <IntroSection content={content.intro} />
        <AudiencesSection content={content.audiences} />
        <StatementBand content={content.statement} />
        <AreasSection content={content.areas} />
        <ApproachSection content={content.approach} />
        <SpecialtiesSection content={content.specialties} />
        {additions}
        <ScheduleSection content={content.schedule} aside={scheduleAside} />
      </main>
      <SiteFooter brand={content.brand} footer={content.footer} />
    </>
  );
}
