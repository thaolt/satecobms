import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapsPage } from '../maps-page/maps-page';
import { MyApp } from '../../app/app.component';
import { SerialService } from '../../providers/serial-service';

@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private serialService: SerialService) {
  }

    ngAfterViewInit() {
        console.log('ionViewDidLoad LoginPage');
        // create a new map by passing HTMLElement
        let element: HTMLElement = document.getElementById('logger');
        this.serialService.readyRead().subscribe(
            (data) => {//success callback
                var view = new Uint8Array(data);
                element.innerHTML += view;
            },
            () => {//error callback

            },
            () => {}//complete callback
        );
        
    }
    

    checkLogin() {
        this.navCtrl.setRoot(MapsPage);
    }

}
