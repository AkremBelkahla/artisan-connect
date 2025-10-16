# Artisan Connect

Plateforme web moderne de mise en relation entre particuliers et artisans qualifiés. Trouvez facilement des professionnels de confiance près de chez vous.

## 🚀 Fonctionnalités

- **Recherche d'artisans** : Recherche par métier, localisation et disponibilité
- **Profils détaillés** : Consultez les profils, avis et réalisations des artisans
- **Carte interactive** : Visualisez les artisans disponibles sur une carte (Leaflet)
- **Système d'avis** : Notations et commentaires clients
- **Chatbot intelligent** : Assistance en temps réel
- **Espace artisan** : Interface dédiée pour les professionnels
- **Authentification** : Système de connexion sécurisé via Supabase

## 🛠️ Technologies

- **Frontend** : React 18 + TypeScript
- **Build Tool** : Vite
- **UI Framework** : shadcn/ui + Tailwind CSS
- **Routing** : React Router DOM
- **Backend** : Supabase (Auth + Database)
- **Carte** : Leaflet + React Leaflet
- **Formulaires** : React Hook Form + Zod
- **State Management** : TanStack Query (React Query)
- **Icons** : Lucide React

## 📦 Installation

### Prérequis

- Node.js 18+ et npm (ou yarn/pnpm)
- Un compte Supabase (pour la base de données)

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/AkremBelkahla/artisan-connect.git

# Naviguer dans le dossier
cd artisan-connect

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# Créer un fichier .env à la racine et ajouter vos clés Supabase
# VITE_SUPABASE_URL=votre_url_supabase
# VITE_SUPABASE_ANON_KEY=votre_clé_anon

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## 📝 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Build de développement
npm run build:dev

# Prévisualisation du build
npm run preview

# Linting
npm run lint
```

## 🗂️ Structure du projet

```
artisan-connect/
├── src/
│   ├── assets/          # Images et ressources
│   ├── components/      # Composants réutilisables
│   │   └── ui/         # Composants shadcn/ui
│   ├── data/           # Données statiques
│   ├── hooks/          # Hooks personnalisés
│   ├── integrations/   # Intégrations externes (Supabase)
│   ├── lib/            # Utilitaires
│   ├── pages/          # Pages de l'application
│   └── main.tsx        # Point d'entrée
├── public/             # Fichiers statiques
└── supabase/          # Configuration Supabase
```

## 🚀 Déploiement

### Netlify / Vercel

1. Connectez votre dépôt GitHub
2. Configurez les variables d'environnement
3. Build command : `npm run build`
4. Publish directory : `dist`

### Variables d'environnement requises

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Akrem Belkahla**
- GitHub: [@AkremBelkahla](https://github.com/AkremBelkahla)
