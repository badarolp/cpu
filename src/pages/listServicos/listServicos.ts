import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { infoProduto } from '../pages/infoProduto/infoProduto';

@IonicPage()
@Component({
  selector: 'page-listServicos',
  templateUrl: 'listServicos.html',
})
export class listServicos {

  constructor(public nav: NavController, public navParams: NavParams, public modalCtrl: ModalController) {

  }

   public goInfoServico(id) {
     this.nav.push('infoProduto', {paramId: id});

   }

}
