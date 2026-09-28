/**
 * Dr. Maya Reynolds, PsyD — every line of homepage copy.
 *
 * Source of truth: her profile. No credentials, modalities, populations, fees,
 * insurance, phone/email, years of experience, testimonials or outcomes are
 * added beyond what the profile states.
 *
 * Content is shaped to the reference homepage's architecture (data/types.ts →
 * SiteContent), plus two additions: the Office section and an on-page FAQ.
 */
import type { FaqContent, OfficeContent, SiteContent } from "./types";

import portrait from "@/public/images/maya-reynolds-portrait.jpg";
import heroWindow from "@/public/images/hero-window-light.jpg";
import brickLight from "@/public/images/hero-brick-light.jpg";
import introBookshelf from "@/public/images/intro-bookshelf.jpg";
import whoOlive from "@/public/images/who-olive-curtains.jpg";
import whoSofaArt from "@/public/images/who-sofa-art.jpg";
import whoBeachPrint from "@/public/images/who-beach-print.jpg";
import windowLight from "@/public/images/specialties-window-light.jpg";
import officeLounge from "@/public/images/office-lounge.jpg";
import officeSession from "@/public/images/office-session-room.jpg";

export const practice = {
  name: "Dr. Maya Reynolds, PsyD",
  title: "Licensed Clinical Psychologist",
  address: { street: "123th Street 45 W", city: "Santa Monica", region: "CA", postalCode: "90401" },
} as const;

export const formattedAddress = `${practice.address.street}, ${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`;

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(formattedAddress)}`;

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
};

const services = [
  {
    id: "anxiety",
    title: "Anxiety & Panic",
    body: "Constant worry, overthinking, panic, or a body that never quite settles. Together we look at both the thoughts and the physical tension behind anxiety, and build practical tools you can use well beyond our sessions.",
    link: { label: "Get started", href: "#contact" },
  },
  {
    id: "trauma",
    title: "Trauma & EMDR",
    body: "For single-incident trauma and more complex, long-standing patterns rooted in childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety and stabilization, so you can feel more regulated in daily life, not just during sessions.",
    link: { label: "Get started", href: "#contact" },
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism",
    body: "For entrepreneurs, creatives, and professionals who’ve spent years pushing through stress. We explore the high internal pressure underneath, help you reconnect with yourself, and develop more sustainable ways of living and working.",
    link: { label: "Get started", href: "#contact" },
  },
];

export const mayaContent: SiteContent = {
  brand: {
    name: "Maya Reynolds",
    tagline: "PsyD · Clinical Psychologist",
    homeLabel: "Dr. Maya Reynolds, PsyD — home",
  },
  nav: [
    {
      label: "About",
      href: "#about",
      children: [
        { label: "Meet Dr. Reynolds", href: "#about" },
        { label: "Who I help", href: "#who-i-help" },
      ],
    },
    {
      label: "The Office",
      href: "#office",
      children: [
        { label: "The space", href: "#office" },
        { label: "Location & telehealth", href: "#office-details" },
      ],
    },
    {
      label: "Specialties",
      href: "#specialties",
      children: services.map((s) => ({ label: s.title, href: `#${s.id}` })),
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
  ],

  hero: {
    eyebrow: "In-person therapy in Santa Monica & telehealth across California",
    heading: "Slow down, reconnect with yourself, and finally feel *steady*.",
    body: "Therapy for adults navigating anxiety, panic, trauma, and burnout, with practical tools and room for depth.",
    cta: { label: "Request an appointment", href: "#contact" },
    secondaryCta: { label: "Meet Dr. Reynolds", href: "#about" },
    image: {
      src: heroWindow,
      alt: "Sunlight through tall sheer-curtained windows onto an armchair in Dr. Reynolds’ Santa Monica office",
      position: "40% center",
    },
    sideImage: { src: brickLight, alt: "Afternoon light on the exposed brick between the office windows", position: "center top" },
  },

  intro: {
    heading: "You look fine from the outside. Inside, it’s been a lot for a long time.",
    lead: "Many of the adults I work with are high-achieving, thoughtful, and self-aware.",
    body: [
      "They feel “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.",
    ],
    aside: [
      "Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.",
      "Therapy with me is a space to slow down and understand what’s really happening, emotionally and physically. The goal isn’t only symptom relief. It’s insight, resilience, and a stronger relationship with yourself over time.",
    ],
    image: {
      src: introBookshelf,
      alt: "Bookshelf in the therapy room with an hourglass, books, and small keepsakes",
    },
  },

  audiences: {
    id: "who-i-help",
    heading: "Who I *help*",
    items: [
      {
        title: "High-Achievers",
        body: "You’re capable and self-aware, yet stuck in overthinking, emotionally on edge, or exhausted from holding everything together.",
        image: { src: whoOlive, alt: "An olive tree between sheer white curtains in the therapy room" },
      },
      {
        title: "Adults Carrying the Past",
        body: "Experiences from childhood, relationships, or chronic stress still shape your confidence, your relationships, or your sense of safety.",
        image: { src: whoSofaArt, alt: "A grey sofa beneath soft abstract paintings" },
      },
      {
        title: "Entrepreneurs *&* Creatives",
        body: "Years of pushing through stress have left you disconnected from yourself, and you want more sustainable ways of living and working.",
        image: { src: whoBeachPrint, alt: "A sofa with textured pillows below a framed aerial photograph of the shoreline" },
      },
    ],
  },

  statement: {
    text: "Therapy can become a space to slow down, reconnect, and find a way of living that doesn’t require constant bracing.",
    emphasis: "Not just symptom relief, but a stronger relationship with yourself.",
  },

  areas: {
    heading: "Areas of *focus*",
    items: [
      "Anxiety",
      "Panic",
      "Trauma",
      "Complex trauma",
      "Burnout",
      "Perfectionism",
      "Overthinking",
      "Constant worry",
      "Chronic stress",
      "High internal pressure",
      "Feeling on edge",
      "Confidence",
    ],
  },

  approach: {
    id: "about",
    eyebrow: "About Dr. Reynolds",
    heading: "Warm, collaborative, and *grounded*.",
    lead: "I believe therapy works best when you feel respected, understood, and actively involved in the process.",
    body: [
      "I’m Dr. Maya Reynolds, a licensed clinical psychologist based in Santa Monica, California. My work often focuses on anxiety, panic, trauma, and burnout, and I understand the realities of living and working in a fast-paced environment.",
      "Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
    ],
    aside: [
      "I integrate evidence-based methods to help you understand both the emotional and physiological sides of what you’re experiencing, combining practical tools with depth-oriented work.",
    ],
    list: {
      heading: "Methods I integrate",
      items: [
        { id: "cbt", label: "Cognitive-behavioral therapy (CBT)", body: "Practical tools for the thought patterns that keep worry going." },
        { id: "emdr", label: "EMDR", body: "Used within carefully paced trauma work." },
        { id: "mindfulness", label: "Mindfulness-based practices", body: "Noticing what’s happening now, with more space and less judgment." },
        { id: "body-oriented", label: "Body-oriented techniques", body: "Working with tension, bracing, and feeling more regulated." },
      ],
    },
    cta: { label: "See the office", href: "#office" },
    image: { src: portrait, alt: "Portrait of Dr. Maya Reynolds, PsyD, smiling, in a white blazer", position: "center 20%" },
    imageCaption: "Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist",
  },

  specialties: {
    id: "specialties",
    statement: "Understanding where you’ve been *&* how you want to live now.",
    image: {
      src: windowLight,
      alt: "Tall windows with sheer grey curtains between exposed brick columns, lit by afternoon sun",
    },
    heading: "My *specialties* include…",
    items: services,
  },

  schedule: {
    id: "contact",
    eyebrow: "Request an appointment",
    heading: "Find out if we’re the right *fit*.",
    body: [
      "Reaching out can feel like a big step, especially if you’re used to handling everything on your own. If you’re looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit.",
      "Share a little about what’s bringing you in and how you’d like to meet, and I’ll follow up.",
    ],
  },

  footer: {
    blurb:
      "Getting started should feel simple. Meet in person at my Santa Monica office or by secure telehealth from anywhere in California, whichever fits your life.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "#top" },
          { label: "About", href: "#about" },
          { label: "The Office", href: "#office" },
          { label: "FAQs", href: "#faq" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Specialties",
        links: services.map((s) => ({ label: s.title, href: `#${s.id}` })),
      },
      {
        title: "Contact",
        lines: [practice.address.street, `${practice.address.city}, ${practice.address.region} ${practice.address.postalCode}`, "Telehealth across California"],
        note: "Serving Santa Monica and clients across California",
      },
    ],
    bottom: [],
    bottomNote: `© ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD | In crisis? Call or text 988 (Suicide & Crisis Lifeline) or call 911`,
  },
};

