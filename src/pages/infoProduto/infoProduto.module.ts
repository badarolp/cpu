import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { infoProduto } from './infoProduto';

@NgModule({
  declarations: [
    infoProduto,
  ],
  imports: [
    IonicPageModule.forChild(infoProduto),
  ],
  exports: [
    infoProduto
  ]
})
export class infoProdutoModule {}
