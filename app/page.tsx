import { HomepageSections } from "@/components/page/HomepageSections";
import { OfficeSection } from "@/components/sections/OfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactForm } from "@/components/ui/ContactForm";
import { StructuredData } from "@/components/layout/StructuredData";
import { contactForm, faq, mayaContent, office } from "@/data/site";

/**
 * Dr. Maya Reynolds' homepage: the reference architecture (HomepageSections)
 * with her content and theme, plus the new Office section and an on-page FAQ.
 */
export default function Home() {
  return (
    <>
      <StructuredData />
      <HomepageSections
        content={mayaContent}
        additions={
          <>
            <OfficeSection content={office} />
            <FaqSection content={faq} />
          </>
        }
        scheduleAside={<ContactForm sessionOptions={contactForm.sessionOptions} note={contactForm.note} />}
      />
    </>
  );
}
