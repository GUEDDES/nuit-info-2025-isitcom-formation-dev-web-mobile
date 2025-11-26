# Étape 5 : API POST - Envoi de données

## 🎯 Objectif

Après avoir récupéré les données de l'API (GET), nous allons maintenant apprendre à **envoyer des données** vers le backend en utilisant la méthode **POST**.

## 📚 Concepts abordés

- Requêtes HTTP POST avec `fetch()`
- Envoi de données JSON au backend
- Gestion des réponses du serveur
- Mise à jour de l'état après création

## 🔧 Modifications par rapport à l'étape 4

### Dans `App.jsx`

```jsx
// Nouvelle fonction pour ajouter une tâche via l'API
const ajouterTache = async (e) => {
  e.preventDefault();
  if (nouvelleTache.trim() === '') return;

  try {
    const response = await fetch('http://localhost:1337/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: nouvelleTache,
        completed: false
      })
    });

    if (response.ok) {
      const tacheCreee = await response.json();
      setTaches([...taches, tacheCreee]);
      setNouvelleTache('');
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout:', error);
  }
};
```

## 🚀 Démarrage

### 1. Backend (Terminal 1)
```bash
cd ../etape-0-backend/todo-api
npm start
```

### 2. Frontend (Terminal 2)
```bash
cd etape-5-api-post
npm install
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173)

## ✅ Résultat attendu

- Formulaire fonctionnel qui envoie les données au backend
- Les tâches ajoutées apparaissent immédiatement dans la liste
- Les données sont persistées dans la base de données
- Les tâches restent après rechargement de la page

## 🔍 Points clés

1. **Method POST** : Indique qu'on envoie des données
2. **Headers** : Spécifie qu'on envoie du JSON
3. **Body** : Contient les données à envoyer (stringify)
4. **Response.ok** : Vérifie que la requête a réussi
5. **Mise à jour état** : Ajoute la nouvelle tâche à la liste

## 📖 Ressources

- [MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [MDN - POST](https://developer.mozilla.org/fr/docs/Web/HTTP/Methods/POST)

---

**Prochaine étape** : [Étape 6 - Bonus Web (Toggle)](../etape-6-bonus-web/)
