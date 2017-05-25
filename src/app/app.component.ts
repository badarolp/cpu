import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Pedidos } from '../pages/pedidos/pedidos';
import { Config } from '../pages/config/config';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Servicos } from '../pages/servicos/servicos';
import { Produtos } from '../pages/produtos/produtos';
import { Register } from '../pages/register/register';
import { Carrinho } from '../pages/carrinho/carrinho';
import { listProdutos } from '../pages/listProdutos/listProdutos';
import { infoProduto } from '../pages/infoProduto/infoProduto';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'Home';

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: Home},
      { title: 'Meus Pedidos', component: Pedidos },
      { title: 'Configurações', component: Config },
      { title: 'Login', component: Login }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
