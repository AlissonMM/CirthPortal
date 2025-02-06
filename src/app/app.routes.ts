import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CirthHeaderComponent } from './cirth-header/cirth-header.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { CirthPageComponent } from './cirth-page/cirth-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { TengwarComponent } from './tengwar/tengwar.component';
import { TranslatorComponent } from './translator/translator.component';





export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponentComponent }, // Home Page
    { path: 'cirth-page', component: CirthPageComponent },
    { path: 'cirth-header', component: CirthHeaderComponent },
    { path: 'middleContent', component: MiddleContentComponent },
    { path: 'tengwar', component: TengwarComponent },
    { path: 'translator', component: TranslatorComponent },

];
