import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CirthHeaderComponent } from './cirth-header/cirth-header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import {CirthPageComponent} from './cirth-page/cirth-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';






export const routes: Routes = [
    { path: '', redirectTo:'home', pathMatch:'full'},
    { path: 'home', component: HomeComponentComponent }, // Home Page
    { path: 'cirth-page', component: CirthPageComponent},
    { path: 'cirth-header', component: CirthHeaderComponent },
    { path: 'left-menu', component: LeftMenuComponent },
    { path: 'middleContent', component: MiddleContentComponent },
];
