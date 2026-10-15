import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/SiteLayout";
import { ThemeGrid, PackCards } from "@/components/Blocks";
import { CONTACT, PILLARS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cap-intelia — L'IA au service de la croissance des TPE et PME" },
      { name: "description", content: "Conférences, conseil, formations et agents IA pour les TPE et PME françaises. 12 thématiques, des packs clairs et un test de maturité IA gratuit." },
      { property: "og:title", content: "Cap-intelia — L'IA au service de votre croissance" },
      { property: "og:description", content: "Inspirer, conseiller, former, déployer : l'IA sans jargon pour les TPE et PME." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="eyebrow">Pour les TPE et PME françaises</p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.02] text-primary md:text-7xl">L'IA au service de votre croissance, sans jargon.</h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Dix usages concrets, du référencement à la facturation. Nous inspirons, conseillons, formons et déployons avec vous : de la première conférence au premier workflow en production.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={CONTACT.rdv} className="btn btn-accent">Prendre rendez-vous</a>
              <Link to="/thematiques" className="btn btn-outline">Explorer les 12 thématiques</Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-primary-foreground shadow-soft md:p-14 animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-soft">Votre point de départ</p>
            <h2 className="mt-4 text-4xl font-bold">Testez votre maturité IA</h2>
            <p className="mt-4 text-primary-foreground/75">Situez votre entreprise en 5 questions, obtenez un score sur 100 et découvrez par quelle thématique commencer.</p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-primary-foreground/70">
              {["5 questions", "2 minutes", "Score sur 100", "Gratuit"].map((t) => (
                <span key={t} className="rounded-full border border-primary-foreground/20 px-3 py-1">{t}</span>
              ))}
            </div>
            <Link to="/test" className="btn btn-accent mt-8">Faire le test →</Link>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-primary md:text-5xl">12 thématiques pour votre quotidien d'entreprise</h2>
          <p className="mt-4 text-muted-foreground">Chaque thématique se décline en pack sur les quatre piliers : choisissez votre point d'entrée.</p>
          <ThemeGrid />
        </div>
      </section>

      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container-site">
          <h2 className="text-3xl font-bold md:text-5xl">Des packs lisibles, par niveau de maturité</h2>
          <p className="mt-4 text-primary-foreground/70">Un format pour chaque étape. Préparation incluse, jusqu'à 30 personnes, hors frais de déplacement.</p>
          <PackCards />
        </div>
      </section>

      <section className="py-24">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-primary md:text-5xl">4 piliers pour un accompagnement sur mesure</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.name} className="card-site p-7">
                <div className="font-display text-4xl font-bold text-accent">{p.num}</div>
                <h3 className="mt-4 text-2xl font-bold text-primary">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}

