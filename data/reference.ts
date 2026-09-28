/**
 * Reference clone content — copy transcribed from the reference homepage so the
 * clone can be compared against screenshots. Imagery is neutral placeholder
 * artwork (the reference photos are not reused). Route is noindex.
 */
import type { SiteContent } from "./types";

import hero from "@/public/reference/hero.jpg";
import heroSide from "@/public/reference/hero-side.jpg";
import intro from "@/public/reference/intro.jpg";
import who1 from "@/public/reference/who-1.jpg";
import who2 from "@/public/reference/who-2.jpg";
import who3 from "@/public/reference/who-3.jpg";
import approach from "@/public/reference/approach.jpg";
import specialties from "@/public/reference/specialties.jpg";
import schedule from "@/public/reference/schedule.jpg";

const placeholder = (alt: string) => `Placeholder — ${alt}`;

export const referenceContent: SiteContent = {
  brand: {
    name: "Conejo Valley",
    tagline: "Family Counseling",
    homeLabel: "Conejo Valley Family Counseling — home",
  },
  nav: [
    { label: "About", href: "#how-we-work", children: [{ label: "About", href: "#how-we-work" }] },
    {
      label: "Our Team",
      href: "#top",
      children: [
        { label: "Jennifer Anderson, LMFT", href: "#top" },
        { label: "Candace Bletscher, AMFT", href: "#top" },
      ],
    },
    {
      label: "Specialties",
      href: "#specialties",
      children: [
        { label: "Dissociation", href: "#dissociation" },
        { label: "Trauma", href: "#trauma" },
        { label: "Special Needs Parenting", href: "#special-needs" },
      ],
    },
    {
      label: "Methods",
      href: "#specialties",
      children: [{ label: "EMDR", href: "#emdr" }],
    },
    { label: "FAQs", href: "#schedule" },
    { label: "Contact", href: "#schedule" },
  ],
  hero: {
    eyebrow: "Online & in-person counseling in Newbury Park & across CA",
    heading: "Rebuild your foundation on solid ground and finally begin to *thrive*.",
    body: "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: { label: "Book an appointment", href: "#schedule" },
    image: { src: hero, alt: placeholder("family therapy") },
    sideImage: { src: heroSide, alt: placeholder("child therapy") },
  },
  intro: {
    heading: "You’re holding onto hope that life can be better than it is right now.",
    lead: "At Conejo Valley Family Counseling we want to make that hope a reality.",
    body: [
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    ],
    aside: [
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    ],
    image: { src: intro, alt: placeholder("sandy beach with gentle ocean waves") },
  },
  audiences: {
    id: "who-we-help",
    heading: "Who we *help*",
    items: [
      {
        title: "Adults",
        body: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: { src: who1, alt: placeholder("two people sitting on a log at the beach") },
      },
      {
        title: "Couples",
        body: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: { src: who2, alt: placeholder("a couple embracing on the beach") },
      },
      {
        title: "Children & Teens",
        body: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: { src: who3, alt: placeholder("a boy carrying a girl on a beach") },
      },
    ],
  },
  statement: {
    text: "You deserve a place where your story is heard, valued, and understood.",
    emphasis: "Nothing will be too heavy for us to carry together.",
  },
  areas: {
    heading: "Our areas of *expertise*",
    items: [
      "Dissociation",
      "Trauma",
      "Family conflict",
      "Special needs parenting",
      "Depression",
      "Marriage",
      "Anxiety",
      "Relationships",
      "Children",
      "Teens",
      "Intimacy & connection",
      "…and more.",
    ],
  },
  approach: {
    id: "how-we-work",
    eyebrow: "How we work",
    heading: "We’re here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    body: [
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
    ],
    aside: [
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    ],
    cta: { label: "Learn more about us", href: "#how-we-work" },
    image: { src: approach, alt: placeholder("a woman and a child dancing on a beach") },
  },
  specialties: {
    id: "specialties",
    statement: "Honoring where you’ve been *&* helping shape where you’re headed.",
    image: { src: specialties, alt: placeholder("family of four on a beach at sunset") },
    heading: "Our *specialties* include…",
    items: [
      {
        id: "trauma",
        title: "Trauma",
        body: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
        link: { label: "Learn more", href: "#trauma" },
      },
      {
        id: "emdr",
        title: "EMDR",
        body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        link: { label: "Learn more", href: "#emdr" },
      },
      {
        id: "dissociation",
        title: "Dissociation",
        body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        link: { label: "Learn more", href: "#dissociation" },
      },
      {
        id: "special-needs",
        title: "Special Needs Parenting",
        body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        link: { label: "Learn more", href: "#special-needs" },
      },
    ],
  },
  schedule: {
    id: "schedule",
    eyebrow: "Schedule an appointment",
    heading: "Find a therapist who is the right fit for *you*.",
    body: [
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
      "Click the button below to schedule an appointment.",
    ],
    cta: { label: "Book now", href: "#schedule" },
    image: { src: schedule, alt: placeholder("a person pointing at shells on the beach") },
  },
  footer: {
    blurb:
      "We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    columns: [
      {
        title: "Navigate",
        links: [
          { label: "Home", href: "#top" },
          { label: "About", href: "#how-we-work" },
          { label: "FAQs", href: "#schedule" },
          { label: "Contact", href: "#schedule" },
        ],
      },
      {
        title: "Our Team",
        lines: [
          "Jennifer Anderson",
          "Heather Williams-Baumgart",
          "Autumn Bodily",
          "Candace Bletscher",
          "Samantha Johnson",
          "Andrea Watkins",
          "Rosa Gomez",
          "Chad Flores",
        ],
      },
      {
        title: "Contact",
        lines: ["925 Broadbeck Dr", "Suites 200 and 225", "Newbury Park, CA 91320", "info@conejovalleycounseling.com", "805.242.3120"],
        note: "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
      },
    ],
    bottom: [
      { label: "Terms", href: "#top" },
      { label: "Privacy Policy", href: "#top" },
      { label: "Disclaimer", href: "#top" },
    ],
    bottomNote: "Website by Walker Strategy Co.",
  },
};
