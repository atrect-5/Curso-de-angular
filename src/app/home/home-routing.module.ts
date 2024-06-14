import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NofoundComponent } from '../shared/nofound/nofound.component';
import { loginGuard } from '../security/guards/login.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[loginGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
