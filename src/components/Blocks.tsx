import { Link } from "@tanstack/react-router";
import { PACKS, THEMES } from "@/lib/site";

export function ThemeGrid() {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {THEMES.map((t) => (
        <Link key={t.slug} to="/thematiques/$slug" params={{ slug: t.slug }} className="card-site group p-7 transition hover:-translate-y-1 hover:border-accent hover:shadow-soft">
          <div className="text-sm font-bold text-accent">{t.num}</div>
          <h3 className="mt-2 text-xl font-bold text-primary">{t.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">Voir les packs →</span>
        </Link>
      ))}
    </div>
  );
}

export function PackCards() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {PACKS.map((p, i) => {
        const hot = i === 3;
        return (
          <div key={p.name} className={`flex flex-col rounded-2xl border p-7 ${hot ? "border-accent bg-accent" : "border-primary-foreground/10 bg-primary-soft"}`}>
            <div className={`text-xs font-bold uppercase tracking-[0.14em] ${hot ? "text-primary-foreground" : "text-accent-soft"}`}>{p.pillar}</div>
            <h3 className="mt-3 text-2xl font-bold">{p.name}</h3>
            <p className="mt-3 flex-1 text-sm text-primary-foreground/80">{p.text}</p>
            <div className="mt-6 font-display text-3xl font-bold">{p.price ?? "Sur devis"} {p.price && <span className="text-sm font-normal opacity-70">HT</span>}</div>
          </div>
        );
      })}
    </div>
  );
}