/* ------------------------------------------------------------------ */
/* NEW — Office (not on the reference site)                            */
/* ------------------------------------------------------------------ */

export const office: OfficeContent = {
  id: "office",
  eyebrow: "The office",
  heading: "A quiet, *light-filled* room in Santa Monica.",
  body: [
    "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.",
  ],
  quote: "Clients often share that the space itself helps them feel more at ease when they arrive.",
  images: [
    {
      src: officeSession,
      alt: "The therapy room: a soft grey sofa and leather armchair around a round glass table, with an olive tree, sheer curtains and a bookshelf",
      caption: "The therapy room",
    },
    {
      src: officeLounge,
      alt: "A second view of the office: a grey sofa, marble coffee table and swivel armchair beneath tall windows, sheer curtains and exposed brick",
      caption: "Natural light through tall windows",
    },
  ],
  details: [
    { label: "In person", value: formattedAddress, link: { label: "Get directions", href: directionsUrl, external: true } },
    { label: "Telehealth", value: "Secure video sessions for clients located in California" },
    { label: "The space", value: "Private · natural light · calm and uncluttered" },
  ],
};

/* ------------------------------------------------------------------ */
/* FAQ — the reference's "FAQs" nav item, answered from the profile    */
/* ------------------------------------------------------------------ */

export const faq: FaqContent = {
  id: "faq",
  eyebrow: "FAQs",
  heading: "Questions, *answered*",
  items: [
    {
      question: "Who do you work with?",
      answer:
        "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many are high-achieving, thoughtful, and self-aware, often entrepreneurs, creatives, or professionals who feel exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      question: "What does a session with you feel like?",
      answer:
        "My approach is warm, collaborative, and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth, and you’re actively involved in the process.",
    },
    {
      question: "Which therapy methods do you use?",
      answer:
        "I integrate evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, combining practical tools with depth-oriented work.",
    },
    {
      question: "How do you approach trauma therapy?",
      answer:
        "I work with both single-incident trauma and more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. The work is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in daily life, not just during sessions.",
    },
    {
      question: "Do you offer in-person sessions or telehealth?",
      answer:
        "Both. You can meet with me in person at my office in Santa Monica, or through secure telehealth sessions if you’re located in California.",
    },
    {
      question: "Where is your office?",
      answer: `My office is at ${formattedAddress}. It’s a quiet, private space with natural light and a comfortable, uncluttered environment.`,
    },
  ],
};

export const contactForm = {
  sessionOptions: ["In person — Santa Monica", "Telehealth — California", "Not sure yet"],
  note: "Please don’t include private clinical details in this form.",
};
