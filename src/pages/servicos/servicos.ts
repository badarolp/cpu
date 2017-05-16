import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Pedidos } from '../pages/pedidos/pedidos';
import { listProdutos } from '../pages/listProdutos/listProdutos';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class Servicos {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };

   items: Array<{title: string}>;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { 

  	this.items = [
      { title: 'Mel'},
      { title: 'Queijo'},
      { title: 'Grãos'}
    ];
  }

  public goListProdutos() {
      
    	this.nav.push('listProdutos')
  	}
}
