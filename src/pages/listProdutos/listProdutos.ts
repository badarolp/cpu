import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listProdutos',
  templateUrl: 'listProdutos.html',
})
export class listProdutos {

  subGrupo: any;
  produtos: any[];

  constructor(private nav: NavController, public navParams: NavParams) {
    this.subGrupo = navParams.get('subGrupo');
    this.produtos = this.subGrupo.produtos;
  }

  public precoMoney(preco){
    return parseFloat("" + preco).toFixed(2).toString().replace(".", ",");
  }

  public goInfoProduto(produto) {
    this.nav.push('InfoProduto', {produto : produto});
  }

}
