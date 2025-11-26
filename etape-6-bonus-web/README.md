# Étape 6 : Bonus Web - Interaction complète

## 🎯 Objectif

Compléter l'application avec la fonctionnalité de **toggle** (cocher/décocher) et la **suppression** des tâches via l'API.

## 📚 Concepts abordés

- Requêtes HTTP PUT (mise à jour)
- Requêtes HTTP DELETE (suppression)
- Gestion d'événements onClick
- Mise à jour optimiste de l'interface

## 🔧 Nouvelles fonctionnalités

### 1. Toggle de tâche (PUT)

```jsx
const toggleTache = async (id, completed) => {
  try {
    const response = await fetch(`http://localhost:1337/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed })
    });

    if (response.ok) {
      setTaches(taches.map(t => 
        t.id === id ? { ...t, completed: !completed } : t
      ));
    }
  } catch (error) {
    console.error('Erreur toggle:', error);
  }
};
```

### 2. Suppression de tâche (DELETE)

```jsx
const supprimerTache = async (id) => {
  try {
    const response = await fetch(`http://localhost:1337/todos/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      setTaches(taches.filter(t => t.id !== id));
    }
  } catch (error) {
    console.error('Erreur suppression:', error);
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
cd etape-6-bonus-web
npm install
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173)

## ✅ Résultat attendu

- ✅ Ajout de tâches (POST)
- ✅ Affichage des tâches (GET)
- ✅ Toggle completed (PUT)
- ✅ Suppression de tâches (DELETE)
- ✅ Interface réactive et moderne

## 🔍 Points clés

1. **PUT** : Mise à jour partielle d'une ressource
2. **DELETE** : Suppression d'une ressource
3. **Template literals** : Utilisation de backticks pour les URLs dynamiques
4. **Array methods** : `map()` pour modifier, `filter()` pour supprimer
5. **Spread operator** : `{...t}` pour copier un objet

## 🎉 Félicitations !

Vous avez maintenant une application web complète et fonctionnelle avec CRUD complet !

---

**Prochaine étape** : [Étape 7 - React Native (Mobile)](../etape-7-react-native/)
