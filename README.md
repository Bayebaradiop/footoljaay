# FOTOL JAY - Plateforme de Vente de Produits d'Occasion

![FOTOL JAY](https://img.shields.io/badge/FOTOL%20JAY-E-commerce-orange)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Angular](https://img.shields.io/badge/Angular-20+-red)

## 📋 Table des Matières

- [À Propos](#-à-propos)
- [Technologies Utilisées](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Démarrage](#-démarrage)
- [Scripts Disponibles](#-scripts-disponibles)
- [Structure du Projet](#-structure-du-projet)
- [API Documentation](#-api-documentation)
- [Contribution](#-contribution)
- [Licence](#-licence)

## 🎯 À Propos

FOTOL JAY est une plateforme moderne de vente de produits d'occasion développée avec Node.js/TypeScript pour le backend et Angular pour le frontend. L'application permet aux utilisateurs de vendre et d'acheter des produits d'occasion avec un système d'authentification robuste, de gestion des images via Cloudinary, et une interface utilisateur moderne.

## 🛠 Technologies Utilisées

### Backend
- **Node.js** avec TypeScript
- **Express.js** - Framework web
- **Prisma** - ORM pour base de données
- **MySQL** - Base de données
- **JWT** - Authentification
- **Cloudinary** - Gestion des images
- **Bcrypt** - Chiffrement des mots de passe
- **Nodemailer** - Envoi d'emails

### Frontend
- **Angular 20+** - Framework frontend
- **TypeScript** - Language principal
- **CSS/SCSS** - Styles avec système de design premium
- **Playwright** - Tests end-to-end

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
- **npm** ou **yarn**
- **MySQL** (version 8 ou supérieure)
- **Git**

## 🚀 Installation


1. **Cloner le repository**
   ```bash
   git clone https://github.com/VotreUsername/fottoljay.git
   cd fottoljay
   ```

2. **Installer les dépendances du backend**
   ```bash
   cd back
   npm install
   ```

3. **Ignorer le fichier .env et configurer l'environnement**
   - Le fichier `.env` est ignoré par Git pour la sécurité.
   - Copiez le fichier exemple et remplissez vos variables :
   ```bash
   cp .env.example .env
   # Modifiez .env avec vos propres valeurs
   ```

4. **Initialiser la base de données et générer le client Prisma**
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

5. **Peupler la base avec des données de test (Seeder principal)**
   ```bash
   npm run prisma:seed
   ```

6. **Exécuter les seeders ou scripts extras (exemple : mise à jour des mots de passe)**
   ```bash
   npx ts-node src/scripts/update-passwords.ts
   ```

7. **Installer les dépendances du frontend**
   ```bash
   cd ../front
   npm install
   ```

## ⚙ Configuration

### Backend Configuration

1. **Créer le fichier d'environnement**
   ```bash
   cd back
   cp .env.example .env
   ```

2. **Configurer les variables d'environnement dans `back/.env`**
   ```env
   # Base de données
   DATABASE_URL="mysql://username:password@localhost:3306/fotoljay"
   
   # JWT
   JWT_SECRET="votre_jwt_secret_très_sécurisé"
   JWT_REFRESH_SECRET="votre_refresh_secret_très_sécurisé"
   
   # Cloudinary (pour les images)
   CLOUDINARY_CLOUD_NAME="votre_cloud_name"
   CLOUDINARY_API_KEY="votre_api_key"
   CLOUDINARY_API_SECRET="votre_api_secret"
   
   # Email (optionnel)
   EMAIL_HOST="smtp.gmail.com"
   EMAIL_PORT=587
   EMAIL_USER="votre_email@gmail.com"
   EMAIL_PASS="votre_mot_de_passe_app"
   
   # Serveur
   PORT=3000
   NODE_ENV="development"
   ```

3. **Initialiser la base de données**
   ```bash
   # Générer le client Prisma
   npm run prisma:generate
   
   # Exécuter les migrations
   npm run prisma:migrate
   
   # (Optionnel) Peupler la base avec des données de test
   npm run prisma:seed
   ```

### Frontend Configuration

Le frontend se configure automatiquement pour communiquer avec le backend local. Aucune configuration supplémentaire n'est nécessaire pour le développement.

## 🏃‍♂️ Démarrage

### Démarrage Rapide (Mode Développement)

1. **Démarrer le backend** (Terminal 1)
   ```bash
   cd back
   npm run dev
   ```
   Le serveur backend sera accessible sur `http://localhost:3000`

2. **Démarrer le frontend** (Terminal 2)
   ```bash
   cd front
   npm start
   ```
   L'application frontend sera accessible sur `http://localhost:4200`

### Démarrage en Production

1. **Compiler le backend**
   ```bash
   cd back
   npm run build
   npm start
   ```

2. **Compiler le frontend**
   ```bash
   cd front
   npm run build
   ```

## 📜 Scripts Disponibles

### Backend (`back/`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Démarre le serveur en mode développement avec auto-reload |
| `npm run build` | Compile le TypeScript en JavaScript |
| `npm start` | Démarre le serveur en mode production |
| `npm run prisma:migrate` | Exécute les migrations de base de données |
| `npm run prisma:generate` | Génère le client Prisma |
| `npm run prisma:studio` | Ouvre l'interface graphique Prisma Studio |
| `npm run prisma:seed` | Peuple la base de données avec des données de test |

### Frontend (`front/`)

| Script | Description |
|--------|-------------|
| `npm start` | Démarre le serveur de développement Angular |
| `npm run build` | Compile l'application pour la production |
| `npm test` | Lance les tests unitaires |
| `npm run test:e2e` | Lance les tests end-to-end avec Playwright |
| `npm run lint` | Vérifie le code avec ESLint |

## 📁 Structure du Projet

```
fottoljay/
├── back/                          # Backend (Node.js/Express)
│   ├── src/
│   │   ├── controllers/           # Contrôleurs de l'API
│   │   ├── middlewares/           # Middlewares (auth, validation, etc.)
│   │   ├── routes/                # Routes de l'API
│   │   ├── services/              # Logique métier
│   │   ├── utils/                 # Utilitaires (email, jwt, etc.)
│   │   └── server.ts              # Point d'entrée du serveur
│   ├── prisma/
│   │   ├── schema.prisma          # Schéma de base de données
│   │   ├── migrations/            # Migrations de base de données
│   │   └── seed.ts                # Données de test
│   └── public/uploads/            # Fichiers uploadés
│
├── front/                         # Frontend (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/        # Composants Angular
│   │   │   ├── services/          # Services Angular
│   │   │   ├── models/            # Modèles TypeScript
│   │   │   └── schemas/           # Schémas de validation
│   │   ├── assets/                # Ressources statiques
│   │   └── styles.css             # Styles globaux
│   └── e2e/                       # Tests end-to-end
│
└── README.md                      # Ce fichier
```

## 📚 API Documentation

L'API REST est documentée dans `back/API_DOCUMENTATION.md`. Voici les endpoints principaux :

### Authentification
- `POST /api/auth/login` - Connexion utilisateur
- `POST /api/auth/register` - Inscription utilisateur
- `POST /api/auth/refresh` - Renouvellement du token

### Produits
- `GET /api/products` - Liste des produits
- `POST /api/products` - Créer un produit (authentifié)
- `GET /api/products/:id` - Détails d'un produit
- `PUT /api/products/:id` - Modifier un produit (propriétaire)
- `DELETE /api/products/:id` - Supprimer un produit (propriétaire)

### Vendeurs
- `POST /api/sellers/register` - Inscription vendeur
- `GET /api/sellers/profile` - Profil vendeur (authentifié)
- `PUT /api/sellers/profile` - Modifier profil vendeur

Pour tester l'API, ouvrez `back/test-api.html` dans votre navigateur.

## 🛡 Sécurité

Le projet implémente plusieurs mesures de sécurité :

- **JWT** pour l'authentification
- **Bcrypt** pour le hachage des mots de passe
- **Helmet** pour la sécurité des headers HTTP
- **CORS** configuré pour le développement et la production
- **Validation** des données d'entrée avec express-validator
- **RBAC** (Role-Based Access Control) pour les permissions

## 🔧 Dépannage

### Problèmes Courants

1. **Erreur de connexion à la base de données**
   - Vérifiez que MySQL est démarré
   - Vérifiez les credentials dans le `.env`
   - Assurez-vous que la base de données existe

2. **Erreur Prisma**
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

3. **Port déjà utilisé**
   ```bash
   # Tuer le processus sur le port 3000
   lsof -ti:3000 | xargs kill -9
   
   # Ou changer le port dans .env
   PORT=3001
   ```

4. **Problèmes d'installation des dépendances**
   ```bash
   # Nettoyer le cache npm
   npm cache clean --force
   
   # Supprimer node_modules et réinstaller
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche pour votre feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème :

- Ouvrez une [issue](https://github.com/VotreUsername/fottoljay/issues)
- Consultez la [documentation API](back/API_DOCUMENTATION.md)
- Vérifiez les [guides d'implémentation](front/IMPLEMENTATION.md)

---

**Développé avec ❤️ pour la communauté FOTOL JAY**