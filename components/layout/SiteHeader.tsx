import type { Brand, NavItem } from "@/data/types";
import { Wordmark } from "@/components/ui/Wordmark";
import { Navigation } from "./Navigation";

type SiteHeaderProps = {
  brand: Brand;
  nav: NavItem[];
};

/** Reference header: wordmark at 6.1vw, nav ending at 95vw, no border, page background. */
export function SiteHeader({ brand, nav }: SiteHeaderProps) {
  return (
    <header className="relative z-50 bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-60 focus:bg-ink focus:px-5 focus:py-3 focus:text-canvas"
      >
        Skip to content
      </a>
      <div className="flex h-26 items-center justify-between pl-[6vw] pr-[5vw] md:h-36 md:pl-[6.1vw] lg:h-29">
        <a href="#top" className="relative z-50" aria-label={brand.homeLabel}>
          <Wordmark brand={brand} />
        </a>
        <Navigation items={nav} />
      </div>
    </header>
  );
}
