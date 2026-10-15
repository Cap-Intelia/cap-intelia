import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";
import { ThemeGrid } from "./index";

export const Route = createFileRoute("/thematiques/")({
  head: () => ({
    meta: [
      { title: "12 thématiques IA pour TPE et PME | Cap-intelia" },
      { name: "description", content: "SEO/GEO, réseaux sociaux, prospection, agents IA, RH, juridique, comptabilité : 12 thématiques IA déclinées en packs." },
      { property: "og:title", content: "12 thématiques IA pour TPE et PME | Cap-intelia" },
      { property: "og:description", content: "Choisissez votre point d'entrée parmi 12 thématiques concrètes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <main>
      <PageHero eyebrow="Thématiques" title="12 thématiques pour votre quotidien d'entreprise">
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Chaque thématique se décline en pack sur les quatre piliers. Pas sûr de par où commencer ?</p>
        <Link to="/test" className="btn btn-accent mt-8">Faire le test de maturité</Link>
      </PageHero>
      <section className="pb-24"><div className="container-site"><ThemeGrid /></div></section>
      <CtaBand />
    </main>
  ),
});
