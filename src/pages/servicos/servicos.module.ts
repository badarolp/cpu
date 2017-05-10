import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Servicos } from './servicos';


@NgModule({
  declarations: [
    Servicos,
  ],
  imports: [
    IonicPageModule.forChild(Servicos),
  ],
  exports: [
    Servicos
  ]
})
export class ServicosModule {}
