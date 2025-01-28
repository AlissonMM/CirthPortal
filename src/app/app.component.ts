import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CirthHeaderComponent } from './cirth-header/cirth-header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';

@Component({
  selector: 'app-root',
  standalone: true, // Marca este componente como autônomo
  imports: [
    RouterOutlet, // Importa o RouterOutlet para as rotas
    CirthHeaderComponent, // Importa o componente CirthHeader
    LeftMenuComponent, // Importa o componente LeftMenu
    MiddleContentComponent, // Importa o componente MiddleContent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrige para "styleUrls" no plural
})
export class AppComponent {
  title = 'CirthPortal';
}
