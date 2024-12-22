import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


const firebaseConfig = {
  apiKey: "AIzaSyARLlrkNBAfD44p0qOd6eKK453x-ur1y_c",
  authDomain: "ionicproject-daafe.firebaseapp.com",
  projectId: "ionicproject-daafe",
  storageBucket: "ionicproject-daafe.firebasestorage.app",
  messagingSenderId: "921915721117",
  appId: "1:921915721117:web:c6eb81beb7c92ee29ddb74"
};
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    provideHttpClient(),

    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),


  ],  bootstrap: [AppComponent],
})
export class AppModule {}
