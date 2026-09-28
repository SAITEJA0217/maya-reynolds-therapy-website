import { Fragment } from "react";
import type { RichText as RichTextValue } from "@/data/types";

/** Renders *asterisk-wrapped* words with the theme's accent treatment. */
export function RichText({ text }: { text: RichTextValue }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className="accent">
            {part.slice(1, -1)}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
