import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',


})
export class Produtos {

  grupos: any[];


  constructor(private nav: NavController,
              private auth: AuthService,
              private alertCtrl: AlertController,
              private http: Http) {
    this.buscarProdutos();
  }

  public buscarProdutos(){
        this.http.get(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/grupo/findallProdutos')
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                this.grupos = data.grupo;
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });

  }


  public goListProdutos(subgrupo) {
  	this.nav.push('listProdutos', {subGrupo: subgrupo});
	}

}
