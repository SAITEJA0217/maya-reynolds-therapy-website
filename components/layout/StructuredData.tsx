import { faq, mayaContent, practice, seo } from "@/data/site";

/** schema.org data built strictly from profile facts (no phone, hours, or pricing). */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Psychologist",
        name: practice.name,
        description: seo.description,
        image: "/images/maya-reynolds-portrait.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: practice.address.street,
          addressLocality: practice.address.city,
          addressRegion: practice.address.region,
          postalCode: practice.address.postalCode,
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Santa Monica" },
          { "@type": "State", name: "California" },
        ],
        knowsAbout: mayaContent.specialties.items.map((item) => item.title),
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
