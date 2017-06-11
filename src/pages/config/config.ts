import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})

export class Config {

  configuracoes = {endereco: 'http://localhost:8080'};

  static enderecoPrincipal = 'http://localhost:8080';

  constructor(private nav: NavController) {

  }

  salvarConfiguracoes(){
    Config.enderecoPrincipal = this.configuracoes.endereco;
  }

  ionViewDidLoad() {

  }

}
