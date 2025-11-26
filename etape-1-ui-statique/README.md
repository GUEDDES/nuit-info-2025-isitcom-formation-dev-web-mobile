# Étape 1 : Projet et UI Statique

## 🎯 Objectif

Créer notre premier projet React avec Vite et afficher une liste de tâches **statique** (données en dur dans le code).

## 🛠️ Pourquoi Vite ?

**Vite** est un outil de build ultra-rapide pour les applications web modernes :
- **Démarrage instantané** : Le serveur de développement démarre en millisecondes
- **Hot Module Replacement (HMR)** : Les changements apparaissent immédiatement
- **Optimisé pour React** : Configuration minimale

## 🚀 Création du projet

```bash
# 1. Créer le projet avec le template React
npm create vite@latest ma-weblist -- --template react

# 2. Entrer dans le dossier
cd ma-weblist

# 3. Installer les dépendances
npm install

# 4. Lancer le serveur de développement
npm run dev
```

L'application est maintenant accessible sur **http://localhost:5173**

## 📝 Structure du projet

```
ma-weblist/
├── public/              # Fichiers statiques
├── src/
│   ├── App.jsx         # Notre composant principal
│   ├── App.css         # Styles de l'application
│   └── main.jsx        # Point d'entrée
├── index.html          # Template HTML
├── package.json        # Dépendances
└── vite.config.js      # Configuration Vite
```

## 💻 Code : Notre premier composant

### src/App.jsx

```jsx
import './App.css';

function App() {
  // Données "en dur" pour construire l'interface
  const tasks = [
    { id: 1, title: 'Apprendre React', isCompleted: true },
    { id: 2, title: 'Boire un café', isCompleted: false },
  ];

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### src/App.css

```css
.App-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.task-list {
  list-style: none;
  padding: 0;
}

.task-list li {
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background 0.3s;
}

.task-list li:hover {
  background: #e8f4f8;
}
```

## 🔍 Concepts clés

### 1. Composant fonctionnel

```jsx
function App() {
  // Logique du composant
  return (
    // JSX (interface utilisateur)
  );
}
```

### 2. JSX (JavaScript XML)

Permet d'écrire l'interface avec une syntaxe proche du HTML :

```jsx
<div className="App-container">
  <h1>Titre</h1>
</div>
```

**Attention** : Utilisez `className` au lieu de `class` !

### 3. Rendu de listes avec `.map()`

```jsx
{tasks.map(task => (
  <li key={task.id}>{task.title}</li>
))}
```

- **`.map()`** : Transforme chaque élément du tableau en JSX
- **`key`** : Identifiant unique requis pour optimiser le rendu

## ✅ Résultat attendu

Vous devriez voir une page avec :
- Un titre "Liste des Tâches"
- Deux tâches affichées dans une liste
- Un style propre et centré

## 💡 Points importants

- Les données sont **statiques** : elles ne changent pas
- Aucune interaction utilisateur pour le moment
- C'est la base sur laquelle nous allons construire

## ➡️ Prochaine étape

Maintenant que l'interface est construite, nous allons introduire l'**état** pour rendre les données dynamiques !

➡️ [Aller à l'étape 2 : useState](../etape-2-usestate/)
