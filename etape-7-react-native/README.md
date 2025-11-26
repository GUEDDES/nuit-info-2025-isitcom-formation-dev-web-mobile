# Étape 7 : Application Mobile avec React Native et Expo

## 🎯 Objectifs

Dans cette étape finale, nous allons créer une application mobile native en réutilisant **90% du code React** que nous avons écrit pour le web.

## 📱 Concepts abordés

- L'écosystème **Expo** pour React Native
- Les composants natifs (`View`, `Text`, `TextInput`, `Button`, `FlatList`)
- Réutilisation de la logique métier React
- Différences entre composants web et natifs
- Styles avec StyleSheet

## 🚀 Installation et lancement

### Prérequis

- Node.js installé
- Backend Sails.js lancé (étape 0) sur `http://localhost:1337`

### Installation

```bash
cd etape-7-react-native
npm install
```

### Démarrage

```bash
npm start
```

Ensuite, vous pouvez :
- Scanner le QR code avec l'application **Expo Go** sur votre smartphone
- Appuyer sur `a` pour ouvrir sur un émulateur Android
- Appuyer sur `i` pour ouvrir sur un simulateur iOS (Mac uniquement)

## 📂 Structure du projet

```
etape-7-react-native/
├── App.js                 # Composant principal de l'application
├── app.json              # Configuration Expo
├── package.json          # Dépendances
├── babel.config.js       # Configuration Babel
└── README.md            # Ce fichier
```

## 🔑 Points clés

### Différences Web vs Mobile

| Web (React) | Mobile (React Native) |
|-------------|----------------------|
| `<div>` | `<View>` |
| `<p>`, `<h1>`, `<span>` | `<Text>` |
| `<input>` | `<TextInput>` |
| `<button>` | `<Button>` ou `<TouchableOpacity>` |
| CSS, className | StyleSheet |
| `map()` → JSX | `<FlatList>` (optimisé) |

### Code réutilisable

✅ **Réutilisable sans modification :**
- `useState`, `useEffect`
- Logique métier (gestion d'état)
- Appels API (`fetch`)
- Fonctions utilitaires

❌ **À adapter :**
- Composants UI (`div` → `View`, etc.)
- Styles (CSS → StyleSheet)
- Navigation (react-router → react-navigation)

## 💡 Évolutions possibles

1. **Ajouter la navigation** avec `@react-navigation/native`
2. **Améliorer le design** avec des bibliothèques UI (React Native Paper, NativeBase)
3. **Ajouter des icônes** avec `@expo/vector-icons`
4. **Gérer le toggle** des tâches (comme l'étape 6 web)
5. **Ajouter des animations** avec `Animated` API
6. **Tester sur un vrai device** avec Expo Go

## 📚 Ressources

- [Documentation React Native](https://reactnative.dev/)
- [Documentation Expo](https://docs.expo.dev/)
- [Expo Go App](https://expo.dev/client)
- [React Native Directory](https://reactnative.directory/) - Bibliothèques compatibles

## 🎓 Ce que vous avez appris

- Comment créer une application mobile avec React Native
- L'écosystème Expo et ses avantages
- La réutilisation de code entre web et mobile
- Les différences entre composants web et natifs
- Le système de styles de React Native

---

**Félicitations ! 🎉** Vous avez maintenant une stack complète : Backend (Sails.js) + Web (React/Vite) + Mobile (React Native/Expo)
