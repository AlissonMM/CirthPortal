import { Component } from '@angular/core';
import { MiddleContentComponent } from "../middle-content/middle-content.component";
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-translator',
  standalone: true,
  imports: [MiddleContentComponent],
  templateUrl: './translator.component.html',
  styleUrl: './translator.component.css'
})
export class TranslatorComponent {

}
