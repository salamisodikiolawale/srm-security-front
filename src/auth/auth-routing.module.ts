import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from 'src/auth/components/signin/signin.component';
import { SignupComponent } from 'src/auth/components/signup/signup.component';

const routes: Routes = [
  { path: 'login', component: SigninComponent},
  { path: 'register', component: SignupComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
