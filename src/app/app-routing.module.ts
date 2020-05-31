import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./main-component/home/home.component";
import { PvRoutingModule } from './pv-calculation/pv-routing.module';
import { PostRoutingModule } from './post/post-routing.module';
import { LoginRoutingModule } from './auth/login/login-routing.module';
import { RegisterRoutingModule } from './auth/register/register-routing.module';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'offers',
    loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PvRoutingModule,
    PostRoutingModule,
    LoginRoutingModule,
    RegisterRoutingModule,
    UserRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
