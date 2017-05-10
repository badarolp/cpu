import { Component } from '@angular/core';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class Servicos {
  createSuccess = false;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) { }

  
}
