import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  standalone: true, 
  templateUrl: './cirth-header.component.html',
  styleUrl: './cirth-header.component.css'
})
export class CirthHeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
