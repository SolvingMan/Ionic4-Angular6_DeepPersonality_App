import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

const firebaseConfig = {
  // apiKey: "AIzaSyC-xNprG3bSnEcD0SOF0z59t8QzYy3U0u0",
  // authDomain: "deep-personality.firebaseapp.com",
  // databaseURL: "https://deep-personality.firebaseio.com",
  // projectId: "deep-personality",
  // storageBucket: "deep-personality.appspot.com",
  // messagingSenderId: "893488855789"
  
    apiKey: "AIzaSyC-EQ6Dsb3bPSGlTT-5CtIrr73kBXL20iI",
    authDomain: "deepperson.firebaseapp.com",
    databaseURL: "https://deepperson.firebaseio.com",
    projectId: "deepperson",
    storageBucket: "deepperson.appspot.com",
    messagingSenderId: "894193190527"

}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(), 
    AppRoutingModule, 
    HttpModule, 
    HttpClientModule, 
    HttpClientJsonpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
