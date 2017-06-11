import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EsquecerSenha } from './esquecer-senha';

@NgModule({
  declarations: [
    EsquecerSenha,
  ],
  imports: [
    IonicPageModule.forChild(EsquecerSenha),
  ],
  exports: [
    EsquecerSenha
  ]
})
export class EsquecerSenhaModule {}
