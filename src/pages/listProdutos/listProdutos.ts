import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { infoProduto } from '../pages/infoProduto/infoProduto';

@IonicPage()
@Component({
  selector: 'page-listProdutos',
  templateUrl: 'listProdutos.html',
})
export class listProdutos {

  constructor(public nav: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

   presentProfileModal() {
   		console.log("Cheguei");

   }

   public goInfoProduto(id) {
     this.nav.push('infoProduto', {paramId: id});
   }

}
