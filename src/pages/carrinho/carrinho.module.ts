import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Carrinho } from './carrinho';


@NgModule({
  declarations: [
    Carrinho,
  ],
  imports: [
    IonicPageModule.forChild(Carrinho),
  ],
  exports: [
    Carrinho
  ]
})
export class CarrinhoModule {}
