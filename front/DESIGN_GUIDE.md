# 🎨 Guide de Design FOTOLJAY - Modernisation Complète

## 📋 Palette de Couleurs

### Couleurs Principales
- **Primary (Orange Corail)** : `#FF6B35` - Dynamique, chaleureux, action
- **Secondary (Bleu Foncé)** : `#1E3A8A` - Confiance, professionnalisme
- **Accent (Jaune Doré)** : `#F59E0B` - VIP, highlights, éléments premium

### Couleurs Sémantiques
- **Success (Vert)** : `#10B981` - Produits approuvés, actions réussies
- **Warning (Jaune)** : `#F59E0B` - En attente, avertissements
- **Danger (Rouge)** : `#EF4444` - Rejeté, suppression, erreurs
- **Info (Bleu)** : `#3B82F6` - Informations, notifications

### Couleurs Neutres
- **Gris 50-900** : Échelle complète pour textes et arrière-plans

---

## 🎯 Composants à Moderniser

### 1. Boutons (Buttons)

#### Bouton Primary (Action principale)
```html
<button class="btn-primary">
  Publier mon annonce
</button>
```

**CSS:**
```css
.btn-primary {
  background: linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: 0 4px 6px -1px rgba(255, 107, 53, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(255, 107, 53, 0.4);
}

.btn-primary:active {
  transform: translateY(0);
}
```

#### Bouton Secondary
```css
.btn-secondary {
  background: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  background: var(--primary-color);
  color: white;
}
```

#### Bouton Ghost (Tertiaire)
```css
.btn-ghost {
  background: transparent;
  color: var(--gray-700);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 500;
  transition: all var(--transition-base);
}

.btn-ghost:hover {
  background: var(--gray-100);
}
```

---

### 2. Cards (Cartes de Produits)

```html
<div class="product-card">
  <div class="product-image-container">
    <img src="..." alt="..." class="product-image">
    <span class="badge-vip">VIP</span>
  </div>
  <div class="product-content">
    <h3 class="product-title">iPhone 14 Pro Max</h3>
    <p class="product-description">Description courte...</p>
    <div class="product-footer">
      <span class="product-status status-approved">Approuvé</span>
      <span class="product-views">145 vues</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.product-card {
  background: white;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
  border: 1px solid var(--gray-200);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.product-image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: var(--gray-100);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.badge-vip {
  position: absolute;
  top: 12px;
  right: 12px;
  background: linear-gradient(135deg, #F59E0B, #D97706);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
}

.product-content {
  padding: 1.25rem;
}

.product-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.product-description {
  font-size: 0.875rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-200);
}

/* Status badges */
.product-status {
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-approved {
  background: var(--success-light);
  color: var(--success-color);
}

.status-pending {
  background: var(--warning-light);
  color: var(--warning-color);
}

.status-rejected {
  background: var(--danger-light);
  color: var(--danger-color);
}

.product-views {
  font-size: 0.875rem;
  color: var(--gray-500);
  font-weight: 500;
}
```

---

### 3. Dashboard Cards (Statistiques)

```html
<div class="stats-grid">
  <div class="stat-card">
    <div class="stat-icon success">
      <lucide-icon [img]="CheckCircle"></lucide-icon>
    </div>
    <div class="stat-content">
      <p class="stat-label">Produits Actifs</p>
      <h3 class="stat-value">24</h3>
      <span class="stat-trend positive">+12%</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all var(--transition-base);
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon.success {
  background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
  color: var(--success-color);
}

.stat-icon.warning {
  background: linear-gradient(135deg, #FEF3C7, #FDE68A);
  color: var(--warning-color);
}

.stat-icon.primary {
  background: linear-gradient(135deg, #FED7AA, #FDBA74);
  color: var(--primary-color);
}

.stat-content {
  flex: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--gray-600);
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--gray-900);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-trend {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-md);
}

.stat-trend.positive {
  background: var(--success-light);
  color: var(--success-color);
}

.stat-trend.negative {
  background: var(--danger-light);
  color: var(--danger-color);
}
```

---

### 4. Forms (Formulaires)

```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--gray-700);
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-lg);
  font-size: 0.875rem;
  color: var(--gray-900);
  background: white;
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-error {
  color: var(--danger-color);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-weight: 500;
}

.form-hint {
  color: var(--gray-500);
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
```

---

### 5. Navigation & Header

```css
.navbar {
  background: white;
  border-bottom: 1px solid var(--gray-200);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: var(--shadow-sm);
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--gray-700);
  font-weight: 500;
  text-decoration: none;
  transition: color var(--transition-base);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
}
```

---

### 6. Sidebar (Menu latéral)

```css
.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid var(--gray-200);
  padding: 1.5rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin-bottom: 0.5rem;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-lg);
  color: var(--gray-700);
  text-decoration: none;
  font-weight: 500;
  transition: all var(--transition-base);
}

.sidebar-link:hover {
  background: var(--gray-100);
  color: var(--primary-color);
}

.sidebar-link.active {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(255, 107, 53, 0.05));
  color: var(--primary-color);
  font-weight: 600;
}

.sidebar-icon {
  width: 20px;
  height: 20px;
}
```

---

## 📱 Responsive Design

```css
/* Tablettes */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .sidebar {
    transform: translateX(-100%);
    transition: transform var(--transition-base);
  }
  
  .sidebar.open {
    transform: translateX(0);
  }
}

/* Mobiles */
@media (max-width: 640px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .product-card {
    margin-bottom: 1rem;
  }
  
  .nav-links {
    display: none;
  }
}
```

---

## 🎨 Utilisation des Couleurs par Contexte

### Homepage / Marketplace
- **Bouton CTA Principal** : Primary Orange (#FF6B35)
- **Liens** : Secondary Blue (#1E3A8A)
- **Badges VIP** : Accent Gold (#F59E0B)

### Dashboard Vendeur
- **Statistiques Positives** : Success Green (#10B981)
- **En attente** : Warning Yellow (#F59E0B)
- **Actions Importantes** : Primary Orange (#FF6B35)

### Admin/Modération
- **Approuver** : Success Green (#10B981)
- **Rejeter** : Danger Red (#EF4444)
- **Navigation** : Secondary Blue (#1E3A8A)

---

## ✨ Animations Subtiles

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## 🚀 Prochaines Étapes

1. ✅ Appliquer les nouvelles variables CSS
2. ⏳ Moderniser les composants un par un
3. ⏳ Tester la responsivité
4. ⏳ Ajouter les animations
5. ⏳ Optimiser les performances

**Le design est maintenant prêt à être appliqué ! 🎨**
