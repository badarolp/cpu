import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { listProdutos } from './listProdutos';

@NgModule({
  declarations: [
    listProdutos,
  ],
  imports: [
    IonicPageModule.forChild(listProdutos),
  ],
  exports: [
    listProdutos
  ]
})
export class listProdutosModule {}
