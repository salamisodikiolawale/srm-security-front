import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './common/error404/error404.component';
import { LearningComponent } from './components/learning/learning.component';
import { LearningCenterComponent } from './components/learning-center/learning-center.component';
import { FindWorkComponent } from './components/find-work/find-work.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    LearningComponent,
    LearningCenterComponent,
    FindWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
