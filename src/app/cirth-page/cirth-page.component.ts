import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { MiddleContentComponent } from "../middle-content/middle-content.component";

@Component({
  selector: 'cirth-page',
  standalone: true,
  imports: [MiddleContentComponent],
  templateUrl: './cirth-page.component.html',
  styleUrls: ['./cirth-page.component.css']
})
export class CirthPageComponent {
  
}
