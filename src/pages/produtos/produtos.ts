import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';


@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  
 
})
export class Produtos {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };

  items: Array<{title: string}>;


  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {

  	this.items = [
      { title: 'Mel'},
      { title: 'Fertilizantes'},
      { title: 'Queijos'}
    ];

  }

  
  public goListProdutos() {
      
    	this.nav.push('listProdutos')
  	}

}
