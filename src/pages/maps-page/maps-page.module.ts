import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MapsPage } from './maps-page';

@NgModule({
  declarations: [
    MapsPage,
  ],
  imports: [
    IonicModule.forRoot(MapsPage),
  ],
  exports: [
    MapsPage
  ]
})

export class MapsPageModule {}
