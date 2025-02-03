import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { MiddleContentComponent } from "../middle-content/middle-content.component";

@Component({
  selector: 'app-cirth-page',
  standalone: true,
  imports: [LeftMenuComponent, MiddleContentComponent],
  templateUrl: './cirth-page.component.html',
  styleUrls: ['./cirth-page.component.css']
})
export class CirthPageComponent {
  menuCirth = [
    { anchor: 'o-que-sao-as-cirth', label: 'O que são as Cirth?' },
    { anchor: 'a-criacao-das-cirth', label: 'A Criação das Cirth' },
    { anchor: 'o-desenvolvimento-do-sistema', label: 'O Desenvolvimento do Sistema' },
    { anchor: 'o-uso-das-cirth-na-terra-media', label: 'O Uso das Cirth na Terra-média' },
    { anchor: 'o-legado-das-cirth', label: 'O Legado das Cirth' },
    { anchor: 'cirth-erebor', label: 'Cirth Erebor' },
  ];


  
}
