import type { ComponentPropsWithoutRef } from "react";

/** Reference secondary CTA: outlined ellipse ("CONTACT", "BOOK NOW"). */
export const pillClass =
  "caps inline-flex min-h-12 items-center justify-center rounded-[50%] border border-ink px-6 text-ink transition-colors duration-300 hover:bg-ink hover:text-canvas";

export function PillLink({ className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  return <a className={`${pillClass} ${className}`} {...props} />;
}
