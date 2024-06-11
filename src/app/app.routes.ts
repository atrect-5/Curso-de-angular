import { Routes } from '@angular/router';
import { NofoundComponent } from './shared/nofound/nofound.component';

export const routes: Routes = [
  {
    path:'**',
    component: NofoundComponent
  }
];
