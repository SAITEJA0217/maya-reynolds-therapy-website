import type { RichText as RichTextValue } from "@/data/types";
import { Eyebrow } from "./Eyebrow";
import { RichText } from "./RichText";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  heading: RichTextValue;
  level?: "h2" | "h3";
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  heading,
  level = "h2",
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const Heading = level;
  const alignment = align === "center" ? "text-center items-center" : "items-start";
  const size = level === "h2" ? "text-h2" : "text-h3";
  const color = tone === "light" ? "text-linen" : "text-ink";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "accent"}>{eyebrow}</Eyebrow>}
      <Heading id={id} className={`${size} ${color}`}>
        <RichText text={heading} />
      </Heading>
    </div>
  );
}
