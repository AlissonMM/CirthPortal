import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { MiddleContentComponent } from '../middle-content/middle-content.component';

@Component({
  selector: 'app-tengwar',
  imports: [LeftMenuComponent, MiddleContentComponent],
  templateUrl: './tengwar.component.html',
  styleUrl: './tengwar.component.css'
})
export class TengwarComponent {
  menuCirth = [
    { anchor: 'o-que-sao-as-cirth', label: 'O que são as Cirth?' },
    { anchor: 'a-criacao-das-cirth', label: 'A Criação das Cirth' },
    { anchor: 'o-desenvolvimento-do-sistema', label: 'O Desenvolvimento do Sistema' },
    { anchor: 'o-uso-das-cirth-na-terra-media', label: 'O Uso das Cirth na Terra-média' },
    { anchor: 'o-legado-das-cirth', label: 'O Legado das Cirth' },
    { anchor: 'cirth-erebor', label: 'Cirth Erebor' },
  ];
}
