import { Component, Input, ViewEncapsulation, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit } from '@angular/core';
import { MenuService } from '../menu-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports:[NgClass],
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.css'],

  encapsulation: ViewEncapsulation.None, // REMOVE o encapsulamento de estilos
})

export class MiddleContentComponent implements OnInit {
  @Input() content: string = 'Default Content';
  menuOpen = false;

  constructor(private menuService: MenuService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe((isOpen: boolean) => {
      this.menuOpen = isOpen;
      this.cdr.detectChanges(); // 🚀 Força a UI a atualizar
    });
  }
}
