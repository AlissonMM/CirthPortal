import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

@Component({
  selector: 'app-tengwar',
  imports: [RouterLink, LeftMenuComponent],
  templateUrl: './tengwar.component.html',
  styleUrl: './tengwar.component.css'
})
export class TengwarComponent {

}
