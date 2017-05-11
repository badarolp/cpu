import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class Home {
  username = '';
  email = '';
  constructor(private nav: NavController, private auth: AuthService) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('Login')
    });
  }

  public goServicos() {
    this.nav.push('Servicos')
  }

  public goProdutos() {
    this.nav.push('Produtos')
  }

  public goCarrinho() {
    this.nav.push('Carrinho')
  }
}
