export type Option = { label: string; points: number };
export type Question = { title: string; hint: string; options: Option[] };

// 5 questions, each worth up to 20 points -> score on 100
export const QUESTIONS: Question[] = [
  {
    title: "Où en est votre direction sur le sujet de l'IA ?",
    hint: "Vision et engagement du comité de direction",
    options: [
      { label: "Le sujet n'a pas encore été abordé", points: 0 },
      { label: "On en parle, sans orientation claire", points: 7 },
      { label: "Une ambition est posée, quelques pistes identifiées", points: 14 },
      { label: "Une feuille de route IA est validée et suivie", points: 20 },
    ],
  },
  {
    title: "Comment vos équipes utilisent-elles l'IA aujourd'hui ?",
    hint: "ChatGPT, Copilot, Mistral, outils métiers…",
    options: [
      { label: "Pas du tout, ou presque", points: 0 },
      { label: "Quelques curieux, de façon individuelle", points: 7 },
      { label: "Usage régulier dans plusieurs services", points: 14 },
      { label: "Usage généralisé avec outils fournis par l'entreprise", points: 20 },
    ],
  },
  {
    title: "Vos collaborateurs ont-ils été formés ?",
    hint: "Prompting, bonnes pratiques, limites de l'IA",
    options: [
      { label: "Aucune formation", points: 0 },
      { label: "Une sensibilisation ponctuelle", points: 7 },
      { label: "Des formations ciblées pour certaines équipes", points: 14 },
      { label: "Un programme de montée en compétences structuré", points: 20 },
    ],
  },
  {
    title: "Avez-vous des cas d'usage IA identifiés et priorisés ?",
    hint: "Processus à automatiser, gains attendus, ROI",
    options: [
      { label: "Non, on ne sait pas par où commencer", points: 0 },
      { label: "Quelques idées, pas encore évaluées", points: 7 },
      { label: "Des cas priorisés, un ou deux pilotes en cours", points: 14 },
      { label: "Des projets IA mesurés et en production", points: 20 },
    ],
  },
  {
    title: "L'IA est-elle intégrée dans vos processus et outils ?",
    hint: "Agents, automatisations, gouvernance des données",
    options: [
      { label: "Non, aucun outil IA intégré", points: 0 },
      { label: "Des tests isolés, sans cadre", points: 7 },
      { label: "Quelques automatisations avec une charte d'usage", points: 14 },
      { label: "Des agents IA dans nos workflows, gouvernance en place", points: 20 },
    ],
  },
];

export type Level = {
  key: "inspirer" | "conseiller" | "deployer";
  name: string;
  pillar: string;
  summary: string;
  recommendations: { title: string; detail: string; price?: string }[];
};

export const LEVELS: Level[] = [
  {
    key: "inspirer",
    name: "Début de maturité",
    pillar: "Inspirer",
    summary:
      "L'IA reste un sujet à ouvrir. La priorité : acculturer la direction et les équipes, et donner une vision claire des usages possibles dans votre métier.",
    recommendations: [
      { title: "Conférence d'acculturation", detail: "2 h pour embarquer vos équipes et débloquer le sujet en comité de direction", price: "800 € HT" },
      { title: "Conférence + atelier", detail: "Une demi-journée pour inspirer puis identifier vos premiers usages", price: "1 500 € HT" },
    ],
  },
  {
    key: "conseiller",
    name: "Maturité intermédiaire",
    pillar: "Conseiller & Former",
    summary:
      "Les usages émergent mais restent dispersés. Il est temps de cadrer : prioriser les cas d'usage, structurer une feuille de route et faire monter vos équipes en compétences.",
    recommendations: [
      { title: "Audit de maturité & feuille de route", detail: "Prioriser vos projets IA et décider avec méthode, sans jargon" },
      { title: "Atelier de formation", detail: "1 journée pour maîtriser outils et bonnes pratiques, jusqu'à 30 personnes", price: "2 000 € HT" },
    ],
  },
  {
    key: "deployer",
    name: "Maturité avancée",
    pillar: "Déployer",
    summary:
      "Vos bases sont solides. L'enjeu est désormais d'industrialiser : intégrer des agents IA dans vos workflows et sécuriser l'adoption à l'échelle.",
    recommendations: [
      { title: "Déploiement d'agents IA", detail: "Intégrer des assistants métiers dans vos processus, jusqu'à la mise en production" },
      { title: "Accompagnement à l'adoption", detail: "Gouvernance, mesure du ROI et autonomie de vos équipes" },
    ],
  },
];

export function computeScore(answers: number[]): number {
  return Math.min(100, answers.reduce((s, p) => s + p, 0));
}

export function levelFor(score: number): Level {
  if (score < 35) return LEVELS[0]!;
  if (score < 70) return LEVELS[1]!;
  return LEVELS[2]!;
}
