import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-infoProduto',
  templateUrl: 'infoProduto.html',
})
export class infoProduto {
<<<<<<< HEAD
	
	createSuccess = false;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, params: NavParams) {

  		console.log('UserId', params.get('userId'));
  }

  

=======
  id = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('paramId');
    }
>>>>>>> d344660f7d5519ee048c4ec79b9758d8addee8ce
}
