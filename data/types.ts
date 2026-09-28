import type { StaticImageData } from "next/image";

/**
 * Copy where *words in asterisks* render with the accent treatment
 * (script in the reference, italic serif for Maya).
 */
export type RichText = string;

export interface Link {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem extends Link {
  children?: Link[];
}

export interface Photo {
  src: StaticImageData;
  alt: string;
  /** CSS object-position, e.g. "30% center" */
  position?: string;
  caption?: string;
}

export interface Brand {
  name: string;
  tagline: string;
  homeLabel: string;
}

/* ---------- sections (order follows the reference homepage) ---------- */

export interface HeroContent {
  eyebrow: string;
  heading: RichText;
  body: string;
  cta: Link;
  /** Maya only: quieter second route (the reference has a single CTA). */
  secondaryCta?: Link;
  image: Photo;
  sideImage: Photo;
}

export interface IntroContent {
  heading: RichText;
  lead: string;
  body: string[];
  aside: string[];
  image: Photo;
}

export interface AudienceItem {
  title: RichText;
  body: string;
  image: Photo;
}

export interface AudiencesContent {
  id: string;
  heading: RichText;
  items: AudienceItem[];
}

export interface StatementContent {
  text: string;
  emphasis: string;
}

export interface AreasContent {
  heading: RichText;
  items: string[];
}

export interface ApproachListItem {
  id: string;
  label: string;
  body: string;
}

export interface ApproachContent {
  id: string;
  eyebrow: string;
  heading: RichText;
  lead: string;
  body: string[];
  aside: string[];
  list?: { heading: string; items: ApproachListItem[] };
  cta: Link;
  image: Photo;
  imageCaption?: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  body: string;
  link: Link;
}

export interface SpecialtiesContent {
  id: string;
  statement: RichText;
  image: Photo;
  heading: RichText;
  items: SpecialtyItem[];
}

export interface ScheduleContent {
  id: string;
  eyebrow: string;
  heading: RichText;
  body: string[];
  cta?: Link;
  image?: Photo;
}

export interface FooterColumn {
  title: string;
  links?: Link[];
  lines?: string[];
  note?: string;
}

export interface FooterContent {
  blurb: string;
  columns: FooterColumn[];
  bottom: Link[];
  bottomNote?: string;
}

export interface SiteContent {
  brand: Brand;
  nav: NavItem[];
  hero: HeroContent;
  intro: IntroContent;
  audiences: AudiencesContent;
  statement: StatementContent;
  areas: AreasContent;
  approach: ApproachContent;
  specialties: SpecialtiesContent;
  schedule: ScheduleContent;
  footer: FooterContent;
}

/* ---------- Maya-only additions ---------- */

export interface OfficeDetail {
  label: string;
  value: string;
  link?: Link;
}

export interface OfficeContent {
  id: string;
  eyebrow: string;
  heading: RichText;
  body: string[];
  /** Set as an editorial pull quote beside the images. */
  quote?: string;
  /** [dominant, supporting] */
  images: [Photo, Photo];
  details: OfficeDetail[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FaqContent {
  id: string;
  eyebrow: string;
  heading: RichText;
  items: Faq[];
}
