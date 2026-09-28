import type { AreasContent } from "@/data/types";
import { RichText } from "@/components/ui/RichText";

/**
 * Reference "Our areas of expertise" (1440): heading at 8.8vw; two ruled
 * columns of tracked caps at 35.3→60.9vw and 65.5→91.3vw, 77px row pitch,
 * no rule beneath the final row of each column.
 */
export function AreasSection({ content }: { content: AreasContent }) {
  const half = Math.ceil(content.items.length / 2);
  const columns = [content.items.slice(0, half), content.items.slice(half)];

  return (
    <section aria-labelledby="areas-heading" className="bg-surface px-[6vw] pb-24 pt-20 md:grid md:grid-cols-[26.5vw_25.6vw_4.6vw_25.8vw] md:px-[8.8vw] md:pb-[13.9vw] md:pt-[12.5vw]">
      <h2 id="areas-heading" className="text-[calc(var(--fs-h2)*0.84)] leading-[1.25] md:max-w-[20vw]">
        <RichText text={content.heading} />
      </h2>
      {columns.map((items, c) => (
        <ul
          key={c}
          className={`${c === 0 ? "mt-10 md:col-start-2 md:mt-0" : "md:col-start-4"} md:row-start-1`}
        >
          {items.map((item, i) => (
            <li
              key={item}
              className={`caps border-line py-5 text-[0.875rem] font-medium tracking-[0.15em] text-ink md:pb-[max(0.75rem,1.5vw)] md:pt-[max(1rem,2.1vw)] md:first:pt-0 ${
                i < items.length - 1 ? "border-b" : c === 0 ? "border-b md:border-b-0" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
}
