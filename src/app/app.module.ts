import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({ "projectId": "oshop-45032", "appId": "1:659653208630:web:89e1127ffbbf4655400697", "storageBucket": "oshop-45032.appspot.com", "apiKey": "AIzaSyBFVbjSfrqDl_DqGnYaPv9K-NCZdcWJCZY", "authDomain": "oshop-45032.firebaseapp.com", "messagingSenderId": "659653208630" })),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
