import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Serial } from '@ionic-native/serial';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/map';

@Injectable()
export class SerialService {

    constructor(public http: Http, private serial: Serial) {
        console.log('Hello SerialService Provider');
        
    }

    open() {
        this.serial.requestPermission().then(() => {
            this.serial.open({
                baudRate: 115200,
                dtr: true,
                rts: true
            }).then(() => {
                console.log('Serial connection opened');
            });
        }).catch((error: any) => console.log(error));
    }

    errorCallback() {

    }

    readyRead(): Observable<any> {
        return this.serial.registerReadCallback();
    }

}
