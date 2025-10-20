import { Component, OnInit, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Product } from '../../models/product.model';
import { LucideAngularModule, Camera, Search, Eye, Star, Plus, X, Phone, Mail, User, Menu, Palette, LogIn } from 'lucide-angular';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, LucideAngularModule, ThemeSelectorComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private apiService = inject(ApiService);
  
  readonly Camera = Camera;
  readonly Search = Search;
  readonly Eye = Eye;
  readonly Star = Star;
  readonly Plus = Plus;
  readonly X = X;
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly User = User;
  readonly Menu = Menu;
  readonly Palette = Palette;
  readonly LogIn = LogIn;
  
  products = signal<Product[]>([]);
  loading = signal<boolean>(false);
  searchTerm = signal<string>('');
  currentPage = signal<number>(1);
  selectedProduct = signal<Product | null>(null);
  showModal = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadProducts();
    }
  }

  loadProducts(): void {
    this.loading.set(true);
    
    this.apiService.getProducts({
      status: 'APPROVED',
      search: this.searchTerm(),
      page: this.currentPage(),
      limit: 12
    }).subscribe({
      next: (response) => {
        this.products.set(response.products);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Erreur:', error);
        this.loading.set(false);
      }
    });
  }

  onSearch(): void {
    this.currentPage.set(1);
    this.loadProducts();
  }

  getPrimaryPhoto(product: Product): string {
    const primary = product.photos.find(p => p.isPrimary);
    return primary?.url || product.photos[0]?.url || '/placeholder.svg';
  }

  viewProduct(product: Product, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.selectedProduct.set(product);
    this.showModal.set(true);
  }

  closeModal(): void {
    this.showModal.set(false);
    this.selectedProduct.set(null);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  openThemeSelector(): void {
    this.closeMobileMenu();
    // Theme selector functionality to be implemented
  }

  goToAddProduct(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = '/seller';
    }
  }

  searchProducts(): void {
    this.onSearch();
  }

  viewDetails(productId: string): void {
    const product = this.products().find(p => p.id === productId);
    if (product) {
      this.selectedProduct.set(product);
      this.showModal.set(true);
    }
  }

  openWhatsApp(phone: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (!phone) {
      alert('Numéro de téléphone non disponible');
      return;
    }

    const currentProduct = this.selectedProduct();
    if (!currentProduct) {
      alert('Informations produit non disponibles');
      return;
    }

    // Nettoyer le numéro de téléphone (enlever les espaces, tirets, etc.)
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // Vérifier si le numéro est au format international (+221...)
    const internationalPhone = cleanPhone.startsWith('+') ? cleanPhone : `+${cleanPhone}`;
    
    // Créer le message avec les détails du produit
    const message = this.createWhatsAppMessage(currentProduct);
    
    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    
    // URL WhatsApp avec message pré-rempli
    const whatsappUrl = `https://wa.me/${internationalPhone.replace('+', '')}?text=${encodedMessage}`;
    
    if (isPlatformBrowser(this.platformId)) {
      // Ouvrir dans un nouvel onglet
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Si le popup est bloqué ou si WhatsApp n'est pas installé
      if (!newWindow) {
        // Essayer d'ouvrir dans la même fenêtre
        window.location.href = whatsappUrl;
      } else {
        // Vérifier après 2 secondes si la fenêtre est toujours ouverte
        setTimeout(() => {
          try {
            if (newWindow.closed) {
              // L'utilisateur a peut-être fermé la fenêtre parce que WhatsApp n'est pas installé
              const fallback = confirm(
                `Le numéro WhatsApp est : ${phone}\n\nSouhaitez-vous appeler ce numéro directement ?`
              );
              
              if (fallback) {
                window.location.href = `tel:${phone}`;
              }
            }
          } catch (e) {
            // Erreur de cross-origin, la fenêtre a probablement bien été ouverte
          }
        }, 2000);
      }
    }
  }

  private createWhatsAppMessage(product: Product): string {
    const primaryPhoto = this.getPrimaryPhoto(product);
    
    const message = `🛍️ Bonjour ! Je suis intéressé(e) par votre annonce sur Fotoljay :

📦 *${product.title}*

💰 Détails :
${product.description.substring(0, 150)}${product.description.length > 150 ? '...' : ''}

📊 Informations :
• ${product.views} vues
• Publié le ${product.publishedAt ? new Date(product.publishedAt).toLocaleDateString('fr-FR') : 'récemment'}
${product.isVip ? '• ⭐ Annonce VIP' : ''}

🌐 Lien : ${window.location.origin}

Pouvez-vous me donner plus d'informations s'il vous plaît ?

Merci ! 😊`;

    return message;
  }
}
