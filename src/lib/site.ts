export const CONTACT = {
  email: "contact@cap-intelia.fr",
  phone: "+33 6 29 51 27 98",
  phoneHref: "tel:+33629512798",
  rdv: "mailto:contact@cap-intelia.fr?subject=Prise%20de%20rendez-vous",
};

export type Theme = { slug: string; num: string; title: string; desc: string; group: string; kicker: string; headline: string; intro: string };

export const THEMES: Theme[] = [
  { slug: "seo-geo", num: "01", title: "SEO / GEO", group: "Marketing & ventes", kicker: "Visibilité", desc: "Être visible sur Google et dans les réponses des IA génératives.", headline: "Soyez trouvé sur Google, et recommandé par les IA.", intro: "Vos clients ne cherchent plus seulement sur Google : ils posent aussi leurs questions à ChatGPT, Perplexity ou Gemini. Notre pack SEO / GEO aide votre TPE ou PME à rester visible dans les deux mondes." },
  { slug: "reseaux-sociaux", num: "02", title: "Réseaux sociaux", group: "Marketing & ventes", kicker: "Communication", desc: "Planifier, rédiger et piloter vos publications et vos campagnes.", headline: "Des réseaux sociaux réguliers, sans y passer vos soirées.", intro: "L'IA vous aide à planifier, rédiger et analyser vos publications pour garder une présence constante et cohérente avec votre marque." },
  { slug: "creation-multimedia", num: "03", title: "Création multimédia", group: "Marketing & ventes", kicker: "Contenus", desc: "Visuels, vidéos et supports de marque produits en quelques minutes.", headline: "Vos visuels et vidéos de marque, en quelques minutes.", intro: "Produisez des supports professionnels sans studio : visuels, vidéos courtes, présentations, tout en respectant votre charte." },
  { slug: "prospection-commerciale", num: "04", title: "Prospection commerciale", group: "Marketing & ventes", kicker: "Ventes", desc: "Ciblage, relances et suivi de vos prospects avec des messages personnalisés.", headline: "Une prospection plus ciblée, des relances qui ne s'oublient plus.", intro: "Identifiez les bons prospects, personnalisez vos messages à grande échelle et suivez chaque opportunité avec l'aide de l'IA." },
  { slug: "newsletter-emailing", num: "05", title: "Newsletter & emailing", group: "Marketing & ventes", kicker: "Fidélisation", desc: "Newsletters et campagnes d'emailing rédigées, segmentées et analysées avec l'IA.", headline: "Des newsletters lues, des campagnes qui convertissent.", intro: "Rédigez, segmentez et analysez vos campagnes d'emailing plus vite, avec des contenus adaptés à chaque cible." },
  { slug: "vibe-coding", num: "06", title: "Vibe coding", group: "Outils & productivité", kicker: "Outils", desc: "Créer des outils et applications simples en décrivant ce que vous voulez à l'IA.", headline: "Créez vos propres outils, sans savoir coder.", intro: "Décrivez ce dont vous avez besoin, l'IA construit l'outil : formulaires, tableaux de bord, petites applications métier." },
  { slug: "agents-ia", num: "07", title: "Agents IA", group: "Outils & productivité", kicker: "Automatisation", desc: "Des assistants autonomes qui prennent en charge vos tâches répétitives.", headline: "Des assistants qui travaillent pour vous, en continu.", intro: "Confiez vos tâches répétitives à des agents IA intégrés à vos outils, et recentrez vos équipes sur la valeur ajoutée." },
  { slug: "ia-au-quotidien", num: "08", title: "L'IA au quotidien", group: "Outils & productivité", kicker: "Productivité", desc: "Les bons réflexes pour gagner du temps chaque jour, pour tous les postes.", headline: "Gagnez du temps chaque jour, à tous les postes.", intro: "Rédaction, synthèse, recherche, organisation : les bons réflexes IA pour toute l'équipe, en toute sécurité." },
  { slug: "manager-avec-ia", num: "09", title: "Manager avec l'IA", group: "Outils & productivité", kicker: "Management", desc: "Piloter une équipe et conduire le changement à l'ère de l'IA.", headline: "Conduire votre équipe dans la transformation IA.", intro: "Donnez à vos managers les clés pour piloter, rassurer et faire adopter l'IA dans leurs équipes." },
  { slug: "recrutement-rh", num: "10", title: "Recrutement & RH", group: "Fonctions support", kicker: "Ressources humaines", desc: "Recrutement, onboarding et gestion des compétences.", headline: "Recruter mieux, intégrer plus vite.", intro: "Fiches de poste, tri des candidatures, onboarding et suivi des compétences : l'IA au service de vos RH." },
  { slug: "juridique-conformite", num: "11", title: "Juridique & conformité", group: "Fonctions support", kicker: "Conformité", desc: "Contrats, conformité et veille réglementaire, dont RGPD et AI Act.", headline: "Contrats, RGPD et AI Act, sous contrôle.", intro: "Analysez vos contrats, assurez votre veille réglementaire et préparez votre entreprise à l'AI Act." },
  { slug: "comptabilite-facturation", num: "12", title: "Comptabilité & facturation", group: "Fonctions support", kicker: "Finance", desc: "Saisie, rapprochement, relances de factures et reporting.", headline: "Moins de saisie, plus de visibilité sur vos chiffres.", intro: "Automatisez saisie, rapprochements et relances de factures, et obtenez un reporting clair en continu." },
];

export const GROUPS = ["Marketing & ventes", "Outils & productivité", "Fonctions support"];

