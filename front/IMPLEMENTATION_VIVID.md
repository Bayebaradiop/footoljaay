# 🚀 Guide d'Implémentation - FOTOLJAY VIVID

Ce guide détaille les modifications à apporter à chaque composant Angular pour implémenter le nouveau thème FOTOLJAY VIVID.

## 📑 Table des matières

1. [Configuration initiale](#configuration-initiale)
2. [Mise à jour des composants communs](#mise-à-jour-des-composants-communs)
   - [Navbar](#navbar)
   - [Footer](#footer)
   - [Theme Selector](#theme-selector)
3. [Pages principales](#pages-principales)
   - [Home](#home)
   - [Sell](#sell)
   - [Login](#login)
   - [Seller Auth](#seller-auth)
   - [Admin](#admin)
4. [Composants réutilisables](#composants-réutilisables)
   - [Cards](#cards)
   - [Formulaires](#formulaires)
   - [Boutons](#boutons)
5. [Tests et validation](#tests-et-validation)

---

## Configuration initiale

### 1. Installation des dépendances

Ajoutez les polices et icônes nécessaires:

```bash
npm install bootstrap-icons --save
```

### 2. Mise à jour du angular.json

```json
"styles": [
  "src/styles.css",
  "src/fotoljay-vivid.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.css"
]
```

### 3. Mise à jour de styles.css

```css
/* Import des polices */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

/* Variables globales du thème */
:root {
  /* La majorité des variables sont dans fotoljay-vivid.css */
  /* Ajoutez ici des variables spécifiques à l'application */
}
```

### 4. Mise à jour de index.html

```html
<head>
  <!-- ... autres balises -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
  <app-root></app-root>
</body>
```

---

## Mise à jour des composants communs

### Navbar

**Fichier:** `src/app/components/home/home.html` (partie navigation)

**Avant:**
```html
<nav class="navbar">
  <div class="navbar-left">
    <a class="navbar-brand" href=" ">
      <img src="/assets/images/logo.png" alt="Fotoljay Logo" class="brand-logo" />
      <span class="brand-name">Fotoljay</span>
    </a>
  </div>

  <div class="navbar-right">
    <app-theme-selector #themeSelector></app-theme-selector>
    <a routerLink="/seller-auth" class="navbar-link">Espace Vendeur</a>
    <a routerLink="/sell" class="btn btn-primary">
      <lucide-icon [img]="Plus" [size]="18"></lucide-icon>
      Vendre un produit
    </a>
    <a routerLink="/login" class="navbar-link">Connexion Admin</a>
  </div>

  <!-- Mobile Menu Button -->
  <button class="mobile-menu-button" (click)="toggleMobileMenu()" aria-label="Menu">
    <lucide-icon [img]="Menu" [size]="24"></lucide-icon>
  </button>
</nav>
```

**Après:**
```html
<header class="navbar">
  <div class="container navbar-container">
    <a href="" class="navbar-logo">
      <img src="/assets/images/logo.png" alt="Fotoljay Logo" class="brand-logo" />
      FOTOLJAY
    </a>
    
    <nav class="navbar-menu">
      <a href="" class="navbar-menu-item active">Accueil</a>
      <a href="#categories" class="navbar-menu-item">Catégories</a>
      <a routerLink="/seller-auth" class="navbar-menu-item">Espace vendeur</a>
      <a routerLink="/login" class="navbar-menu-item">Admin</a>
    </nav>
    
    <div class="navbar-right">
      <app-theme-selector></app-theme-selector>
      <app-notification-bell></app-notification-bell>
      <a routerLink="/sell" class="btn btn-primary">
        <i class="bi bi-plus-circle"></i>
        Vendre
      </a>
    </div>
    
    <button class="navbar-toggle" (click)="toggleMobileMenu()" aria-label="Menu">
      <i class="bi" [ngClass]="{'bi-list': !mobileMenuOpen(), 'bi-x-lg': mobileMenuOpen()}"></i>
    </button>
  </div>
</header>

<!-- Mobile Menu -->
@if (mobileMenuOpen()) {
<div class="navbar-menu-mobile open" (click)="$event.stopPropagation()">
  <a href="" class="navbar-menu-item active" (click)="closeMobileMenu()">Accueil</a>
  <a href="#categories" class="navbar-menu-item" (click)="closeMobileMenu()">Catégories</a>
  <a routerLink="/seller-auth" class="navbar-menu-item" (click)="closeMobileMenu()">Espace vendeur</a>
  <a routerLink="/login" class="navbar-menu-item" (click)="closeMobileMenu()">Admin</a>
  <div class="mt-4">
    <app-theme-selector></app-theme-selector>
  </div>
  <a routerLink="/sell" class="btn btn-primary mt-6" (click)="closeMobileMenu()">
    <i class="bi bi-plus-circle"></i>
    Vendre un produit
  </a>
</div>
}
```

### Footer

Créer un nouveau composant Footer:

**Fichier:** `src/app/components/footer/footer.html`

```html
<footer class="section" style="background-color: var(--neutral-800); color: white;">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <a href="#" class="navbar-logo mb-4">
          <img src="/assets/images/logo-white.png" alt="Fotoljay Logo" class="brand-logo" />
          FOTOLJAY
        </a>
        <p class="text-neutral-400">La plateforme #1 de petites annonces. Achetez et vendez facilement vos produits.</p>
        
        <div class="flex gap-4 mt-4">
          <a href="#" class="text-neutral-400 hover:text-primary">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#" class="text-neutral-400 hover:text-primary">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#" class="text-neutral-400 hover:text-primary">
            <i class="bi bi-twitter-x"></i>
          </a>
          <a href="#" class="text-neutral-400 hover:text-primary">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      
      <div>
        <h4 class="text-lg font-bold mb-4">Liens rapides</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-neutral-400 hover:text-white">Accueil</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Catégories</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Premium</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Blog</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-bold mb-4">Assistance</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-neutral-400 hover:text-white">Aide</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Contact</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">FAQ</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Signaler un abus</a></li>
        </ul>
      </div>
      
      <div>
        <h4 class="text-lg font-bold mb-4">Légal</h4>
        <ul class="space-y-2">
          <li><a href="#" class="text-neutral-400 hover:text-white">Conditions d'utilisation</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Politique de confidentialité</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Politique de cookies</a></li>
          <li><a href="#" class="text-neutral-400 hover:text-white">Mentions légales</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t border-neutral-700 mt-8 pt-8 text-center text-neutral-400">
      <p>© 2025 FOTOLJAY. Tous droits réservés.</p>
    </div>
  </div>
</footer>
```

**Fichier:** `src/app/components/footer/footer.ts`

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
})
export class FooterComponent {
  // Implémentation ici si nécessaire
}
```

### Theme Selector

**Fichier:** `src/app/components/theme-selector/theme-selector.html`

**Avant:**
```html
<div class="theme-selector">
  <button
    (click)="toggleThemeMenu()"
    class="theme-button"
    aria-label="Changer le thème"
  >
    <lucide-icon [img]="Palette" [size]="22"></lucide-icon>
  </button>

  @if (themeMenuOpen()) {
  <div
    class="theme-menu"
    (click)="$event.stopPropagation()"
  >
    <div
      class="theme-option"
      [class.selected]="currentTheme() === 'default'"
      (click)="selectTheme('default')"
    >
      <div class="color-preview default-theme"></div>
      <span>Orange Corail</span>
    </div>
    <div
      class="theme-option"
      [class.selected]="currentTheme() === 'ocean'"
      (click)="selectTheme('ocean')"
    >
      <div class="color-preview ocean-theme"></div>
      <span>Bleu Océan</span>
    </div>
  </div>
  }
</div>
```

**Après:**
```html
<div class="theme-selector">
  <button
    (click)="toggleThemeMenu()"
    class="btn btn-ghost btn-icon-only"
    aria-label="Changer le thème"
  >
    <i class="bi bi-palette"></i>
  </button>

  @if (themeMenuOpen()) {
  <div
    class="theme-menu card card-glass shadow-lg"
    (click)="$event.stopPropagation()"
  >
    <div class="p-2">
      <div
        class="theme-option"
        [class.selected]="currentTheme() === 'default'"
        (click)="selectTheme('default')"
      >
        <div class="color-preview default-theme"></div>
        <span>Orange Corail</span>
      </div>
      <div
        class="theme-option"
        [class.selected]="currentTheme() === 'ocean'"
        (click)="selectTheme('ocean')"
      >
        <div class="color-preview ocean-theme"></div>
        <span>Bleu Océan</span>
      </div>
      <div
        class="theme-option"
        [class.selected]="currentTheme() === 'vivid'"
        (click)="selectTheme('vivid')"
      >
        <div class="color-preview vivid-theme"></div>
        <span>Vivid</span>
      </div>
      <div class="theme-option" (click)="toggleDarkMode()">
        <div class="color-preview" [ngClass]="darkMode() ? 'light-mode' : 'dark-mode'"></div>
        <span>{{ darkMode() ? 'Mode Clair' : 'Mode Sombre' }}</span>
      </div>
    </div>
  </div>
  }
</div>
```

**Fichier:** `src/app/components/theme-selector/theme-selector.ts` (modifications):

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-selector.html',
})
export class ThemeSelectorComponent {
  themeMenuOpen = signal(false);
  currentTheme = signal('vivid'); // Changé à 'vivid' par défaut
  darkMode = signal(false);

  constructor() {
    // Vérifiez les préférences sauvegardées
    const savedTheme = localStorage.getItem('theme') || 'vivid';
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    
    this.currentTheme.set(savedTheme);
    this.darkMode.set(savedDarkMode);
    
    this.applyTheme(savedTheme);
    this.applyDarkMode(savedDarkMode);
  }

  toggleThemeMenu(): void {
    this.themeMenuOpen.update(open => !open);
  }

  selectTheme(theme: string): void {
    this.currentTheme.set(theme);
    this.applyTheme(theme);
    localStorage.setItem('theme', theme);
    this.themeMenuOpen.set(false);
  }
  
  toggleDarkMode(): void {
    this.darkMode.update(isDark => !isDark);
    this.applyDarkMode(!this.darkMode());
    localStorage.setItem('darkMode', String(this.darkMode()));
  }
  
  applyTheme(theme: string): void {
    document.body.classList.remove('theme-default', 'theme-ocean', 'theme-vivid');
    document.body.classList.add(`theme-${theme}`);
  }
  
  applyDarkMode(isDark: boolean): void {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
```

Ajoutez également le CSS pour la sélection du thème Vivid:

**Fichier:** `src/app/components/theme-selector/theme-selector.css`

```css
/* Ajouter à vos styles existants */
.vivid-theme {
  background: linear-gradient(135deg, #FF0080 0%, #7C4DFF 100%);
}

.light-mode {
  background: #FCFCFD;
  border: 1px solid #E2E2EC;
}

.dark-mode {
  background: #1D1D27;
  border: 1px solid #3D3D4D;
}
```

---

## Pages principales

### Home

**Fichier:** `src/app/components/home/home.html`

La page d'accueil doit être entièrement refaite pour utiliser les nouveaux composants:

```html
<!-- Navigation (déjà mise à jour plus haut) -->
<!-- ... -->

<!-- Hero Section -->
<section class="hero">
  <div class="container hero-content">
    <h1 class="hero-title">Vos annonces prennent vie avec FOTOLJAY</h1>
    <p class="hero-subtitle">La meilleure plateforme pour acheter et vendre en toute simplicité</p>
    <div class="hero-buttons">
      <a href="#featured" class="btn btn-secondary">
        <i class="bi bi-search"></i>
        Découvrir les annonces
      </a>
      <a routerLink="/sell" class="btn btn-glow">
        <i class="bi bi-plus-circle"></i>
        Publier mon annonce
      </a>
    </div>
  </div>
</section>

<!-- Featured Products -->
<section class="section" id="featured">
  <div class="container">
    <h2 class="text-3xl mb-8">Annonces à la une</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      @for (product of featuredProducts(); track product.id) {
        <div class="card">
          <div class="card-img-container">
            <img [src]="product.imageUrl" class="card-img" [alt]="product.title">
            @if (product.isVip) {
              <span class="card-badge badge-vip">VIP</span>
            }
          </div>
          <div class="card-content">
            <h3 class="card-title">{{ product.title }}</h3>
            <p class="card-description">{{ product.description }}</p>
            <div class="card-price">{{ product.price | currency:'XOF':'symbol':'1.0-0' }}</div>
            <div class="card-footer">
              <span class="card-status" 
                    [ngClass]="{
                      'status-approved': product.status === 'approved',
                      'status-pending': product.status === 'pending',
                      'status-rejected': product.status === 'rejected'
                    }">
                {{ getStatusLabel(product.status) }}
              </span>
              <span class="card-views">
                <i class="bi bi-eye"></i>
                {{ product.views }} vues
              </span>
            </div>
          </div>
        </div>
      }
    </div>
    
    <div class="flex justify-center mt-8">
      <a href="#" class="btn btn-outline">Voir plus d'annonces</a>
    </div>
  </div>
</section>

<!-- How It Works -->
<section class="section" style="background-color: var(--neutral-100);">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-3xl mb-4">Comment vendre sur FOTOLJAY</h2>
        <p class="mb-6">Créez votre compte, publiez votre annonce, et entrez en contact avec des acheteurs potentiels en quelques clics seulement.</p>
        
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center bg-primary rounded-full text-white font-bold w-10 h-10">1</div>
          <div>
            <h4 class="text-lg font-bold mb-1">Créez votre compte</h4>
            <p class="text-neutral-600">Inscrivez-vous gratuitement en quelques secondes</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center justify-center bg-primary rounded-full text-white font-bold w-10 h-10">2</div>
          <div>
            <h4 class="text-lg font-bold mb-1">Publiez votre annonce</h4>
            <p class="text-neutral-600">Ajoutez photos et description détaillée</p>
          </div>
        </div>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="flex items-center justify-center bg-primary rounded-full text-white font-bold w-10 h-10">3</div>
          <div>
            <h4 class="text-lg font-bold mb-1">Vendez rapidement</h4>
            <p class="text-neutral-600">Échangez avec les acheteurs via notre messagerie</p>
          </div>
        </div>
        
        <a routerLink="/sell" class="btn btn-primary">Commencer maintenant</a>
      </div>
      
      <div>
        <img src="/assets/images/sell-illustration.png" alt="Vendre sur Fotoljay" class="rounded-2xl shadow-xl">
      </div>
    </div>
  </div>
</section>

<!-- Categories -->
<section class="section" id="categories">
  <div class="container">
    <h2 class="text-3xl text-center mb-2">Explorez nos catégories</h2>
    <p class="text-center text-neutral-600 mb-8">Trouvez exactement ce que vous cherchez parmi nos catégories populaires</p>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      @for (category of categories(); track category.id) {
        <a [href]="category.url" class="card card-glass">
          <div class="p-6 text-center">
            <i [class]="'bi bi-' + category.icon + ' text-4xl text-primary mb-4'"></i>
            <h3 class="text-lg font-bold">{{ category.name }}</h3>
            <p class="text-sm text-neutral-500">{{ category.count }} annonces</p>
          </div>
        </a>
      }
    </div>
  </div>
</section>

<!-- Premium Banner -->
<section class="section" style="background: var(--gradient-primary); color: white;">
  <div class="container text-center">
    <h2 class="text-3xl font-bold text-white mb-4">Devenez vendeur premium</h2>
    <p class="text-xl mb-8">Profitez d'une visibilité maximale et d'avantages exclusifs</p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="card card-glass">
        <div class="p-6 text-center">
          <i class="bi bi-star-fill text-4xl text-warning mb-4"></i>
          <h3 class="text-xl font-bold mb-2">Visibilité accrue</h3>
          <p>Vos annonces apparaissent en première page et sont mises en avant</p>
        </div>
      </div>
      
      <div class="card card-glass">
        <div class="p-6 text-center">
          <i class="bi bi-lightning-charge-fill text-4xl text-warning mb-4"></i>
          <h3 class="text-xl font-bold mb-2">Validation prioritaire</h3>
          <p>Vos annonces sont validées en priorité sous 2 heures</p>
        </div>
      </div>
      
      <div class="card card-glass">
        <div class="p-6 text-center">
          <i class="bi bi-graph-up-arrow text-4xl text-warning mb-4"></i>
          <h3 class="text-xl font-bold mb-2">Statistiques avancées</h3>
          <p>Suivez les performances de vos annonces en temps réel</p>
        </div>
      </div>
    </div>
    
    <a routerLink="/seller-auth" class="btn btn-glow mt-8">Devenir Premium</a>
  </div>
</section>

<!-- Footer (inclure le nouveau footer) -->
<app-footer></app-footer>
```

**Fichier:** `src/app/components/home/home.ts`

```typescript
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector';
import { NotificationBellComponent } from '../notification-bell/notification-bell';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  status: 'approved' | 'pending' | 'rejected';
  views: number;
  isVip: boolean;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  count: number;
  url: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent, ThemeSelectorComponent, NotificationBellComponent],
  templateUrl: './home.html',
})
export class HomeComponent {
  mobileMenuOpen = signal(false);
  
  featuredProducts = signal<Product[]>([
    {
      id: 1,
      title: 'iPhone 14 Pro Max - Comme neuf',
      description: 'Superbe iPhone 14 Pro Max 256Go. Aucune rayure, débloqué tout opérateur.',
      imageUrl: '/assets/images/products/iphone.jpg',
      price: 750000,
      status: 'approved',
      views: 145,
      isVip: true
    },
    {
      id: 2,
      title: 'Appartement meublé 3 pièces - Almadies',
      description: 'Bel appartement meublé avec 2 chambres, salon, cuisine équipée. Proche de la plage.',
      imageUrl: '/assets/images/products/apartment.jpg',
      price: 450000,
      status: 'approved',
      views: 87,
      isVip: false
    },
    {
      id: 3,
      title: 'Toyota Corolla 2022 - Automatique',
      description: 'Toyota Corolla modèle 2022, boîte automatique, climatisation, 12 000 km seulement.',
      imageUrl: '/assets/images/products/car.jpg',
      price: 12500000,
      status: 'pending',
      views: 36,
      isVip: false
    }
  ]);
  
  categories = signal<Category[]>([
    {
      id: 1,
      name: 'Téléphones',
      icon: 'phone',
      count: 1245,
      url: '#phones'
    },
    {
      id: 2,
      name: 'Véhicules',
      icon: 'car-front',
      count: 876,
      url: '#vehicles'
    },
    {
      id: 3,
      name: 'Immobilier',
      icon: 'house-door',
      count: 1542,
      url: '#real-estate'
    },
    {
      id: 4,
      name: 'Informatique',
      icon: 'laptop',
      count: 954,
      url: '#computers'
    },
    {
      id: 5,
      name: 'Électronique',
      icon: 'tv',
      count: 752,
      url: '#electronics'
    },
    {
      id: 6,
      name: 'Mode & Beauté',
      icon: 'gem',
      count: 1865,
      url: '#fashion'
    },
    {
      id: 7,
      name: 'Emplois',
      icon: 'briefcase',
      count: 423,
      url: '#jobs'
    },
    {
      id: 8,
      name: 'Autres',
      icon: 'three-dots',
      count: 2148,
      url: '#others'
    }
  ]);

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
  
  getStatusLabel(status: string): string {
    switch (status) {
      case 'approved': return 'Approuvé';
      case 'pending': return 'En attente';
      case 'rejected': return 'Rejeté';
      default: return '';
    }
  }
}
```

### Formulaires (Login, Sell, Seller-Auth)

Pour tous les formulaires, appliquez les nouvelles classes CSS pour les formulaires:

**Exemple: Login**

```html
<div class="container section">
  <div class="card shadow-xl max-w-md mx-auto">
    <div class="card-content">
      <h2 class="text-2xl font-bold mb-6">Connexion Administrateur</h2>
      
      <form (ngSubmit)="login()">
        <div class="form-control">
          <label for="email" class="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            class="form-input" 
            placeholder="votre@email.com" 
            [(ngModel)]="email" 
            name="email" 
            required>
        </div>
        
        <div class="form-control">
          <label for="password" class="form-label">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            class="form-input" 
            placeholder="********" 
            [(ngModel)]="password" 
            name="password" 
            required>
        </div>
        
        @if (errorMessage()) {
          <div class="alert alert-danger">
            <i class="bi bi-exclamation-triangle-fill"></i>
            <div>{{ errorMessage() }}</div>
          </div>
        }
        
        <div class="flex justify-between items-center mt-6">
          <div class="form-check">
            <input type="checkbox" id="remember" class="form-check-input">
            <label for="remember" class="form-check-label">Se souvenir de moi</label>
          </div>
          
          <a href="#" class="text-primary text-sm">Mot de passe oublié?</a>
        </div>
        
        <button type="submit" class="btn btn-primary w-full mt-6">Se connecter</button>
      </form>
      
      <div class="mt-6 text-center text-sm text-neutral-500">
        <p>Vous n'avez pas de compte? <a href="#" class="text-primary">Contactez l'administrateur</a></p>
      </div>
    </div>
  </div>
</div>
```

---

## Composants réutilisables

### Product Card Component

Créez un composant réutilisable pour les cartes de produits:

**Fichier:** `src/app/components/product-card/product-card.html`

```html
<div class="card">
  <div class="card-img-container">
    <img [src]="product.imageUrl" class="card-img" [alt]="product.title">
    @if (product.isVip) {
      <span class="card-badge badge-vip">VIP</span>
    }
  </div>
  <div class="card-content">
    <h3 class="card-title">{{ product.title }}</h3>
    <p class="card-description">{{ product.description }}</p>
    <div class="card-price">{{ product.price | currency:'XOF':'symbol':'1.0-0' }}</div>
    <div class="card-footer">
      <span class="card-status" 
            [ngClass]="{
              'status-approved': product.status === 'approved',
              'status-pending': product.status === 'pending',
              'status-rejected': product.status === 'rejected'
            }">
        {{ getStatusLabel(product.status) }}
      </span>
      <span class="card-views">
        <i class="bi bi-eye"></i>
        {{ product.views }} vues
      </span>
    </div>
  </div>
</div>
```

**Fichier:** `src/app/components/product-card/product-card.ts`

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  status: 'approved' | 'pending' | 'rejected';
  views: number;
  isVip: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  getStatusLabel(status: string): string {
    switch (status) {
      case 'approved': return 'Approuvé';
      case 'pending': return 'En attente';
      case 'rejected': return 'Rejeté';
      default: return '';
    }
  }
}
```

---

## Tests et validation

### 1. Vérifications avant déploiement

- ✅ Vérifier tous les liens et routes
- ✅ Tester le responsive design sur mobile, tablet et desktop
- ✅ Vérifier le mode sombre
- ✅ Tester tous les formulaires
- ✅ Vérifier l'accessibilité (contraste, navigation clavier)
- ✅ Optimiser les images

### 2. Outils de vérification

Utilisez les outils suivants pour valider votre implémentation:

- Chrome DevTools pour le responsive design
- Lighthouse pour l'accessibilité et les performances
- WAVE pour l'accessibilité
- W3C Validator pour HTML/CSS

---

## Assistance à l'implémentation

Si vous rencontrez des difficultés lors de l'implémentation, n'hésitez pas à:

1. Consulter `design-preview-vivid.html` pour voir comment les composants sont structurés
2. Examiner `fotoljay-vivid.css` pour comprendre les classes disponibles
3. Utiliser les outils de développement pour inspecter les styles

Bonne implémentation du nouveau design FOTOLJAY VIVID! 🚀