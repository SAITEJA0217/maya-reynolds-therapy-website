import { Fragment } from "react";
import type { RichText as RichTextValue } from "@/data/types";

/**
 * Renders copy where *words in asterisks* become italic accents —
 * the editorial device the reference site uses in nearly every heading.
 */
export function RichText({ text }: { text: RichTextValue }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
