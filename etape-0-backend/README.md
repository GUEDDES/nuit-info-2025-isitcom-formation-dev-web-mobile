# Étape 0 : Backend Express via Sails.js

## 🎯 Objectif

Créer une API REST fonctionnelle pour gérer des "tâches" en moins de 5 minutes.

## 🛠️ Qu'est-ce que Sails.js ?

Sails.js est un framework MVC pour Node.js qui génère automatiquement une API REST complète avec toutes les routes CRUD (Create, Read, Update, Delete).

## 🚀 Installation et création

### 1. Installer Sails.js globalement

```bash
npm install -g sails
```

### 2. Créer un nouveau projet API

```bash
sails new task-api --no-frontend
cd task-api
```

L'option `--no-frontend` crée uniquement l'API sans interface utilisateur.

### 3. Générer un modèle et un contrôleur

```bash
sails generate api task title:string isCompleted:boolean
```

Cette commande crée :
- **Modèle** : `api/models/Task.js`
- **Contrôleur** : `api/controllers/TaskController.js`

### 4. Lancer le serveur

```bash
sails lift
```

L'API est maintenant disponible sur **http://localhost:1337**

## 📡 Routes automatiquement créées

Sails.js génère automatiquement ces routes REST :

| Méthode | Route | Action |
|---------|----------------------|----------------------------------|
| GET | `/task` | Récupérer toutes les tâches |
| GET | `/task/:id` | Récupérer une tâche par ID |
| POST | `/task` | Créer une nouvelle tâche |
| PATCH | `/task/:id` | Mettre à jour une tâche |
| DELETE | `/task/:id` | Supprimer une tâche |

## 🧪 Test avec cURL ou Postman

### Créer une tâche

```bash
curl -X POST http://localhost:1337/task \
  -H "Content-Type: application/json" \
  -d '{"title":"Apprendre React","isCompleted":false}'
```

### Récupérer toutes les tâches

```bash
curl http://localhost:1337/task
```

### Mettre à jour une tâche

```bash
curl -X PATCH http://localhost:1337/task/1 \
  -H "Content-Type: application/json" \
  -d '{"isCompleted":true}'
```

### Supprimer une tâche

```bash
curl -X DELETE http://localhost:1337/task/1
```

## 📁 Structure du projet

```
task-api/
├── api/
│   ├── controllers/
│   │   └── TaskController.js    # Contrôleur (logique métier)
│   └── models/
│       └── Task.js              # Modèle (structure des données)
├── config/
│   ├── routes.js            # Configuration des routes
│   └── datastores.js        # Configuration BDD
└── package.json
```

## ⚙️ Configuration CORS (important pour le frontend)

Pour permettre aux applications frontend (React web et mobile) de communiquer avec l'API :

1. Ouvrir `config/security.js`
2. Modifier la configuration CORS :

```javascript
cors: {
  allRoutes: true,
  allowOrigins: '*',
  allowCredentials: false,
}
```

## 💾 Persistance des données

Par défaut, Sails utilise **sails-disk** (stockage en mémoire). Les données sont perdues au redémarrage.

Pour une vraie base de données :
- **PostgreSQL** : `npm install sails-postgresql`
- **MySQL** : `npm install sails-mysql`
- **MongoDB** : `npm install sails-mongo`

Puis configurer dans `config/datastores.js`.

## 🔍 Points clés à retenir

- **Blueprint Routes** : Routes REST automatiques pour tous les modèles
- **Convention over Configuration** : Moins de code, plus de productivité
- **Basé sur Express** : Toute la puissance d'Express.js
- **Websockets intégrés** : Communication temps réel avec Socket.io

## ➡️ Prochaine étape

Maintenant que notre API est prête, passons au **frontend web avec React et Vite** !

➡️ [Aller à l'étape 1 : UI Statique](../etape-1-ui-statique/)
