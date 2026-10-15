import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/ressources")({
  head: () => ({
    meta: [
      { title: "Ressources IA pour dirigeants de PME | Cap-intelia" },
      { name: "description", content: "Test de maturité IA, guides et outils pour avancer sur l'IA dans votre TPE ou PME." },
      { property: "og:title", content: "Ressources IA | Cap-intelia" },
      { property: "og:description", content: "Outils et guides pour démarrer avec l'IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <main>
      <PageHero eyebrow="Ressources" title="Des outils pour avancer à votre rythme" />
      <section className="pb-24">
        <div className="container-site grid gap-5 md:grid-cols-3">
          <Link to="/test" className="rounded-3xl bg-primary p-8 text-primary-foreground transition hover:-translate-y-1 md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-accent-soft">Outil gratuit</div>
            <h2 className="mt-3 text-3xl font-bold">Test de maturité IA</h2>
            <p className="mt-3 text-primary-foreground/75">5 questions, un score sur 100 et des recommandations adaptées.</p>
            <span className="btn btn-accent mt-6">Faire le test →</span>
          </Link>
          <div className="card-site p-8">
            <div className="eyebrow">Bientôt</div>
            <h2 className="mt-3 text-2xl font-bold text-primary">Guides & articles</h2>
            <p className="mt-3 text-muted-foreground">AI Act, RGPD, choix des outils : nos guides pratiques arrivent prochainement.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  ),
});
