# Étape 5 : API POST - Envoyer des données

## 🎯 Objectif
Dans cette étape, nous allons **envoyer de nouvelles tâches à notre API** via une requête POST, pour les sauvegarder dans la base de données.

## 📚 Concepts couverts
- Requête HTTP POST avec `fetch()`
- Envoi de données JSON au serveur
- Gestion des réponses serveur
- Synchronisation état local et serveur

## 🔄 Différences avec l'étape 4

### Dans l'étape 4
- ✅ On récupère les tâches (GET)
- ❌ Les nouvelles tâches sont ajoutées localement seulement
- ❌ Rechargement de la page = perte des données

### Dans l'étape 5
- ✅ On récupère les tâches (GET)
- ✅ On envoie les nouvelles tâches au serveur (POST)
- ✅ Les données persistent dans la base de données

## 🆕 Nouveautés dans le code

### Fonction `handleAddTask` améliorée

```javascript
const handleAddTask = async (e) => {
  e.preventDefault();
  if (!newTodoText.trim()) return;
  
  try {
    // 1. Envoyer la requête POST au serveur
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: newTodoText,
        isCompleted: false,
      }),
    });
    
    // 2. Récupérer la tâche créée par le serveur
    const createdTask = await response.json();
    
    // 3. Ajouter la tâche à notre état local
    setTasks([...tasks, createdTask]);
    setNewTodoText('');
  } catch (err) {
    console.error("Erreur lors de l'ajout:", err);
  }
};
```

### Points clés

1. **`async/await`** : Syntaxe moderne pour gérer les promesses
2. **`method: 'POST'`** : Indique qu'on envoie des données
3. **`headers`** : Précise qu'on envoie du JSON
4. **`body`** : Les données à envoyer (converties en JSON)
5. **`createdTask`** : Le serveur renvoie la tâche avec son ID

## 📝 Structure du projet

```
etape-5-api-post/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── App.jsx      ← Code modifié ici
    ├── App.css
    └── main.jsx
```

## 🚀 Installation et lancement

### 1. Installer les dépendances
```bash
cd etape-5-api-post
npm install
```

### 2. Lancer le serveur backend
**Dans un autre terminal :**
```bash
cd ../etape-0-backend
npm start
```

### 3. Lancer l'application React
```bash
npm run dev
```

### 4. Ouvrir dans le navigateur
```
http://localhost:5173
```

## ✅ Test de l'étape

1. **Ajouter une tâche** : Tapez "Faire les courses" et cliquez sur Ajouter
2. **Vérifier dans le navigateur** : La tâche apparaît
3. **Recharger la page (F5)** : La tâche est toujours là ! 🎉
4. **Vérifier dans l'API** : Ouvrez http://localhost:1337/task

## 🔍 Comparer avec l'étape précédente

```bash
# Voir les différences de code
git diff etape-4-api-get/src/App.jsx etape-5-api-post/src/App.jsx
```

## 💡 Points importants

- Le serveur génère automatiquement l'`id` et la date de création
- On utilise la tâche renvoyée par le serveur (pas celle créée localement)
- La gestion d'erreur avec `try/catch` est essentielle
- Les données persistent maintenant dans la base de données

## 🎓 Exercice bonus

Modifiez le code pour afficher un message d'erreur à l'utilisateur si l'ajout échoue.

## 📚 Ressources

- [MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [MDN - async/await](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [Sails.js - Blueprint API](https://sailsjs.com/documentation/concepts/blueprints)

---

**Prochaine étape** : [Étape 6 - Bonus Web](../etape-6-bonus-web/) - Interaction complète (toggle des tâches)
