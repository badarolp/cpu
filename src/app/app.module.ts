import { AuthService } from './../providers/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, JsonpModule } from '@angular/http';

import {Config} from '../pages/config/config';
import {Pedidos} from '../pages/pedidos/pedidos';
import {Login} from '../pages/login/login';
import { Carrinho } from '../pages/carrinho/carrinho';
import {DataServices} from '../providers/data.services';


import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    Config,
    Pedidos,
    Login

  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Config,
    Pedidos,
    Login



  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataServices
  ]
})
export class AppModule {}
