/**
 * Every line of copy on the homepage lives here.
 *
 * Source of truth: Dr. Maya Reynolds' profile. Nothing below adds credentials,
 * modalities, populations, fees, insurance, contact details, or outcomes that
 * the profile does not state.
 */
import type {
  Address,
  Audience,
  Faq,
  Link,
  Method,
  NavItem,
  OfficeDetail,
  Photo,
  RichText,
  Service,
} from "./types";

import portrait from "@/public/images/maya-reynolds-portrait.jpg";
import heroWindow from "@/public/images/hero-window-light.jpg";
import oliveTree from "@/public/images/detail-olive-tree.jpg";
import bookshelf from "@/public/images/detail-bookshelf.jpg";
import curtainLight from "@/public/images/detail-curtain-light.jpg";
import armchair from "@/public/images/detail-armchair-wide.jpg";
import sofaArt from "@/public/images/detail-sofa-art.jpg";
import beachPrint from "@/public/images/detail-beach-print.jpg";
import officeLounge from "@/public/images/office-lounge.jpg";
import officeSession from "@/public/images/office-session-room.jpg";

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const practice = {
  name: "Dr. Maya Reynolds, PsyD",
  shortName: "Maya Reynolds",
  title: "Licensed Clinical Psychologist",
  city: "Santa Monica",
  state: "California",
  address: {
    street: "123th Street 45 W",
    city: "Santa Monica",
    region: "CA",
    postalCode: "90401",
  } satisfies Address,
} as const;

export const formattedAddress = `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`;

