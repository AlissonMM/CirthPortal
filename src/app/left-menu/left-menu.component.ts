import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  imports: [CommonModule],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LeftMenuComponent {

}
