import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListVendasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-vendas',
  templateUrl: 'list-vendas.html',
})
export class ListVendas {

  venda: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.venda = navParams.get('venda');
  }

  get vendaPedido(){

    let vendaPedido;

    if(this.venda.vendaPedido instanceof Array){
      vendaPedido = this.venda.vendaPedido;
    }
    else{
      vendaPedido = [this.venda.vendaPedido];
    }

    return vendaPedido;
  }

  public getTotalMoney(){
    let vlTotal = 0;

    for(let pedido of this.vendaPedido){
      vlTotal += (parseFloat(pedido.vlUnitario) * parseInt(pedido.qtItem));
    }
    return parseFloat("" + vlTotal).toFixed(2).toString().replace(".", ",");;
  }

  public getQtCompra(){
    return this.vendaPedido.length;
  }

  public precoMoney(vlUnitario, qtItem){
    return parseFloat("" + (parseFloat(vlUnitario) * parseFloat(qtItem))).toFixed(2).toString().replace(".", ",");
  }

}
