import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { listServicos } from './listServicos';

@NgModule({
  declarations: [
    listServicos,
  ],
  imports: [
    IonicPageModule.forChild(listServicos),
  ],
  exports: [
    listServicos
  ]
})
export class listServicosModule {}
