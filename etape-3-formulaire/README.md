# Étape 3 : Gestion du Formulaire

## 🎯 Objectif

Ajouter un formulaire pour permettre à l'utilisateur de **créer de nouvelles tâches**.

## 📝 Nouveaux concepts

### 1. Formulaire contrôlé (Controlled Component)

La valeur du champ `<input>` est **synchronisée** avec l'état React.

```jsx
const [newTodoText, setNewTodoText] = useState('');

<input 
  value={newTodoText}                          // ← Lié à l'état
  onChange={(e) => setNewTodoText(e.target.value)}  // ← Met à jour l'état
/>
```

### 2. Gestion de la soumission

```jsx
const handleAddTask = (e) => {
  e.preventDefault();  // Empêche le rafraîchissement de la page
  // Logique d'ajout
};

<form onSubmit={handleAddTask}>
  {/* ... */}
</form>
```

## 💻 Code complet

### src/App.jsx

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  
  // 1. État pour le texte de l'input
  const [newTodoText, setNewTodoText] = useState('');

  // 2. Fonction pour ajouter une tâche
  const handleAddTask = (e) => {
    e.preventDefault(); // Empêche le refresh
    
    if (!newTodoText.trim()) return; // Ignore les textes vides
    
    const newTask = {
      id: Date.now(), // ID temporaire unique
      title: newTodoText,
      isCompleted: false,
    };
    
    setTasks([...tasks, newTask]); // Ajoute la nouvelle tâche
    setNewTodoText(''); // Vide le champ
  };

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      
      {/* 3. Formulaire pour ajouter */}
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="Nouvelle tâche..."
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      
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

### src/App.css (ajouts)

```css
/* ... styles précédents ... */

.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.task-input {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.task-input:focus {
  outline: none;
  border-color: #4CAF50;
}

.task-form button {
  padding: 12px 24px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
}

.task-form button:hover {
  background-color: #45a049;
}

.task-form button:active {
  transform: scale(0.98);
}
```

## 🔍 Détail du flux de données

```
1. Utilisateur tape "Faire les courses"
   ↓
2. onChange déclenche setNewTodoText("Faire les courses")
   ↓
3. L'état newTodoText est mis à jour
   ↓
4. Le composant se re-rend avec la nouvelle valeur dans l'input
   ↓
5. Utilisateur appuie sur Enter ou clique "Ajouter"
   ↓
6. handleAddTask crée une nouvelle tâche
   ↓
7. setTasks ajoute la tâche à la liste
   ↓
8. Le composant se re-rend avec la liste mise à jour
```

## 💡 Points importants

### 1. e.preventDefault()

Sans cela, le formulaire rechargerait la page !

### 2. Date.now() pour l'ID

C'est un **ID temporaire**. Dans la prochaine étape, le serveur générera l'ID réel.

### 3. Validation basique

```jsx
if (!newTodoText.trim()) return;
```

Ignore les chaînes vides ou avec uniquement des espaces.

### 4. Syntaxe spread pour l'immuabilité

```jsx
setTasks([...tasks, newTask]);
//        └───────── Copie tous les éléments existants
```

## ✅ Résultat attendu

Vous pouvez maintenant :
- Taper du texte dans le champ
- Cliquer sur "Ajouter" ou appuyer sur Enter
- Voir la nouvelle tâche apparaître dans la liste
- Le champ se vide automatiquement

## 🧪 Exercice bonus

Ajoutez un compteur qui affiche le nombre de tâches :

```jsx
<p>{tasks.length} tâche(s)</p>
```

## ➡️ Prochaine étape

Actuellement, les tâches ne sont que dans la mémoire du navigateur. Connectons-nous à notre **API backend** pour les sauvegarder !

➡️ [Aller à l'étape 4 : Connexion API (GET)](../etape-4-api-get/)
