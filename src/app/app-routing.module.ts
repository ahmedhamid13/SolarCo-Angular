import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { ProfileComponent } from './profile/profile.component';
import { HomepageComponent } from './post/homepage/homepage.component';
import { SinglePostComponent } from './post/single-post/single-post.component';
import { CreatePostFormComponent } from './post/create-post-form/create-post-form.component';
import { UserInputComponent } from './pv-calculation/user-input/user-input.component';
import { CalculateComponent } from './pv-calculation/calculate/calculate.component';
import { PvSystemComponent } from './pv-calculation/pv-system/pv-system.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ContractorGuard } from './shared/guards/contractor.guard';
import { ClientGuard } from './shared/guards/client.guard';
import { UpdatePostFormComponent } from './post/update-post-form/update-post-form.component';

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
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./offer/offer.module').then(m => m.OfferModule)
  },
  {
    path: 'posts',
    component: HomepageComponent,
    // canActivate: [AuthGuard, ContractorGuard]
  },
  {
    path: 'create/post',
    component: CreatePostFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'update/posts/:id',
    component: UpdatePostFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'posts/:id',
    component: SinglePostComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'user-input',
    component: UserInputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calculate',
    component: CalculateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pv-system/:id',
    component: PvSystemComponent,
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
