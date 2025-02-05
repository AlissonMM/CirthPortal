// 1️⃣ Criamos o Service para gerenciar o estado do menu
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class MiddleContentComponent {
  constructor(private menuService: MenuService) {} // Agora deve funcionar sem erro
}


@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private menuOpen = new BehaviorSubject<boolean>(false); // Estado inicial: fechado
  menuOpen$ = this.menuOpen.asObservable(); // Expondo como Observable

  toggleMenu(): void {
    this.menuOpen.next(!this.menuOpen.value); // Alterna entre aberto/fechado
  }
}
