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
  
}
