import { navigation } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-linen/95">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-olive focus:px-5 focus:py-3 focus:text-paper"
      >
        Skip to content
      </a>
      <Container className="flex h-18 items-center justify-between gap-6 lg:h-22">
        <a href="#top" className="relative z-50" aria-label="Dr. Maya Reynolds, PsyD — home">
          <Logo />
        </a>
        <Navigation items={navigation} />
      </Container>
    </header>
  );
}
