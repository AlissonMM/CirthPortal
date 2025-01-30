import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-middle-content',
  imports: [],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.css',
  encapsulation: ViewEncapsulation.None, // REMOVE o encapsulamento de estilos
})
export class MiddleContentComponent {
  @Input() content: string = 'Default Content';
}
