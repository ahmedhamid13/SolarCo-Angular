import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginFormComponent} from "./login-form/login-form.component"
import { ProfileComponent } from './profile/profile.component';
import { PvCalculationComponent } from './pv-calculation/pv-calculation.component';
import { HomepageComponent } from './post/homepage/homepage.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ContractorGuard } from './shared/guards/contractor.guard';
import { ClientGuard } from './shared/guards/client.guard';

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
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'pv-calculation',
    component: PvCalculationComponent,
    canActivate: [AuthGuard, ClientGuard]
  },
  {
    path: 'posts',
    component: HomepageComponent,
    canActivate: [AuthGuard, ContractorGuard]
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: HomeComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
