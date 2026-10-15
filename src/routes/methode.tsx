import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";
import { PILLARS, PACKS } from "@/lib/site";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "Notre méthode : inspirer, conseiller, former, déployer | Cap-intelia" },
      { name: "description", content: "Quatre piliers et un accompagnement continu, de la première conférence au premier workflow IA en production." },
      { property: "og:title", content: "Notre méthode | Cap-intelia" },
      { property: "og:description", content: "Inspirer, conseiller, former, déployer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <main>
      <PageHero eyebrow="Notre méthode" title="4 piliers pour un accompagnement sur mesure">
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Un continuum, de la première conférence au premier workflow en production. Votre niveau de maturité détermine votre point d'entrée.</p>
      </PageHero>
      <section className="pb-24">
        <div className="container-site space-y-5">
          {PILLARS.map((p, i) => (
            <div key={p.name} className="card-site grid items-center gap-6 p-8 md:grid-cols-[120px_1fr_auto]">
              <div className="font-display text-6xl font-bold text-accent">{p.num}</div>
              <div>
                <h2 className="text-3xl font-bold text-primary">{p.name}</h2>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">{PACKS[i]!.name}</div>
                <div className="font-display text-2xl font-bold text-primary">{PACKS[i]!.price ? `${PACKS[i]!.price} HT` : "Sur devis"}</div>
              </div>
            </div>
          ))}
          <div className="pt-6 text-center"><Link to="/test" className="btn btn-accent">Trouver mon point d'entrée</Link></div>
        </div>
      </section>
      <CtaBand />
    </main>
  ),
});
