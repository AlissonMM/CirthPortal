import { Component, Input, ViewEncapsulation, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { MenuService } from '../menu-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports:[NgClass],
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.css'],
  providers: [MenuService], // ✅ Isso garante que o service pode ser injetado
  encapsulation: ViewEncapsulation.None, // REMOVE o encapsulamento de estilos
})

export class MiddleContentComponent {
  @Input() content: string = 'Default Content';


  constructor(private menuService: MenuService) { }

  menuOpen = false;
  ngOnInit(): void {
    // Inscreva-se para receber atualizações do estado do menu
    this.menuService.menuOpen$.subscribe((isOpen: boolean) => {
      this.menuOpen = isOpen;

  
    });
  }
}
