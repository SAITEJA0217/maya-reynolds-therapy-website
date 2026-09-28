import { footer, practice, primaryCta } from "@/data/site";
import type { Link } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

function FooterColumn({ title, links }: { title: string; links: Link[] }) {
  return (
    <div>
      <h2 className="eyebrow text-clay-light">{title}</h2>
      <ul className="mt-5 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="text-sage-light transition-colors hover:text-linen">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Reference footer: intro blurb · Navigate · Contact · third link column · legal row. */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-olive-deep text-sage-light">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.3fr_1.1fr] lg:gap-10 lg:py-20">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-6 text-small">{footer.blurb}</p>
          <ButtonLink href={primaryCta.href} variant="light" className="mt-8">
            {primaryCta.label}
          </ButtonLink>
        </div>

        <FooterColumn title="Navigate" links={footer.navigate} />

        <div>
          <h2 className="eyebrow text-clay-light">Contact</h2>
          <address className="mt-5 not-italic leading-relaxed">
            {practice.address.street}
            <br />
            {practice.address.city}, {practice.address.region} {practice.address.postalCode}
          </address>
          <p className="mt-4 text-small">Telehealth for clients located in California</p>
          <p className="mt-4 font-serif text-small italic text-linen/80">
            Serving Santa Monica and clients across California
          </p>
        </div>

        <FooterColumn title="Specialties" links={footer.specialties} />
      </Container>

      <div className="border-t border-linen/10">
        <Container className="flex flex-col gap-3 py-7 text-[0.85rem] text-sage-light/90 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {practice.name} · {practice.title}
          </p>
          <p className="max-w-xl md:text-right">{footer.crisis}</p>
        </Container>
      </div>
    </footer>
  );
}