export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  formattedAddress,
)}`;

export const primaryCta: Link = {
  label: "Request an appointment",
  href: "#contact",
};

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Santa Monica Therapist for Anxiety, Trauma & Burnout | Dr. Maya Reynolds, PsyD",
  description:
    "Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA offering therapy for adults with anxiety, panic, trauma, and burnout. In-person sessions and secure telehealth across California.",
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica",
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR Santa Monica",
    "burnout therapy",
    "perfectionism therapy",
    "telehealth therapy California",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Navigation (mirrors the reference: About ▾ · Specialties ▾ ·        */
/* Methods ▾ · FAQs · Contact)                                         */
/* ------------------------------------------------------------------ */

export const navigation: NavItem[] = [
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Meet Dr. Reynolds", href: "#about" },
      { label: "Who I help", href: "#who-i-help" },
      { label: "The office", href: "#office" },
    ],
  },
  {
    label: "Specialties",
    href: "#specialties",
    children: [
      { label: "Anxiety & panic", href: "#anxiety" },
      { label: "Trauma", href: "#trauma" },
      { label: "Burnout & perfectionism", href: "#burnout" },
    ],
  },
  {
    label: "Methods",
    href: "#approach",
    children: [
      { label: "CBT", href: "#cbt" },
      { label: "EMDR", href: "#emdr" },
      { label: "Mindfulness-based practices", href: "#mindfulness" },
      { label: "Body-oriented techniques", href: "#body-oriented" },
    ],
  },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "In-person therapy in Santa Monica & telehealth across California",
  heading: "Feel more *steady* in the life you've worked so hard to build." as RichText,
  body: "Therapy for adults navigating anxiety, panic, trauma, and burnout — with practical tools and room for real depth.",
  secondaryCta: { label: "Meet Dr. Reynolds", href: "#about" } satisfies Link,
  primaryImage: {
    src: heroWindow,
    alt: "Sunlight falling through tall sheer-curtained windows onto a soft armchair in Dr. Reynolds' Santa Monica office",
  } satisfies Photo,
  secondaryImage: {
    src: oliveTree,
    alt: "An olive tree beside white linen curtains in the therapy room",
  } satisfies Photo,
};

/* ------------------------------------------------------------------ */
/* Intro — "You're holding onto hope…" in the reference                */
/* ------------------------------------------------------------------ */

export const intro = {
  heading: "From the outside, you're doing fine. Inside, it's been a lot for a long time." as RichText,
  lead: "Maybe you've simply gotten very good at pushing through.",
  body: "Many of the adults I work with are high-achieving, thoughtful, and self-aware. They show up and get things done — while quietly living with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.",
  image: {
    src: bookshelf,
    alt: "Bookshelf in the therapy room with an hourglass, books, and a small plant",
  } satisfies Photo,
  aside:
    "Therapy with me is a space to slow down and understand what's really happening — emotionally and physically. The goal isn't only symptom relief. It's insight, resilience, and a stronger relationship with yourself over time.",
};

/* ------------------------------------------------------------------ */
/* Who I help — 3-column grid ("Who we help" in the reference)         */
/* ------------------------------------------------------------------ */

export const whoIHelp = {
  eyebrow: "Therapy for adults",
  heading: "Who I *help*" as RichText,
  audiences: [
    {
      title: "High-achievers running on empty",
      body: "You're capable and self-aware, yet stuck in overthinking, emotionally on edge, or exhausted from holding everything together.",
      image: {
        src: armchair,
        alt: "A soft armchair with a knit throw in afternoon light",
      },
    },
    {
      title: "Adults carrying earlier experiences",
      body: "Experiences from childhood, relationships, or chronic stress still shape your confidence, your relationships, or your sense of safety.",
      image: {
        src: sofaArt,
        alt: "A grey sofa beneath three soft abstract paintings",
      },
    },
    {
      title: "Entrepreneurs, creatives & professionals",
      body: "Years of pushing through stress have left you disconnected from yourself, and you want more sustainable ways of living and working.",
      image: {
        src: beachPrint,
        alt: "A sofa with textured pillows below a framed aerial photograph of the shoreline",
      },
    },
  ] satisfies Audience[],
};

/* ------------------------------------------------------------------ */
/* Quote band                                                          */
/* ------------------------------------------------------------------ */

export const quoteBand = {
  quote:
    "Therapy can become a space to *slow down*, reconnect with yourself, and find a way of living that doesn't require constant bracing." as RichText,
  attribution: "Dr. Maya Reynolds, PsyD",
};

/* ------------------------------------------------------------------ */
/* Areas of focus — ruled list ("Our areas of expertise")              */
/* ------------------------------------------------------------------ */

export const focusAreas = {
  heading: "Areas of *focus*" as RichText,
  items: [
    "Anxiety",
    "Panic",
    "Trauma",
    "Complex trauma",
    "Burnout",
    "Perfectionism",
    "Overthinking",
    "Chronic stress",
    "High internal pressure",
    "Confidence",
    "Feeling on edge",
    "Constant worry",
  ],
  closing: "…and the quiet weight of carrying it all.",
};

/* ------------------------------------------------------------------ */
/* About / approach ("How we work" in the reference)                   */
/* ------------------------------------------------------------------ */

export const about = {
  eyebrow: "Meet Dr. Maya Reynolds, PsyD",
  heading: "Warm, collaborative, and *grounded* — practical tools with room for depth." as RichText,
  portrait: {
    src: portrait,
    alt: "Portrait of Dr. Maya Reynolds, PsyD, smiling, in a white blazer",
  } satisfies Photo,
  lead: "I believe therapy works best when you feel respected, understood, and actively involved in the process.",
  paragraphs: [
    "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. My work often focuses on anxiety, panic, trauma, and burnout.",
    "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I understand the realities of living and working in a fast-paced environment, and I integrate evidence-based methods to help you understand both the emotional and physiological sides of what you're experiencing.",
  ],
  methodsHeading: "Methods I integrate",
  methods: [
    {
      id: "cbt",
      name: "Cognitive-behavioral therapy (CBT)",
      body: "Practical, structured tools for working with the thoughts and patterns that keep worry going.",
    },
    {
      id: "emdr",
      name: "EMDR",
      body: "An evidence-based approach I use as part of careful, well-paced trauma work.",
    },
    {
      id: "mindfulness",
      name: "Mindfulness-based practices",
      body: "Ways of noticing what's happening now, with a little more space and a little less judgment.",
    },
    {
      id: "body-oriented",
      name: "Body-oriented techniques",
      body: "Attention to the physical side of stress — tension, bracing, and feeling more regulated.",
    },
  ] satisfies Method[],
  cta: { label: "Ask about working together", href: "#contact" } satisfies Link,
};

/* ------------------------------------------------------------------ */
/* Specialties — exactly three services                                */
/* ------------------------------------------------------------------ */

export const specialties = {
  heading: "Honoring what you've carried *&* how you want to live now." as RichText,
  subheading: "Specialties include…",
  services: [
    {
      id: "anxiety",
      title: "Anxiety & Panic",
      body: "Constant worry, overthinking, panic, or a body that never quite settles. We look at both the thoughts and the physical tension behind anxiety, and build practical tools you can use well beyond our sessions.",
      methods: ["CBT", "Mindfulness", "Body-oriented"],
    },
    {
      id: "trauma",
      title: "Trauma & EMDR",
      body: "For single-incident trauma and more complex, long-standing patterns rooted in childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety and stabilization — so you can feel more regulated in daily life, not just during sessions.",
      methods: ["EMDR", "Stabilization", "Body-oriented"],
    },
    {
      id: "burnout",
      title: "Burnout & Perfectionism",
      body: "For entrepreneurs, creatives, and professionals who've spent years pushing through. We explore the high internal pressure underneath, help you reconnect with yourself, and develop more sustainable ways of living and working.",
      methods: ["CBT", "Mindfulness", "Depth-oriented work"],
    },
  ] satisfies Service[],
};

/* ------------------------------------------------------------------ */
/* NEW — Our Office                                                    */
/* ------------------------------------------------------------------ */

export const office = {
  eyebrow: "The office · Santa Monica",
  heading: "A quiet, *light-filled* room to arrive, exhale, and begin." as RichText,
  body: [
    "My Santa Monica office is a quiet, private space designed to feel calm and grounding — natural light, comfortable seating, and an uncluttered room with nothing extra competing for your attention.",
    "Clients often share that the space itself helps them feel more at ease when they arrive.",
  ],
  images: [
    {
      src: officeLounge,
      alt: "Dr. Reynolds' office: a grey sofa, marble coffee table, and swivel armchair beneath tall windows with sheer curtains and exposed brick",
    },
    {
      src: officeSession,
      alt: "The therapy room: a soft grey sofa and leather armchair around a round glass table, with an olive tree and a bookshelf",
    },
    {
      src: curtainLight,
      alt: "Afternoon light through sheer curtains against the office's exposed brick wall",
    },
  ] satisfies Photo[],
  qualities: ["Private", "Natural light", "Calm & uncluttered"],
  details: [
    {
      label: "In person",
      value: formattedAddress,
      link: { label: "Get directions", href: directionsUrl },
    },
    {
      label: "Telehealth",
      value: "Secure video sessions for clients located anywhere in California",
    },
  ] satisfies OfficeDetail[],
};

/* ------------------------------------------------------------------ */
/* FAQ — answered only with information in the profile                 */
/* ------------------------------------------------------------------ */

export const faq = {
  eyebrow: "FAQs",
  heading: "Questions, *answered*" as RichText,
  items: [
    {
      question: "Who do you work with?",
      answer:
        "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware — often entrepreneurs, creatives, or professionals who feel exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      question: "What does a session with you feel like?",
      answer:
        "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. You're an active part of the process, and the aim is to understand both the emotional and physiological sides of what you're experiencing.",
    },
    {
      question: "Which therapy methods do you use?",
      answer:
        "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, combining practical tools with depth-oriented work.",
    },
    {
      question: "How do you approach trauma therapy?",
      answer:
        "I work with both single-incident trauma and more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in daily life — not just during sessions.",
    },
    {
      question: "Do you offer in-person sessions or telehealth?",
      answer:
        "Both. You can meet with me in person at my office in Santa Monica, or through secure telehealth sessions if you're located in California.",
    },
    {
      question: "Where is your office?",
      answer: `My office is at ${formattedAddress}. It's a quiet, private space with natural light and a comfortable, uncluttered environment.`,
    },
    {
      question: "How do I know if we're a good fit?",
      answer:
        "If you're looking for a therapist who combines practical tools with depth-oriented work — and who understands the realities of living and working in a fast-paced environment — I may be a good fit. Requesting an appointment is a simple way to find out.",
    },
  ] satisfies Faq[],
};

/* ------------------------------------------------------------------ */
/* Contact / schedule ("Schedule an appointment" in the reference)     */
/* ------------------------------------------------------------------ */

export const contact = {
  eyebrow: "Request an appointment",
  heading: "When you're ready, let's see if we're the right *fit*." as RichText,
  body: "Reaching out can feel like a big step — especially if you're used to handling everything on your own. Share a little about what's bringing you in and how you'd like to meet, and I'll follow up.",
  note: "Please don't include private clinical details in this form.",
  image: {
    src: portrait,
    alt: "Dr. Maya Reynolds, PsyD",
  } satisfies Photo,
  sessionOptions: [
    "In person — Santa Monica",
    "Telehealth — California",
    "Not sure yet",
  ],
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  blurb:
    "Getting started should feel simple. Meet in person at my Santa Monica office or by secure telehealth from anywhere in California — whichever fits your life.",
  navigate: [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "The office", href: "#office" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ] satisfies Link[],
  specialties: specialties.services.map(
    (s): Link => ({ label: s.title, href: `#${s.id}` }),
  ),
  crisis:
    "If you are in crisis or need immediate support, call or text 988 (Suicide & Crisis Lifeline) or call 911.",
};
