# Étape 2 : Introduction de l'État (useState)

## 🎯 Objectif

Transformer nos données statiques en données **dynamiques** en utilisant le hook `useState`.

## 🧠 Qu'est-ce que l'état (state) ?

L'état est une **mémoire interne** du composant qui peut changer au fil du temps. Quand l'état change, React **re-rend** automatiquement le composant pour afficher les nouvelles données.

## 🔄 Différence entre const et useState

### Avant (données statiques)

```jsx
const tasks = [
  { id: 1, title: 'Apprendre React', isCompleted: true },
];
// ❌ Ne peut pas être modifié
```

### Après (données dans l'état)

```jsx
const [tasks, setTasks] = useState([
  { id: 1, title: 'Apprendre React', isCompleted: true },
]);
// ✅ Peut être modifié avec setTasks()
```

## 💻 Code modifié

### src/App.jsx

```jsx
import React, { useState } from 'react'; // 1. Importer useState
import './App.css';

function App() {
  // 2. Remplacer la constante par un état
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Apprendre React', isCompleted: true },
    { id: 2, title: 'Boire un café', isCompleted: false },
  ]);

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

## 🔍 Anatomie de useState

```jsx
const [tasks, setTasks] = useState([...]);
//     │      │              │
//     │      │              └── Valeur initiale
//     │      └─────────────── Fonction pour modifier l'état
//     └─────────────────────── Variable qui contient l'état actuel
```

### Utilisation de setTasks

```jsx
// Ajouter une tâche
setTasks([...tasks, newTask]);

// Remplacer toutes les tâches
setTasks([{ id: 3, title: 'Nouvelle tâche', isCompleted: false }]);

// Vider la liste
setTasks([]);
```

## 💡 Concepts clés

### 1. L'état est immuable

❌ **Mauvais** : Modifier directement l'état
```jsx
tasks.push(newTask);  // NE FONCTIONNE PAS !
```

✅ **Bon** : Créer un nouvel état
```jsx
setTasks([...tasks, newTask]);  // Correct !
```

### 2. Le re-rendu est automatique

Quand vous appelez `setTasks()`, React :
1. Met à jour l'état
2. Re-rend le composant avec les nouvelles données
3. Met à jour le DOM

### 3. L'état est local au composant

Chaque instance de composant a son propre état indépendant.

## ✅ Résultat attendu

Visuellement, l'application est **identique** à l'étape 1, mais maintenant :
- Les données sont dans l'état
- Elles peuvent être modifiées dynamiquement
- Le composant se re-rendra automatiquement

## 🧪 Test dans la console

Ouvrez la console du navigateur (F12) et ajoutez temporairement ce code dans votre composant :

```jsx
// Ajouter un bouton de test
<button onClick={() => setTasks([...tasks, { id: 3, title: 'Nouvelle tâche', isCompleted: false }])}>
  Ajouter une tâche
</button>
```

Cliquez sur le bouton : la liste se met à jour automatiquement ! ✨

## 📚 Ressources

- [Documentation officielle useState](https://react.dev/reference/react/useState)
- [Penser en React](https://react.dev/learn/thinking-in-react)

## ➡️ Prochaine étape

Maintenant que nous savons gérer l'état, créons un **formulaire** pour ajouter des tâches !

➡️ [Aller à l'étape 3 : Formulaire](../etape-3-formulaire/)