export const PILLARS = [
  { num: "01", name: "Inspirer", text: "Conférences et démonstrations pour donner une vision claire des usages possibles dans votre métier." },
  { num: "02", name: "Conseiller", text: "Audit de maturité, priorisation des cas d'usage et feuille de route réaliste pour votre budget." },
  { num: "03", name: "Former", text: "Formations pratiques pour que vos équipes maîtrisent les outils et les bons réflexes." },
  { num: "04", name: "Déployer", text: "Mise en place d'assistants et d'agents dans vos process, avec un suivi de l'adoption." },
];

export const PACKS = [
  { pillar: "Inspirer", name: "Conférence", duration: "2 h · jusqu'à 30 personnes", text: "2 h pour embarquer vos équipes sur la thématique de votre choix.", price: "800 €" },
  { pillar: "Conseiller", name: "Conférence + atelier", duration: "1/2 journée", text: "Une demi-journée pour inspirer, puis identifier vos premiers cas d'usage.", price: "1 500 €" },
  { pillar: "Former", name: "Formation", duration: "1 journée · jusqu'à 30 personnes", text: "Une journée de pratique sur vos outils et vos données métier.", price: "2 000 €" },
  { pillar: "Déployer", name: "Déploiement sur mesure", duration: "Sur mesure", text: "Agents et workflows intégrés à vos process, avec suivi de l'adoption.", price: null },
];

export type ThemePack = { name: string; bullets: string[] };

export function themePacks(t: Theme): ThemePack[] {
  if (t.slug === "seo-geo") {
    return [
      { name: "Conférence", bullets: ["Comment les IA changent la recherche", "Enjeux SEO et GEO pour une TPE/PME", "Démonstrations sur des cas réels", "Quick wins à lancer dès demain"] },
      { name: "Conférence + atelier", bullets: ["Conférence d'ouverture", "Mini-audit de votre visibilité actuelle", "Priorisation de 3 chantiers", "Feuille de route à 90 jours"] },
      { name: "Formation pratique", bullets: ["Rédiger des contenus optimisés avec l'IA", "Structurer vos pages pour être cité par les IA", "Optimiser votre fiche Google et vos avis", "Gabarits de prompts prêts à l'emploi"] },
      { name: "Agent SEO / GEO", bullets: ["Agent de veille et d'audit de votre site", "Workflow de production de contenus", "Tableau de suivi de votre visibilité", "Accompagnement de l'adoption"] },
    ];
  }
  const l = t.title.toLowerCase();
  return [
    { name: "Conférence", bullets: [`Ce que l'IA change pour ${l}`, "Panorama des outils utiles", "Démonstrations sur des cas réels", "Quick wins à lancer dès demain"] },
    { name: "Conférence + atelier", bullets: ["Conférence d'ouverture", "Diagnostic de vos pratiques actuelles", "Priorisation de 3 cas d'usage", "Feuille de route à 90 jours"] },
    { name: "Formation pratique", bullets: ["Prise en main des outils clés", "Exercices sur vos propres données", "Bonnes pratiques et limites", "Gabarits de prompts prêts à l'emploi"] },
    { name: `Agent ${t.title}`, bullets: ["Cadrage de votre besoin", "Agent ou workflow sur mesure", "Intégration à vos outils", "Accompagnement de l'adoption"] },
  ];
}

export const SEO_FAQ = [
  { q: "Le GEO remplace-t-il le SEO ?", a: "Non, les deux se complètent. Le SEO reste la base : un site clair, des contenus utiles, une fiche Google soignée. Le GEO s'appuie dessus pour que les assistants IA vous comprennent et vous citent." },
  { q: "Faut-il déjà avoir un site ?", a: "Non. Nous partons de votre situation, y compris si votre site est récent ou en préparation. Une bonne fiche Google et quelques contenus structurés permettent déjà d'avancer." },
  { q: "Peut-on garantir une position ou une citation par les IA ?", a: "Personne ne peut le garantir honnêtement. Nous mettons en place les pratiques qui maximisent vos chances et nous mesurons l'évolution de votre visibilité." },
  { q: "En combien de temps voit-on des résultats ?", a: "Les premiers effets apparaissent généralement en quelques semaines sur la fiche Google, et en 3 à 6 mois sur le référencement naturel." },
  { q: "Google pénalise-t-il les contenus écrits avec l'IA ?", a: "Non, Google évalue l'utilité du contenu, pas son mode de production. Un contenu relu, précis et utile reste bien classé." },
  { q: "Faut-il des compétences techniques pour suivre la formation ?", a: "Aucune. La formation est pensée pour des profils marketing, commerciaux ou dirigeants, sans prérequis technique." },
  { q: "Quel pack choisir pour démarrer ?", a: "Si le sujet est nouveau, la conférence. Si vous voulez un plan d'action concret, la conférence + atelier. Le simulateur de maturité vous oriente en 2 minutes." },
];

export const GENERIC_FAQ = [
  { q: "Faut-il des compétences techniques ?", a: "Aucune. Nos formats sont pensés pour des équipes métier, sans prérequis technique." },
  { q: "Les formats sont-ils adaptés à notre secteur ?", a: "Oui, chaque intervention est préparée à partir de vos outils, de vos données et de vos cas concrets." },
  { q: "Quel pack choisir pour démarrer ?", a: "Si le sujet est nouveau, la conférence. Si vous voulez un plan d'action concret, la conférence + atelier. Le simulateur de maturité vous oriente en 2 minutes." },
];
