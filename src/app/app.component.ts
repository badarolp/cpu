import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform, NavController  } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Login} from '../pages/login/login';
import {Logout} from '../pages/logout/logout';

import {DataServices} from '../providers/data.services';
import {AuthService} from '../providers/auth-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'Home';

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              protected dataServices: DataServices,
              protected auth: AuthService) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  ngOnInit(){
    this.pages = this.dataServices.pages;
    if (this.auth.currentUser != null) {
      this.pages.push({ title: 'Logout', component: Logout });
    }
    else{
      this.pages.push({ title: 'Login', component: Login });
    }
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
