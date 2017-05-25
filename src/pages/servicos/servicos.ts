import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Response } from '@angular/http';
import { Pedidos } from '../pages/pedidos/pedidos';
import { listServicos } from '../pages/listServicos/listServicos';
import { Config } from '../config/config';

@IonicPage()
@Component({
  selector: 'page-servicos',
  templateUrl: 'servicos.html',
})
export class Servicos {
grupos: any[];


  constructor(private nav: NavController,
              private auth: AuthService,
              private alertCtrl: AlertController,
              private http: Http) {
    this.buscarServicos();
  }

  public buscarServicos(){
        this.http.get(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/grupo/findallServicos')
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => this.grupos = data.grupo,
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });

  }

  public goListServicos(subgrupo) {

    	this.nav.push('listServicos', {subGrupo: subgrupo})
  	}
}
