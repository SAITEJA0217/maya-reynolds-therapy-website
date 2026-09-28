import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { WhoIHelp } from "@/components/sections/WhoIHelp";
import { QuoteBand } from "@/components/sections/QuoteBand";
import { FocusAreas } from "@/components/sections/FocusAreas";
import { About } from "@/components/sections/About";
import { Specialties } from "@/components/sections/Specialties";
import { Office } from "@/components/sections/Office";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { StructuredData } from "@/components/layout/StructuredData";

/**
 * Section order follows the reference homepage, with two additions:
 * Office (new, Part 3) and an on-page FAQ (the reference's "FAQs" nav target).
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <WhoIHelp />
        <QuoteBand />
        <FocusAreas />
        <About />
        <Specialties />
        <Office />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
