import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/SiteLayout";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos de Cap-intelia, agence IA pour PME" },
      { name: "description", content: "Cap-intelia accompagne les TPE et PME à Paris, Bordeaux, Lyon et Genève dans l'adoption de l'IA." },
      { property: "og:title", content: "À propos | Cap-intelia" },
      { property: "og:description", content: "L'IA au service de la croissance des TPE et PME." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <main>
      <PageHero eyebrow="À propos" title="L'IA au service de la croissance, de l'adoption et de la performance des TPE et PME.">
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Nous rendons l'IA concrète et accessible, sans jargon : des formats clairs, des prix lisibles et un accompagnement jusqu'à l'adoption réelle par vos équipes.</p>
      </PageHero>
      <section className="pb-24">
        <div className="container-site grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {["Paris", "Bordeaux", "Lyon", "Genève"].map((c) => (
            <div key={c} className="card-site p-7">
              <div className="eyebrow">Implantation</div>
              <div className="mt-2 font-display text-2xl font-bold text-primary">{c}</div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  ),
});
