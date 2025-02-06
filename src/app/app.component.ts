import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { CirthHeaderComponent } from './cirth-header/cirth-header.component';
import { CirthPageComponent } from "./cirth-page/cirth-page.component";

@Component({
  selector: 'app-root',
  standalone: true, // Marca este componente como autônomo
  imports: [
    RouterOutlet, // Importa o RouterOutlet para as rotas
    RouterLink,
    CirthHeaderComponent,
    CirthPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CirthPortal';
}
