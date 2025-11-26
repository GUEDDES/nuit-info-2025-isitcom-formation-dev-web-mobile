# Formation Nuit de l'Info 2025 - ISITCOM

## Atelier Développement Web et Mobile Moderne
**Construire des interfaces réactives de A à Z avec Vite**

Présenté par Dr. Abdelweheb Gueddes  
26 novembre 2025 - ISITCOM, Sousse

---

## 🎯 Objectifs de la formation

Cette formation progressive vous guide à travers la création d'une application complète :
- **Backend** : API REST avec Sails.js/Express
- **Frontend Web** : Application React avec Vite
- **Mobile** : Application React Native avec Expo

## 📚 Programme (2 heures)

### Partie 1 : Backend Express via Sails.js (15 minutes)
- Génération d'une API REST complète en 3 commandes
- Routes automatiques GET, POST, PATCH, DELETE

### Partie 2 : Le Web avec React & Vite (60 minutes)
- Évolution du code étape par étape
- UI statique, état, formulaires
- Composants réutilisables et Props
- Connexion à l'API : Lire et Écrire des données

### Partie 3 : Le Mobile avec React Native (40 minutes)
- L'écosystème Expo et composants natifs
- Réutiliser 90% du code pour une app mobile

### Conclusion (5 minutes)
- Défi pratique
- Questions & Réponses

---

## 📁 Structure du projet

Chaque étape est un projet complet et fonctionnel :

```
├── etape-0-backend/           # API REST avec Sails.js
├── etape-1-ui-statique/       # Interface statique avec données en dur
├── etape-2-usestate/          # Introduction de l'état React
├── etape-3-formulaire/        # Gestion du formulaire d'ajout
├── etape-4-api-get/           # Connexion à l'API (lecture)
├── etape-5-api-post/          # Envoi de données à l'API
├── etape-6-bonus-web/         # Toggle des tâches (PATCH)
└── etape-7-react-native/      # Application mobile Expo
```

---

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** (version 16 ou supérieure)
- **npm** ou **yarn**
- **Expo Go** sur votre smartphone (pour la partie mobile)

### Installation globale

```bash
# Installer Sails.js
npm install -g sails

# Installer Expo CLI
npm install -g expo-cli
```

### Lancer le backend (Partie 1)

```bash
cd etape-0-backend
npm install
sails lift
# API disponible sur http://localhost:1337
```

### Lancer le frontend web (Parties 2-6)

```bash
# Exemple avec l'étape 5
cd etape-5-api-post
npm install
npm run dev
# Application disponible sur http://localhost:5173
```

### Lancer l'application mobile (Partie 3)

```bash
cd etape-7-react-native
npm install
npm start
# Scanner le QR code avec Expo Go
```

---

## 📝 Architecture générale

```
┌──────────────────┐
│  Frontend Web     │
│  (React + Vite)   │
└───────┬──────────┘
       │
       │ HTTP (fetch)
       │
┌───────┴──────────┐
│   Backend API     │
│  (Sails.js)       │
└───────┬──────────┘
       │
       │ HTTP (fetch)
       │
┌───────┴──────────┐
│  Frontend Mobile  │
│ (React Native)   │
└──────────────────┘
```

---

## 🎯 Défis bonus

### Défi Web
Rendre les tâches interactives : cliquer pour marquer comme complète/incomplète

### Défi Mobile
Transposer l'interactivité sur l'application mobile avec TouchableOpacity

---

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation React Native](https://reactnative.dev)
- [React Native Directory](https://reactnativedirectory.com)
- [Tutoriels interactifs](https://react-tutorial.app)
- [FreeCodeCamp - React](https://www.freecodecamp.org/)

---

## 👤 Auteur

**Dr. Abdelweheb Gueddes**  
ISITCOM, Sousse

---

## 📝 Licence

Ce projet est destiné à des fins éducatives dans le cadre de la Nuit de l'Info 2025.
