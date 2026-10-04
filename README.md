# Portfolio — Kawtar Gouy

Portfolio React/Vite conçu pour une candidature PFE 2027.

## Principes respectés

- Positionnement clair dès le premier écran.
- Pas de titre exagéré de type "Full-Stack Developer".
- Projets mis en avant avant la liste de technologies.
- Étude de cas : contexte → problème → contribution → solution → résultat.
- Pas de faux chiffres ni de jauges de compétences.
- Design sobre et responsive.
- Navigation simple en une page.
- CV téléchargeable.
- LinkedIn, GitHub et email visibles.
- Accessibilité de base : skip link, focus visible, contrastes, `prefers-reduced-motion`.
- Animations légères uniquement.
- Aucun faux screenshot n'est présenté comme une réalisation.

## Lancer le projet

```bash
npm install
npm run dev
```

Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

## Ajouter les vraies captures de projets

Pour éviter d'inventer des visuels, le portfolio contient des emplacements neutres.

Ajoutez vos propres captures compressées en WebP avec exactement ces noms :

```text
public/projects/odoo.webp
public/projects/cih.webp
public/projects/worldcup.webp
public/projects/hr.webp
```

Recommandation :
- largeur : 1600 à 2200 px
- format : WebP
- poids idéal : < 500 Ko par capture
- supprimer toute donnée confidentielle d'entreprise

Si vous avez plusieurs captures par projet, créez par exemple :

```text
public/projects/odoo-01.webp
public/projects/odoo-02.webp
public/projects/odoo-03.webp
```

puis adaptez `src/data/portfolio.js` et le composant `ProjectCard.jsx`.

## Contenu

Les textes du portfolio ont été rédigés uniquement à partir du CV fourni.
Ils évitent volontairement :
- les KPI inventés ;
- les fonctionnalités non confirmées ;
- les responsabilités non prouvées.

## Déploiement Vercel

1. Créer un dépôt GitHub.
2. Envoyer ce dossier sur GitHub.
3. Aller sur Vercel.
4. Importer le dépôt.
5. Framework détecté : Vite.
6. Build command : `npm run build`
7. Output directory : `dist`

## Vérification avant candidature

- Tester le site sur mobile (~390 px), tablette, laptop et desktop.
- Vérifier tous les liens.
- Ajouter les vraies captures des projets.
- Vérifier que GitHub ne contient pas de secrets ou projets à ne pas montrer.
- Relire les textes et dates.
- Tester le téléchargement du CV.
