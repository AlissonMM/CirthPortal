import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuService } from '../menu-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet, NgClass],
  standalone: true,
  templateUrl: './cirth-header.component.html',
  styleUrl: './cirth-header.component.css',
  providers: [MenuService],
})
export class CirthHeaderComponent {
  constructor(private menuService: MenuService) { }

  menuOpen = false;
  ngOnInit(): void {
    // Inscreva-se para receber atualizações do estado do menu
    this.menuService.menuOpen$.subscribe((isOpen: boolean) => {
      this.menuOpen = isOpen;
    });
  }

  

  toggleMenu(): void {
    this.menuService.toggleMenu();

    console.log('Menu open:', this.menuOpen)
  }
}
