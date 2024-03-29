import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Config } from '../config/config';
import { Carrinho } from '../carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Carrinho]
})

export class Home {
  username = '';
  loading: Loading;
  constructor(private nav: NavController,
              private auth: AuthService,
              public carrinho: Carrinho) {
    let info = this.auth.getUserInfo();
    if(info){
      this.username = info['nome'];
    }
    else{
      this.username = "";
    }
  }

  public getQuantCarrinho(){
    return this.carrinho.getQtCarrinho();
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('Login');
    });
  }

  public goServicos() {
    this.nav.push('Servicos');
  }

  public goProdutos() {
    this.nav.push('Produtos');
  }

  public goCarrinho() {
    this.nav.push('Carrinho');
  }
}
