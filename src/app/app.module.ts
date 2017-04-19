import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SerialService } from '../providers/serial-service';
import { Serial } from '@ionic-native/serial';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';

import { LoginPage } from '../pages/login-page/login-page';
import { MapsPage } from '../pages/maps-page/maps-page';
import { SettingsPage } from '../pages/settings-page/settings-page';
import { SitePage } from '../pages/site-page/site-page';


@NgModule({
  declarations: [
    MyApp,    
    LoginPage,
    MapsPage,
    SettingsPage,
    SitePage
  ],
  imports: [
    BrowserModule,
    HttpModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MapsPage,
    SettingsPage,
    SitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    SerialService,
    Serial,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}
