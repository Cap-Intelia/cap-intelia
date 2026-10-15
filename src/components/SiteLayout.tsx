import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { CONTACT, GROUPS, PILLARS, THEMES } from "@/lib/site";

const NAV = [
  { to: "/methode", label: "Notre méthode" },
  { to: "/thematiques", label: "Thématiques" },
  { to: "/packs", label: "Packs" },
  { to: "/ressources", label: "Ressources" },
  { to: "/a-propos", label: "À propos" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`font-display text-2xl font-bold tracking-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
      Cap-<span className="text-accent">intelia</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-[15px] text-foreground hover:text-accent" activeProps={{ className: "text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/test" className="btn btn-outline">Tester ma maturité IA</Link>
          <a href={CONTACT.rdv} className="btn btn-primary">Prendre rendez-vous</a>
        </div>
        <button className="lg:hidden md:hidden text-primary" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="container-site flex flex-col gap-4 pb-6 md:hidden">
          {NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>{n.label}</Link>)}
          <Link to="/test" className="btn btn-accent">Tester ma maturité IA</Link>
          <a href={CONTACT.rdv} className="btn btn-primary">Prendre rendez-vous</a>
        </div>
      )}
    </header>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Parlons de votre premier cas d'usage</h2>
          <p className="mt-4 text-primary-foreground/75">Un échange d'une heure suffit pour situer votre maturité et choisir la thématique et le format d'entrée adaptés à votre structure.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={CONTACT.rdv} className="btn btn-accent">Prendre rendez-vous</a>
          <Link to="/test" className="btn btn-ghost-light">Faire le test</Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-deep py-16 text-primary-foreground">
      <div className="container-site grid gap-10 md:grid-cols-[1.3fr_2fr_0.8fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">L'IA au service de la croissance, de l'adoption et de la performance des TPE et PME.</p>
          <a href={CONTACT.rdv} className="btn btn-accent mt-6">Prendre rendez-vous</a>
          <div className="mt-6 space-y-1 text-sm text-primary-foreground/80">
            <a href={CONTACT.phoneHref} className="block">{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`} className="block">{CONTACT.email}</a>
          </div>
        </div>
        <div>
          <div className="mb-4 font-display font-semibold">Nos thématiques</div>
          <div className="grid gap-6 sm:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-soft">{g}</div>
                <ul className="space-y-1.5 text-sm text-primary-foreground/75">
                  {THEMES.filter((t) => t.group === g).map((t) => (
                    <li key={t.slug}><Link to="/thematiques/$slug" params={{ slug: t.slug }} className="hover:text-primary-foreground">{t.title}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 font-display font-semibold">Notre méthode</div>
          <ul className="space-y-1.5 text-sm text-primary-foreground/75">
            {PILLARS.map((p) => <li key={p.name}><Link to="/methode" className="hover:text-primary-foreground">{p.name}</Link></li>)}
            <li><Link to="/test" className="text-accent-soft">Test de maturité IA</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-site mt-12 flex flex-col justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 md:flex-row">
        <span>© 2026 Cap-intelia · Paris · Bordeaux · Lyon · Genève</span>
        <span>Mentions légales · Politique de confidentialité · CGV</span>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-background py-20">
      <div className="container-site">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] text-primary md:text-6xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}
