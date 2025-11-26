# Étape 4 : Connexion à l'API (GET)

## 🎯 Objectif

Remplacer les données en dur par des données **chargées depuis notre API backend**.

## 🔗 Nouveau concept : useEffect

`useEffect` est un hook qui permet d'exécuter du code **après le rendu** du composant. Idéal pour :
- Charger des données depuis une API
- S'abonner à des événements
- Mettre à jour le DOM

### Syntaxe

```jsx
useEffect(() => {
  // Code à exécuter
}, [dependencies]); // Tableau de dépendances
```

### Tableau de dépendances

```jsx
useEffect(() => { ... }, []);      // ▶️ Exécuté UNE SEULE FOIS au chargement
useEffect(() => { ... }, [tasks]); // ▶️ Exécuté quand 'tasks' change
useEffect(() => { ... });          // ▶️ Exécuté à CHAQUE rendu (rare)
```

## 💻 Code complet

### src/App.jsx

```jsx
import React, { useState, useEffect } from 'react'; // 1. Importer useEffect
import './App.css';

const API_URL = 'http://localhost:1337/task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  // 2. Charger les tâches au démarrage
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Erreur de chargement:", err));
  }, []); // [] = exécuté une seule fois

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTodoText.trim()) return;
    
    const newTask = {
      id: Date.now(),
      title: newTodoText,
      isCompleted: false,
    };
    
    setTasks([...tasks, newTask]);
    setNewTodoText('');
  };

  return (
    <div className="App-container">
      <h1>Liste des Tâches</h1>
      
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

## 🔍 Comprendre le flux

```
1. Le composant App se monte (apparait à l'écran)
   ↓
2. useEffect s'exécute
   ↓
3. fetch() envoie une requête GET à http://localhost:1337/task
   ↓
4. Le serveur répond avec un tableau JSON de tâches
   ↓
5. .then(res => res.json()) convertit la réponse en objet JavaScript
   ↓
6. .then(data => setTasks(data)) met à jour l'état
   ↓
7. Le composant se re-rend avec les données de l'API
```

## ⚠️ Prérequis important

### Le backend doit être lancé !

Dans un autre terminal :

```bash
cd ../etape-0-backend
sails lift
```

L'API doit être accessible sur **http://localhost:1337**

### Configuration CORS

Assurez-vous que `config/security.js` dans le backend contient :

```javascript
cors: {
  allRoutes: true,
  allowOrigins: '*',
  allowCredentials: false,
}
```

## 🧪 Test

1. Ajoutez des tâches via Postman ou cURL :

```bash
curl -X POST http://localhost:1337/task \
  -H "Content-Type: application/json" \
  -d '{"title":"Tâche depuis l API","isCompleted":false}'
```

2. Rechargez votre page React : la tâche doit apparaître ! ✨

## 💡 Points importants

### 1. async/await (alternative)

Version plus moderne et lisible :

```jsx
useEffect(() => {
  const loadTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Erreur:", err);
    }
  };
  
  loadTasks();
}, []);
```

### 2. Gestion des erreurs

Toujours inclure un `.catch()` pour gérer les erreurs réseau.

### 3. Loading state (bonus)

Ajoutez un indicateur de chargement :

```jsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      setTasks(data);
      setLoading(false);
    });
}, []);

if (loading) return <p>Chargement...</p>;
```

## 🔍 Dépannage

### Erreur CORS

```
Access to fetch has been blocked by CORS policy
```

➡️ Vérifiez `config/security.js` dans le backend.

### Erreur de connexion

```
Failed to fetch
```

➡️ Vérifiez que le backend est bien lancé sur le port 1337.

### Tableau vide

➡️ Testez directement : `curl http://localhost:1337/task`

## ➡️ Prochaine étape

Nous chargeons les tâches, mais l'ajout n'est pas encore persisté ! Connectons le formulaire à l'API avec **POST**.

➡️ [Aller à l'étape 5 : API POST](../etape-5-api-post/)
