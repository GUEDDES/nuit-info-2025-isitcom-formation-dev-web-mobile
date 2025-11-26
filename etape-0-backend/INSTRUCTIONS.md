# Instructions d'installation - Backend Sails.js

## Méthode 1 : Génération complète (recommandée)

Si vous démarrez depuis zéro, suivez ces étapes :

```bash
# 1. Installer Sails globalement
npm install -g sails

# 2. Créer le projet
sails new task-api --no-frontend

# 3. Entrer dans le dossier
cd task-api

# 4. Générer le modèle Task
sails generate api task title:string isCompleted:boolean

# 5. Configurer CORS (important !)
# Éditer config/security.js et modifier :
```

```javascript
// config/security.js
module.exports.security = {
  cors: {
    allRoutes: true,
    allowOrigins: '*',
    allowCredentials: false,
  }
};
```

```bash
# 6. Lancer le serveur
sails lift
```

## Méthode 2 : Utilisation de ce dossier

Si vous clonez ce dépôt :

```bash
# 1. Installer Sails globalement (si pas déjà fait)
npm install -g sails

# 2. Créer le projet dans ce dossier
# (depuis le dossier etape-0-backend)
sails new . --force

# 3. Générer l'API Task
sails generate api task title:string isCompleted:boolean

# 4. Configurer CORS (voir Méthode 1)

# 5. Lancer
sails lift
```

## Vérification

Une fois le serveur lancé, testez :

```bash
# Test GET
curl http://localhost:1337/task

# Test POST
curl -X POST http://localhost:1337/task \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","isCompleted":false}'
```

Vous devriez recevoir une réponse JSON.

## Problèmes courants

### Port 1337 déjà utilisé

```bash
# Modifier le port dans config/env/development.js
port: 1338,
```

### Erreur CORS

Assurez-vous que `config/security.js` est bien configuré avec `allRoutes: true`.

### Module introuvable

```bash
npm install
```
