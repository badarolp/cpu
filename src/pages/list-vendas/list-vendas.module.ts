import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListVendas } from './list-vendas';

@NgModule({
  declarations: [
    ListVendas,
  ],
  imports: [
    IonicPageModule.forChild(ListVendas),
  ],
  exports: [
    ListVendas
  ]
})
export class ListVendasModule {}
