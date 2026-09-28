import type { ComponentPropsWithoutRef } from "react";

/**
 * Themed button (see `.btn` in globals.css): a solid olive button for Maya,
 * the outlined ellipse ("CONTACT", "BOOK NOW") on the reference clone.
 */
export const pillClass = "btn";

export function PillLink({ className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  return <a className={`${pillClass} ${className}`} {...props} />;
}
