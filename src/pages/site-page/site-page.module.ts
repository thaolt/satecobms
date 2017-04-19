import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SitePage } from './site-page';

@NgModule({
  declarations: [
    SitePage,
  ],
  imports: [
    IonicModule.forRoot(SitePage),
  ],
  exports: [
    SitePage
  ]
})
export class SitePageModule {}
