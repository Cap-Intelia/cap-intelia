import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand } from "@/components/SiteLayout";
import { CONTACT, GENERIC_FAQ, PACKS, SEO_FAQ, THEMES, themePacks } from "@/lib/site";

export const Route = createFileRoute("/thematiques/$slug")({
  loader: ({ params }) => {
    const theme = THEMES.find((t) => t.slug === params.slug);
    if (!theme) throw notFound();
    return { theme };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.theme;
    const title = t ? `${t.title} : packs IA pour TPE et PME | Cap-intelia` : "Thématique | Cap-intelia";
    return {
      meta: [
        { title },
        { name: "description", content: t?.intro ?? "Thématique Cap-intelia" },
        { property: "og:title", content: title },
        { property: "og:description", content: t?.desc ?? "" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ThemePage,
});

function ThemePage() {
  const { theme: t } = Route.useLoaderData();
  const packs = themePacks(t);
  const faq = t.slug === "seo-geo" ? SEO_FAQ : GENERIC_FAQ;
  return (
    <main>
      <section className="py-16 md:py-20">
        <div className="container-site">
          <p className="text-sm text-muted-foreground"><Link to="/thematiques" className="hover:text-accent">Thématiques</Link> / <span className="font-semibold text-foreground">{t.title}</span></p>
          <p className="eyebrow mt-5">Thématique {t.num} · {t.kicker}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] text-primary md:text-6xl">{t.headline}</h1>
          <p className="mt-6 max-w-4xl text-lg text-muted-foreground">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#packs" className="btn btn-accent">Voir les 4 packs</a>
            <a href={CONTACT.rdv} className="btn btn-outline">Prendre rendez-vous</a>
          </div>
        </div>
      </section>

      {t.slug === "seo-geo" && (
        <section className="bg-card py-20">
          <div className="container-site">
            <h2 className="text-3xl font-bold text-primary md:text-4xl">SEO et GEO : quelle différence ?</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                ["SEO", "Search Engine Optimization", "Optimiser votre site pour apparaître dans les résultats des moteurs de recherche : contenus, structure technique, fiche Google, avis locaux."],
                ["GEO", "Generative Engine Optimization", "Faire en sorte que votre entreprise soit comprise, citée et recommandée dans les réponses des assistants IA et des résumés générés."],
              ].map(([k, n, d]) => (
                <div key={k} className="rounded-2xl border bg-background p-8">
                  <div className="eyebrow">{k}</div>
                  <h3 className="mt-2 text-xl font-bold text-primary">{n}</h3>
                  <p className="mt-3 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground">L'IA aide aussi à produire plus vite : audit de site, idées de contenus, rédaction, suivi des positions. C'est ce que vos équipes apprendront à faire.</p>
          </div>
        </section>
      )}

      <section id="packs" className="py-20">
        <div className="container-site">
          <h2 className="text-3xl font-bold text-primary md:text-5xl">Le pack {t.title}, en 4 étapes</h2>
          <p className="mt-4 text-muted-foreground">Commencez où vous en êtes. Chaque pack peut se combiner avec le suivant.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {packs.map((p, i) => {
              const base = PACKS[i]!;
              const dark = i === 3;
              return (
                <div key={p.name} className={`flex flex-col rounded-2xl border p-7 ${dark ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>
                  <div className={`text-xs font-bold uppercase tracking-[0.12em] ${dark ? "text-accent-soft" : "text-accent"}`}>{i + 1} · {base.pillar}</div>
                  <h3 className={`mt-3 text-2xl font-bold ${dark ? "" : "text-primary"}`}>{p.name}</h3>
                  <p className={`mt-1 text-sm ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{base.duration}</p>
                  <ul className={`mt-5 flex-1 list-disc space-y-1.5 pl-5 text-sm ${dark ? "text-primary-foreground/85" : "text-foreground"}`}>
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="mt-6 font-display text-3xl font-bold">{base.price ?? "Sur devis"} {base.price && <span className="text-sm font-normal opacity-60">HT</span>}</div>
                  <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`${t.title} - ${p.name}`)}`} className={`btn mt-5 ${dark ? "btn-accent" : "btn-primary"}`}>{dark ? "Demander un devis" : "Choisir ce pack"}</a>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Préparation incluse · Hors frais de déplacement · Tarifs HT</p>
        </div>
      </section>

      <section className="bg-card py-20">
        <div className="container-site max-w-4xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Questions fréquentes</h2>
          <div className="mt-8 divide-y border-y">
            {faq.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i < 2} />)}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="py-5">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 text-left font-display text-lg font-semibold text-primary">
        {q}<span className="text-2xl text-accent">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-muted-foreground">{a}</p>}
    </div>
  );
}
