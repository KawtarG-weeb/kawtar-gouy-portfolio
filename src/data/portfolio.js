export const profile = {
  name: "Kawtar Gouy",
  role: "Élève ingénieure — Web, Mobile & ERP Development",
  availability: "Recherche d’un stage PFE 2027",
  location: "Casablanca, Maroc",
  email: "kawtargouy12@gmail.com",
  linkedin: "https://www.linkedin.com/in/kawtar-gouy-8aa45b281",
  github: "https://github.com/KawtarG-weeb",
  about:
    "Élève ingénieure en 5ᵉ année en Ingénierie Informatique et Réseaux, option Développement Digital et Systèmes d’Information à l’EMSI Casablanca. Je m’intéresse au développement logiciel, aux applications web et mobiles ainsi qu’aux solutions ERP.",
  about2:
    "Mes expériences m’ont permis de travailler sur des problématiques concrètes de développement front-end, de conception UI/UX, de personnalisation Odoo et de gestion de données métier. Je recherche un stage PFE où je pourrai contribuer à des projets utiles et continuer à renforcer mes compétences techniques."
};

export const experiences = [
  {
    period: "07/2026 — 09/2026",
    company: "Econostic",
    role: "Stagiaire Développement ERP Odoo",
    description:
      "Développement et personnalisation d’un module ERP Odoo dédié à la fabrication du verre, avec intégration du configurateur vitrage aux devis, automatisation du processus de fabrication et amélioration de la traçabilité.",
    stack: ["Odoo", "Python", "XML", "PostgreSQL", "Git"]
  },
  {
    period: "04/2025 — 06/2025",
    company: "CIH Bank",
    role: "Stagiaire Développement Front-End",
    description:
      "Développement front-end d’une interface web Process Delivery, conception UI/UX, maquettage Figma, design system, routage et interfaces adaptées aux rôles utilisateurs.",
    stack: ["React.js", "Tailwind CSS", "Figma"]
  }
];

export const projects = [
  {
    id: "odoo",
    index: "01",
    category: "ERP • Expérience professionnelle",
    title: "ERP Odoo — Fabrication du verre",
    summary:
      "Personnalisation d’un module ERP pour intégrer la configuration du vitrage aux devis et accompagner le processus de fabrication.",
    context:
      "Stage chez Econostic consacré à un environnement métier de fabrication du verre.",
    problem:
      "Le projet nécessitait de relier la configuration du vitrage au processus commercial et de mieux structurer le suivi des opérations de fabrication et des matières.",
    role:
      "J’ai participé au développement et à la personnalisation du module Odoo, à l’intégration du configurateur aux devis, à l’automatisation de flux métier, à l’optimisation des plans de découpe et au traitement des données métier.",
    solution:
      "Une solution ERP Odoo structurée autour du devis, de la configuration vitrage, du processus de fabrication et de la traçabilité des matières.",
    result:
      "Configuration vitrage intégrée aux devis, flux de fabrication mieux structurés et traçabilité des matières améliorée.",
    tech: ["Odoo", "Python", "XML", "PostgreSQL", "Git"],
    screenshot: "/projects/odoo.webp",
    screenshotLabel: "Capture réelle du projet Odoo"
  },
  {
    id: "cih",
    index: "02",
    category: "Web • Expérience professionnelle",
    title: "CIH Bank — Process Delivery",
    summary:
      "Interface web React pensée autour de la gestion des rôles, du routage et d’un design system cohérent.",
    context:
      "Stage Front-End chez CIH Bank sur une interface web Process Delivery.",
    problem:
      "Le travail demandait de concevoir une expérience cohérente tout en adaptant les écrans et privilèges aux différents rôles utilisateurs.",
    role:
      "J’ai contribué à la conception UI/UX, au maquettage Figma, à la mise en place d’un design system, au développement React/Tailwind, au routage et aux interfaces par rôles.",
    solution:
      "Des composants et écrans structurés autour d’un design system, avec navigation et affichage adaptés aux privilèges utilisateurs.",
    result:
      "Une interface plus cohérente visuellement et structurée autour des besoins de navigation et de rôles.",
    tech: ["React.js", "Tailwind CSS", "Figma"],
    screenshot: "/projects/cih.webp",
    screenshotLabel: "Capture réelle du projet CIH"
  },
  {
    id: "worldcup",
    index: "03",
    category: "Mobile • Projet académique/personnel",
    title: "Application mobile — Coupe du Monde 2030",
    summary:
      "Application mobile regroupant un guide, un service eVisa et un QR Fan ID.",
    context:
      "Projet mobile centré sur des services destinés aux supporters de la Coupe du Monde 2030.",
    problem:
      "Regrouper plusieurs services utiles dans une expérience mobile unique.",
    role:
      "J’ai participé au développement de l’application et à l’intégration des fonctionnalités Guide, eVisa et QR Fan ID.",
    solution:
      "Une application mobile réalisée avec React Native et Expo.",
    result:
      "Un prototype/application regroupant les principaux services prévus dans le périmètre du projet.",
    tech: ["React Native", "Expo"],
    screenshot: "/projects/worldcup.webp",
    screenshotLabel: "Capture réelle de l’application World Cup 2030"
  },
  {
    id: "hr",
    index: "04",
    category: "Web • Projet",
    title: "Application web de gestion RH",
    summary:
      "Application web dédiée à la gestion des ressources humaines.",
    context:
      "Projet web consacré à la gestion des ressources humaines.",
    problem:
      "Structurer dans une application web les fonctionnalités prévues pour la gestion RH.",
    role:
      "J’ai contribué au développement de l’application dans un environnement ASP.NET.",
    solution:
      "Application web développée avec ASP.NET.",
    result:
      "Une application fonctionnelle correspondant au périmètre RH défini pour le projet.",
    tech: ["ASP.NET"],
    screenshot: "/projects/hr.webp",
    screenshotLabel: "Capture réelle du projet RH"
  }
];

export const skills = [
  {
    title: "Développement",
    items: ["Java", "Python", "JavaScript", "SQL", "React.js", "Spring Boot"]
  },
  {
    title: "Web & SI",
    items: ["Odoo", "Node.js", "ASP.NET Core", "HTML", "CSS", "JEE"]
  },
  {
    title: "Données",
    items: ["PostgreSQL", "MySQL", "Oracle", "MongoDB"]
  },
  {
    title: "Outils & méthodes",
    items: ["Git", "GitHub", "Postman", "Figma", "UML", "Agile / Scrum"]
  }
];

export const education = [
  {
    period: "2025 — 2027",
    school: "EMSI — Casablanca",
    title:
      "Cycle Ingénieur — Ingénierie Informatique et Réseaux, option DDSI"
  },
  {
    period: "2024 — 2025",
    school: "FST Settat",
    title: "Licence — Système d’Information et Transformation Digitale"
  },
  {
    period: "2022 — 2024",
    school: "FST Settat",
    title: "DEUST — Mathématiques, Informatique, Physique (MIP)"
  }
];

export const certifications = [
  "Meta React Native — Coursera (2025)",
  "Meta React Basics — Coursera (2025)"
];
