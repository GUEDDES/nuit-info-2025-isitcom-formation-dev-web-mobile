# Étape 6 : Bonus Web - Interaction complète

## 🎯 Objectif
Ajouter des fonctionnalités complètes d'interaction : **marquer comme complétée** et **supprimer** des tâches.

## 📚 Concepts couverts
- Requête HTTP PATCH (mise à jour)
- Requête HTTP DELETE (suppression)
- Mise à jour optimiste de l'UI
- Gestion d'événements multiples
- Styles conditionnels en React

## ✨ Nouvelles fonctionnalités

### 1. Toggle (marquer comme complétée)
- Cliquer sur une tâche la marque comme complétée
- Style barré et grisé pour les tâches terminées
- Synchronisation avec le serveur (PATCH)

### 2. Suppression
- Bouton × pour supprimer une tâche
- Confirmation visuelle immédiate
- Synchronisation avec le serveur (DELETE)

## 🆕 Nouveautés dans le code

### 1. Fonction Toggle

```javascript
const handleToggleTask = async (taskId) => {
  // Trouver la tâche actuelle
  const task = tasks.find(t => t.id === taskId);
  
  try {
    // Envoyer la mise à jour au serveur
    const response = await fetch(`${API_URL}/${taskId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isCompleted: !task.isCompleted,
      }),
    });
    
    const updatedTask = await response.json();
    
    // Mettre à jour l'état local
    setTasks(tasks.map(t => 
      t.id === taskId ? updatedTask : t
    ));
  } catch (err) {
    console.error("Erreur lors du toggle:", err);
  }
};
```

### 2. Fonction Delete

```javascript
const handleDeleteTask = async (taskId) => {
  try {
    await fetch(`${API_URL}/${taskId}`, {
      method: 'DELETE',
    });
    
    // Supprimer de l'état local
    setTasks(tasks.filter(t => t.id !== taskId));
  } catch (err) {
    console.error("Erreur lors de la suppression:", err);
  }
};
```

### 3. Rendu avec styles conditionnels

```javascript
<li 
  key={task.id} 
  className={task.isCompleted ? 'completed' : ''}
  onClick={() => handleToggleTask(task.id)}
>
  <span>{task.title}</span>
  <button 
    onClick={(e) => {
      e.stopPropagation(); // Éviter le toggle
      handleDeleteTask(task.id);
    }}
  >
    ×
  </button>
</li>
```

## 📝 Structure du projet

```
etape-6-bonus-web/
├── README.md
├── package.json
├── vite.config.js
├── index.html
└── src/
    ├── App.jsx      ← Logique complète
    ├── App.css      ← Styles améliorés
    └── main.jsx
```

## 🚀 Installation et lancement

### 1. Installer les dépendances
```bash
cd etape-6-bonus-web
npm install
```

### 2. Lancer le serveur backend
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

1. **Ajouter des tâches** : Créez plusieurs tâches
2. **Marquer comme complétée** : Cliquez sur une tâche pour la barrer
3. **Supprimer** : Cliquez sur le bouton ×
4. **Recharger la page** : Vérifiez que les modifications persistent

## 💡 Points techniques importants

### Méthodes HTTP utilisées
- **GET** : Récupérer toutes les tâches
- **POST** : Créer une nouvelle tâche
- **PATCH** : Mettre à jour une tâche existante
- **DELETE** : Supprimer une tâche

### `e.stopPropagation()`
Empêche l'événement de remonter au parent. Sans ça, cliquer sur le bouton supprimer déclencherait aussi le toggle.

### `map` vs `filter`
- **`map`** : Transformer/modifier des éléments (toggle)
- **`filter`** : Retirer des éléments (delete)

## 🎯 API complète

```
GET    /task         → Liste toutes les tâches
POST   /task         → Crée une tâche
PATCH  /task/:id     → Met à jour une tâche
DELETE /task/:id     → Supprime une tâche
```

## 🎓 Exercices bonus

1. Ajouter un compteur de tâches (Total / Complétées)
2. Ajouter un bouton "Tout supprimer"
3. Ajouter la possibilité de modifier le texte d'une tâche
4. Ajouter des catégories de tâches
5. Implémenter un filtre (Toutes / Actives / Complétées)

## 📚 Ressources

- [MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [React - Gestion des événements](https://react.dev/learn/responding-to-events)
- [MDN - stopPropagation](https://developer.mozilla.org/fr/docs/Web/API/Event/stopPropagation)

---

**Prochaine étape** : [Étape 7 - React Native](../etape-7-react-native/) - Application mobile avec Expo
