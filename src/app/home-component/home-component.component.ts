import { Component } from '@angular/core';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

@Component({
  selector: 'app-home-component',
  imports: [LeftMenuComponent, MiddleContentComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  
}
