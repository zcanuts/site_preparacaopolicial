import { Routes } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { IndexTwoComponent } from './page/index-two/index-two.component';
import { IndexThreeComponent } from './page/index-three/index-three.component';
import { IndexFourComponent } from './page/index-four/index-four.component';
import { IndexSixComponent } from './page/index-six/index-six.component';
import { IndexSevenComponent } from './page/index-seven/index-seven.component';
import { IndexFiveComponent } from './page/index-five/index-five.component';

export const routes: Routes = [
    {'path' : 'index-one', component:IndexComponent},
    {'path' : '', component:IndexTwoComponent},
    {'path' : 'index-three', component:IndexThreeComponent},
    {'path' : 'index-four', component:IndexFourComponent},
    {'path' : 'index-five', component:IndexFiveComponent},
    {'path' : 'index-six', component:IndexSixComponent},
    {'path' : 'index-seven', component:IndexSevenComponent},
];
