import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listServicos',
  templateUrl: 'listServicos.html',
})
export class listServicos {

  subGrupo: any;
  servicos: any[];

  constructor(private nav: NavController, public navParams: NavParams) {
    this.subGrupo = navParams.get('subGrupo');
    this.servicos = this.subGrupo.produtos;
  }

  public precoMoney(preco){
    return parseFloat("" + preco).toFixed(2).toString().replace(".", ",");
  }

  public goInfoServico(servico) {
    this.nav.push('InfoProduto', {produto : servico});
  }

}
