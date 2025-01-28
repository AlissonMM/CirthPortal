import {Routes} from '@angular/router';
import {CirthHeaderComponent} from './cirth-header/cirth-header.component';
import {LeftMenuComponent} from './left-menu/left-menu.component';
import {MiddleContentComponent} from './middle-content/middle-content.component';







export const routes: Routes = [
    {path: 'cirth-header', component: CirthHeaderComponent},
    {path: 'left-menu', component: LeftMenuComponent},
    {path: 'middleContent', component: MiddleContentComponent},
];
