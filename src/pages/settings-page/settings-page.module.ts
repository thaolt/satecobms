import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SettingsPage } from './settings-page';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicModule.forRoot(SettingsPage),
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsPageModule {}
