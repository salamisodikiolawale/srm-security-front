import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './common/error404/error404.component';
import { JobOfferComponent } from './components/job-offer/job-offer.component';
import { HomeComponent } from './components/home/home.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { LearningComponent } from './components/learning/learning.component';
import { SigninComponent } from 'src/auth/components/signin/signin.component';
import { SignupComponent } from 'src/auth/components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from 'src/auth/gaurds/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
  { path: 'dashboard', component: DashboardComponent},

  { path: 'formations', component: LearningComponent},
  { path: 'centres-de-formation', component: LearningCenterComponent},
  { path: 'trouver-un-emploi', component: JobOfferComponent},
  { path: 'profile', canActivate: [AuthGuard],component: ProfileComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: Error404Component},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
