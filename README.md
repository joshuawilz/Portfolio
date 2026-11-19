# Portfolio — Réorientation Licence Informatique URCA

Portfolio web professionnel destiné à accompagner une candidature universitaire en réorientation vers une Licence Informatique à l'Université de Reims Champagne-Ardenne (URCA), UFR Sciences Exactes et Naturelles, semestre 2 de l'année universitaire 2026-2027.

## Structure du projet

```
Portfolio/
├── index.html              # Page d'accueil
├── parcours.html           # Parcours académique (chronologie)
├── experience.html         # Expérience pratique (Sam Technology Center)
├── projets.html            # Projets personnels (TYVORYX, 2DINVEST)
├── reorientation.html      # Démarche de réorientation
├── contact.html            # Contact
├── css/
│   └── style.css           # Feuille de style principale
├── js/
│   └── main.js             # Animations et interactions
├── assets/                 # Ressources graphiques (à ajouter)
└── README.md               # Ce fichier
```

## Technologies utilisées

- **HTML5** sémantique
- **CSS3** avec variables CSS (Custom Properties), pas de framework CSS externe
- **JavaScript** vanilla (pas de dépendance)
- **Polices système** (font-stack système, pas de requête externe)
- **Design responsive** : ordinateurs, tablettes, smartphones
- **Accessibilité** : focus visible, contrastes, structure sémantique, prefers-reduced-motion

## Pages développées

1. **Accueil** — Présentation de l'identité, situation actuelle, objectif de réorientation, accès rapides
2. **Parcours académique** — Chronologie animée : Baccalauréat série D, L2 Mathématiques (Université de Lomé), L1 Géographie et Aménagement (URCA), projet de réorientation
3. **Expérience pratique** — Sam Technology Center : maintenance informatique, réparation, diagnostic, relation client
4. **Projets personnels** — TYVORYX et 2DINVEST avec fiches détaillées, liens vers les sites et dépôts GitHub
5. **Démarche de réorientation** — Argumentation complète : pourquoi l'informatique, lien mathématiques-informatique, objectifs de formation
6. **Contact** — Email fonctionnel (mailto:) et formulaire

## Lancement en local

Ouvrez simplement `index.html` dans votre navigateur, ou utilisez un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (http-server)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis accédez à `http://localhost:8000`.

## Déploiement

Le site est un site statique (HTML/CSS/JS pur) et peut être déployé sur :
- **GitHub Pages** (gratuit, recommandé)
- **Vercel**
- **Netlify**

### Déploiement sur GitHub Pages

1. Poussez le code sur un dépôt GitHub
2. Dans les paramètres du dépôt, activez GitHub Pages
3. Sélectionnez la branche `main` comme source
4. Le site sera accessible à `https://votre-utilisateur.github.io/nom-du-depot/`

## Informations personnelles utilisées

- Établissement actuel : Université de Reims Champagne-Ardenne (URCA), UFR Lettres et Sciences Humaines
- Formation actuelle : L1 Géographie et Aménagement
- Formation antérieure : L2 Mathématiques validée, Université de Lomé
- Baccalauréat : série D (Togo)
- Formation visée : L1 Informatique, URCA, UFR Sciences Exactes et Naturelles
- Contact : contact@tyvoryx.com

## Projets présentés

- **TYVORYX** : https://www.tyvoryx.com/ | https://github.com/joshuawilz/tyvoryx
- **2DINVEST** : https://2d-invest.vercel.app/ | https://github.com/joshuawilz/2d-Invest

## Licence

Ce portfolio est réalisé à des fins universitaires et personnelles. Tous les liens vers les projets renvoient vers des ressources publiques.