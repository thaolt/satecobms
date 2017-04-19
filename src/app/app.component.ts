import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login-page/login-page';

import { SerialService } from '../providers/serial-service';

@Component({
  providers:[SerialService],
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = LoginPage;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public serialService:SerialService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      serialService.open();
      splashScreen.hide();
    });
  }
}

