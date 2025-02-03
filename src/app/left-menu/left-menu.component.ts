import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LeftMenuComponent {
  @Input() menuitems:{anchor:string, label:string} [] = [] ;
  @Input() page: string = '';


}
