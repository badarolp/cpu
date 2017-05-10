import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})

export class Config {
  

  constructor(private nav: NavController, private auth: AuthService) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Confg');
  }
  

  
}
