import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ContatsComponent } from './components/contats/contats.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {LoginGuard} from './guards/login.guard';
import {AuthService} from './auth/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    FormBuilder,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
