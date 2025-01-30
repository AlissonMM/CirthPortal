import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
  selector: 'app-cirth-page',
  imports: [RouterOutlet, LeftMenuComponent],
  templateUrl: './cirth-page.component.html',
  styleUrl: './cirth-page.component.css'
})
export class CirthPageComponent {

}

