import { Routes } from '@angular/router';
import { NofoundComponent } from './shared/nofound/nofound.component';

export const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./login/login.module').then((l)=>l.LoginModule)
  },
  {
    path:'**',
    component: NofoundComponent
  }
];
