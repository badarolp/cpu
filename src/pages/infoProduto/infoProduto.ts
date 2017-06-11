import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, AlertController } from 'ionic-angular';
import { Carrinho } from '../carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-infoProduto',
  templateUrl: 'infoProduto.html',
  providers: [Carrinho]

})
export class InfoProduto {
  produto: any;
  quantidade: any;
  totalQuantidade = 0;

  constructor(public nav: NavController, public navParams: NavParams, public carrinho: Carrinho, private alertCtrl: AlertController) {
    this.produto = this.navParams.get('produto');
  }

  get totalQuantidadeMoney(){
    return parseFloat("" + this.totalQuantidade).toFixed(2).toString().replace(".", ",");
  }

  public precoMoney(preco){
    return parseFloat("" + preco).toFixed(2).toString().replace(".", ",");
  }

  public changeQuantidade(quantidade){
    this.totalQuantidade = this.produto.precos.preco * parseInt(quantidade);
    this.quantidade = quantidade;
  }

  public adicionarProduto(){

    if(this.quantidade == null || this.quantidade == 0){
      this.showPopup("Mensagem", "Você deve indicar uma quantidade do produto desejada", false);
      return;
    }

    if(this.carrinho.hasProduto(this.produto)){
      this.showPopup("Mensagem", "Você já adicinou o produto: " + this.produto.descricao, false);
      return;
    }
    this.carrinho.addItemCarrinho(this.produto, this.produto.precos.preco, this.quantidade);
    this.showPopup("Sucesso", this.produto.descricao + " adicionado ao carrinho", true);
  }

  showPopup(title, text, sair) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if(sair)
              this.nav.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
