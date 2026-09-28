import type { StaticImageData } from "next/image";

/** Headings may wrap words in *asterisks* to render them as italic accents. */
export type RichText = string;

export interface Link {
  label: string;
  href: string;
}

export interface NavItem extends Link {
  children?: Link[];
}

export interface Photo {
  src: StaticImageData;
  alt: string;
}

export interface Audience {
  title: string;
  body: string;
  image: Photo;
}

export interface Method {
  id: string;
  name: string;
  body: string;
}

export interface Service {
  id: string;
  title: string;
  body: string;
  methods: string[];
}

export interface OfficeDetail {
  label: string;
  value: string;
  link?: Link;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Address {
  street: string;
  city: string;
  region: string;
  postalCode: string;
}
