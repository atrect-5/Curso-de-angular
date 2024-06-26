import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NofoundComponent } from '../shared/nofound/nofound.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'registrarse',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
