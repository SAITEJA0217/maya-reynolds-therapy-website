import { HomepageSections } from "@/components/page/HomepageSections";
import { referenceContent } from "@/data/reference";

/** Temporary structural clone of the reference homepage (Part 1). Not indexed. */
export default function ReferencePage() {
  return <HomepageSections content={referenceContent} />;
}
