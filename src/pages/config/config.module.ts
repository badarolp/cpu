import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Config } from './config';

@NgModule({
  declarations: [
    Config,
  ],
  imports: [
    IonicPageModule.forChild(Config),
  ],
  exports: [
    Config
  ]
})
export class ConfigModule {}
