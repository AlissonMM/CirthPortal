import { Component } from '@angular/core';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

@Component({
  selector: 'home',
  imports: [MiddleContentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  
}
