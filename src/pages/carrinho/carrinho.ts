import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {Observable} from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Config } from '../config/config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class Carrinho {

  static itensCarrinho: Pedido[] = [];

  compraSucesso = false;

  public hasProduto(produto){
    for(let item of Carrinho.itensCarrinho){
      if(item.produto.idProduto == produto.idProduto)
        return true;
    }

    return false;
  }

  public addItemCarrinho(produto, vlUnitario, qtItem){
    Carrinho.itensCarrinho.push(new Pedido(produto, vlUnitario, qtItem));


  }

  public removeItemCarrinho(index){
    Carrinho.itensCarrinho.splice(index, 1);
  }

  public getQtCarrinho(){
    return Carrinho.itensCarrinho.length;
  }

  get itens(){
    return Carrinho.itensCarrinho;
  }

  public getTotalMoney(){
    let vlTotal = 0;

    for(let pedido of Carrinho.itensCarrinho){
      vlTotal += (parseFloat((<Pedido>pedido).vlUnitario) * parseInt((<Pedido>pedido).qtItem));
    }
    return parseFloat("" + vlTotal).toFixed(2).toString().replace(".", ",");;
  }

  constructor(public http: Http, public nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {
  }

  public precoMoney(preco){
    return parseFloat("" + preco).toFixed(2).toString().replace(".", ",");
  }

  public finalizarComprar(){

    if(this.auth.currentUser == null){
      this.showPopup("Login", "Faça o login antes de finalizar a compra");
      return;
    }

    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');

    let options = new RequestOptions({headers: headers});

    var vendas: any[] = [];

    for(let pedido of Carrinho.itensCarrinho){
      let pedidoVenda = {produto: (<Pedido>pedido).produto, vlUnitario: parseFloat((<Pedido>pedido).vlUnitario), qtItem: parseInt((<Pedido>pedido).qtItem)};
      vendas.push(pedidoVenda);
    }
    this.http.post(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/venda/vendaFinalizada', JSON.stringify(vendas), options)
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                if (data.retorno == 1) {
                                  this.compraSucesso = true;
                                  Carrinho.itensCarrinho = [];
                                  this.showPopup("Sucesso", data.msg);
                                } else {
                                  this.compraSucesso = false;
                                  this.showPopup("Erro", data.msg);
                                }
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
                  ;
  }

  public compra() {
    this.finalizarComprar();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.compraSucesso) {
              this.nav.pop();
            }
          }
        }
      ]
    });
    alert.present();
  }

}

export class Pedido {
  produto: any;
  vlUnitario: any;
  qtItem: any;

  constructor(produto: any, vlUnitario: any, qtItem: any) {
    this.produto = produto;
    this.vlUnitario = vlUnitario;
    this.qtItem = qtItem;
  }

  get vlSubTotal(){
    return (parseFloat(this.vlUnitario) * parseFloat(this.qtItem));
  }
}
