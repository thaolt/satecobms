import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Serial } from '@ionic-native/serial';

import 'rxjs/add/operator/map';

@Injectable()
export class SerialService {

    constructor(public http: Http, private serial: Serial) {
        console.log('Hello SerialService Provider');
        
    }

    open() {
        this.serial.requestPermission().then(() => {
            this.serial.open({
                baudRate: 115200
            }).then(() => {
                console.log('Serial connection opened');
            });
        }).catch((error: any) => console.log(error));
    }

}
