import type { Brand, FooterContent } from "@/data/types";
import { Wordmark } from "@/components/ui/Wordmark";

type SiteFooterProps = {
  brand: Brand;
  footer: FooterContent;
};

/**
 * Reference footer: wordmark + blurb (left), three tracked-caps columns at
 * 42.8 / 57.9 / 76.8vw, then a full-width accent bar with legal links.
 */
export function SiteFooter({ brand, footer }: SiteFooterProps) {
  return (
    <footer className="bg-surface">
      <div className="grid gap-12 px-[6vw] pb-16 pt-16 md:grid-cols-3 md:gap-x-8 md:pb-[5.6vw] md:pt-[4.5vw] md:pl-[5vw] md:pr-[4vw] lg:grid-cols-[37.8vw_15.1vw_18.9vw_minmax(0,1fr)] lg:gap-0">
        <div className="max-w-sm md:col-span-3 md:max-w-md lg:col-span-1 lg:max-w-none lg:pr-[6vw]">
          <a href="#top" aria-label={brand.homeLabel} className="inline-block">
            <Wordmark brand={brand} />
          </a>
          <p className="mt-6 md:ml-[1.7vw]">{footer.blurb}</p>
        </div>
        {footer.columns.map((column) => (
          <div key={column.title} className="md:pr-6">
            <h2 className="eyebrow font-body">{column.title}</h2>
            {column.links && (
              <ul className="mt-4 space-y-0.5 text-[0.9375rem]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {column.lines && (
              <address className="mt-4 text-[0.9375rem] not-italic [overflow-wrap:anywhere]">
                {column.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            )}
            {column.note && <p className="mt-4 text-[0.9375rem] italic">{column.note}</p>}
          </div>
        ))}
      </div>
      <div className="bg-bar px-[6vw] py-3 text-[0.9375rem] text-on-bar md:pl-[6.7vw]">
        <p>
          {footer.bottom.map((link, i) => (
            <span key={link.label}>
              {i > 0 && " | "}
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </span>
          ))}
          {footer.bottomNote && (
            <>
              {footer.bottom.length > 0 && " | "}
              {footer.bottomNote}
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
