import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { QUESTIONS, computeScore, levelFor, LEVELS } from "@/lib/maturity";

export const Route = createFileRoute("/test")({
  head: () => ({
    meta: [
      { title: "Simulateur de maturité IA pour PME | Cap Intelia" },
      { name: "description", content: "Évaluez la maturité IA de votre PME en 5 questions et obtenez un score sur 100 avec des recommandations Cap Intelia." },
      { property: "og:title", content: "Simulateur de maturité IA pour PME | Cap Intelia" },
      { property: "og:description", content: "5 questions, un score sur 100 et un plan d'action IA adapté à votre entreprise." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Simulator,
});

function Simulator() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);

  const choose = (points: number) => {
    const next = [...answers.slice(0, step), points];
    setAnswers(next);
    setStep(step + 1);
  };
  const restart = () => { setAnswers([]); setStep(-1); };

  return (
    <main className="px-5 py-14 md:py-20">
      <div className="mx-auto max-w-3xl">

        {step === -1 && <Intro onStart={() => setStep(0)} />}
        {step >= 0 && step < QUESTIONS.length && (
          <QuestionCard
            index={step}
            selected={answers[step]}
            onChoose={choose}
            onBack={() => setStep(step - 1)}
          />
        )}
        {step >= QUESTIONS.length && <Result score={computeScore(answers)} onRestart={restart} />}
      </div>
    </main>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <p className="mb-4 eyebrow">Diagnostic gratuit · 2 minutes</p>
      <h1 className="text-4xl leading-tight font-semibold text-primary md:text-6xl">
        Quelle est la maturité IA de votre entreprise&nbsp;?
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Répondez à 5 questions et obtenez votre score sur 100, votre niveau de maturité et les actions prioritaires pour faire de l'IA un levier de croissance.
      </p>
      <button onClick={onStart} className="btn btn-accent mt-10 px-8 py-4">
        Démarrer le diagnostic →
      </button>
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {LEVELS.map((l, i) => (
          <div key={l.key} className="rounded-xl border bg-card p-5">
            <div className="text-xs text-muted-foreground">0{i + 1}</div>
            <div className="mt-1 font-display text-lg text-primary">{l.pillar}</div>
            <div className="text-sm text-muted-foreground">{l.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuestionCard({ index, selected, onChoose, onBack }: { index: number; selected: number | undefined; onChoose: (p: number) => void; onBack: () => void }) {
  const q = QUESTIONS[index]!;
  return (
    <section key={index} className="animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="mb-8">
        <div className="mb-2 flex justify-between text-sm text-muted-foreground">
          <span>Question {index + 1} / {QUESTIONS.length}</span>
          <span>{Math.round((index / QUESTIONS.length) * 100)} %</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div className="h-full bg-accent transition-all duration-500" style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }} />
        </div>
      </div>
      <h2 className="text-3xl font-semibold text-primary md:text-4xl">{q.title}</h2>
      <p className="mt-2 text-muted-foreground">{q.hint}</p>
      <div className="mt-8 grid gap-3">
        {q.options.map((o, i) => (
          <button
            key={o.label}
            onClick={() => onChoose(o.points)}
            className={`flex items-center gap-4 rounded-xl border bg-card p-5 text-left transition hover:border-accent hover:shadow-soft ${selected === o.points ? "border-accent" : ""}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="font-medium">{o.label}</span>
          </button>
        ))}
      </div>
      <button onClick={onBack} className="mt-8 text-sm text-muted-foreground hover:text-primary">← Retour</button>
    </section>
  );
}

function Result({ score, onRestart }: { score: number; onRestart: () => void }) {
  const level = levelFor(score);
  const r = 70, c = 2 * Math.PI * r;
  return (
    <section className="animate-in fade-in zoom-in-95 duration-500">
      <div className="rounded-2xl border bg-card p-8 shadow-soft md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="relative h-44 w-44 shrink-0">
            <svg viewBox="0 0 160 160" className="h-full w-full -rotate-90">
              <circle cx="80" cy="80" r={r} strokeWidth="12" className="fill-none stroke-muted" />
              <circle cx="80" cy="80" r={r} strokeWidth="12" strokeLinecap="round" className="fill-none stroke-accent transition-all duration-1000"
                strokeDasharray={c} strokeDashoffset={c * (1 - score / 100)} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-5xl font-semibold text-primary">{score}</span>
              <span className="text-sm text-muted-foreground">/ 100</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">{level.name}</p>
            <h2 className="mt-1 text-3xl font-semibold text-primary">Pilier recommandé : {level.pillar}</h2>
            <p className="mt-3 text-muted-foreground">{level.summary}</p>
          </div>
        </div>
      </div>

      <h3 className="mt-12 text-2xl font-semibold text-primary">Nos offres pour votre prochaine étape</h3>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {level.recommendations.map((rec) => (
          <div key={rec.title} className="flex flex-col rounded-xl border bg-card p-6">
            <div className="font-display text-xl text-primary">{rec.title}</div>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{rec.detail}</p>
            {rec.price && <div className="mt-4 font-semibold text-accent">{rec.price}</div>}
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 rounded-2xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-display text-2xl">Parlons de votre feuille de route IA</div>
          <div className="text-sm opacity-80">Un échange de 30 minutes pour affiner ce diagnostic.</div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:contact@cap-intelia.fr?subject=${encodeURIComponent(`Diagnostic IA - score ${score}/100`)}`} className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground">Prendre rendez-vous</a>
          <Link to="/packs" className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold">Voir les packs</Link>
        </div>
      </div>
      <button onClick={onRestart} className="mt-8 text-sm text-muted-foreground hover:text-primary">↺ Refaire le diagnostic</button>
    </section>
  );
}
