import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-pedidos',
  templateUrl: 'pedidos.html',
})
export class Pedidos {

  vendas: any[];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.buscarVendas();
  }

  public buscarVendas(){
        this.http.get(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/venda/findallVendas')
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                if(data != null){
                                  if(data.venda instanceof Array){
                                    this.vendas = data.venda;
                                  }
                                  else{
                                    this.vendas = [data.venda];
                                  }
                                }
                                else{
                                  this.vendas = [];
                                }
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });

  }

  public precoMoney(preco){
    return parseFloat("" + preco).toFixed(2).toString().replace(".", ",");
  }

  public goListVendas(venda) {
  	this.navCtrl.push('ListVendas', {venda: venda});
	}

}
