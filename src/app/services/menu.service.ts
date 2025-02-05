import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root', // Garante que o serviço é um Singleton
})
export class MenuService {
  private menuOpen = signal(false); // Signal nativo do Angular moderno

  isMenuOpen = this.menuOpen.asReadonly(); // Disponibiliza o estado para outros componentes

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen()); // Alterna o estado do menu
  }

  closeMenu() {
    this.menuOpen.set(false); // Fecha o menu
  }
}
