import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Pedidos } from '../pages/pedidos/pedidos';
import { listServicos } from '../pages/listServicos/listServicos';


@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class Servicos {
  createSuccess = false;
  registerCredentials = { email: 'email', password: 'pass' };

   items: Array<{title: string}>;

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { 

  	this.items = [
      { title: 'Exame Laboratórial'},
      { title: 'Consulta médica'},
      { title: 'Avaliação física'}
    ];
  }

  public goListServicos() {
      
    	this.nav.push('listServicos')
  	}
}
