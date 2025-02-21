import { Component, Input, ViewEncapsulation, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit } from '@angular/core';
import { MenuService } from '../menu-service.service';
import { NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  imports:[NgClass],
  styleUrls: ['./middle-content.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class MiddleContentComponent implements OnInit {
  originalText: string = ''; 
  safeContent: SafeHtml = 'Default Content';
  menuOpen = false;

  @Input() set content(value: string) {
    this.safeContent = this.sanitizer.bypassSecurityTrustHtml(value); // 🚀 Permite HTML seguro
  }

  constructor(private menuService: MenuService, private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe((isOpen: boolean) => {
      this.menuOpen = isOpen;
      this.cdr.detectChanges(); // 🚀 Força a UI a atualizar
    });
  }
}
