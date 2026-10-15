import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";
import { PackCards } from "./index";

export const Route = createFileRoute("/packs")({
  head: () => ({
    meta: [
      { title: "Packs et tarifs IA pour TPE et PME | Cap-intelia" },
      { name: "description", content: "Conférence 800 € HT, conférence + atelier 1 500 € HT, formation 2 000 € HT, déploiement sur devis." },
      { property: "og:title", content: "Packs et tarifs IA | Cap-intelia" },
      { property: "og:description", content: "Des formats lisibles, par niveau de maturité." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <main>
      <PageHero eyebrow="Packs" title="Des packs lisibles, par niveau de maturité">
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Un format pour chaque étape. Préparation incluse, jusqu'à 30 personnes, hors frais de déplacement.</p>
        <Link to="/test" className="btn btn-accent mt-8">Quel pack pour moi ? Faire le test</Link>
      </PageHero>
      <section className="bg-primary py-20 text-primary-foreground"><div className="container-site"><PackCards /></div></section>
      <CtaBand />
    </main>
  ),
});
