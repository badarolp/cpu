import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import {DataServices} from '../../providers/data.services';

import { Config } from '../pages/config/config';
import { Home } from '../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class Login {
  loading: Loading;
  registerCredentials = { nome: '', senha: '' };

  constructor(private nav: NavController,
              private auth: AuthService,
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              private dataServices: DataServices) { }

  public createAccount() {
    this.nav.push('Register');
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.setRoot('Home');
      } else {
        this.showError("Acesso negado");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Login ou Senha inválidos',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
