import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-infoProduto',
  templateUrl: 'infoProduto.html',
})
export class infoProduto {

	
	createSuccess = false;
  registerCredentials = { email: '', password: '' };
 

  id = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('paramId');
  }

}
