import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from '../config/config';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the EsquecerSenhaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-esquecer-senha',
  templateUrl: 'esquecer-senha.html',
})
export class EsquecerSenha {

  envioSucesso = false;
  emailUsuario: any;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  public enviarEmailUsuario(){

    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');

    let options = new RequestOptions({headers: headers});

    let usuarioJson = {email: this.emailUsuario};

    this.http.post(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/usuario/enviarEmail', JSON.stringify(usuarioJson), options)
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                if (data.ret == 1) {
                                  this.envioSucesso = true;
                                  this.showPopup("Sucesso", data.msg);
                                } else {
                                  this.envioSucesso = false;
                                  this.showPopup("Erro", data.msg);
                                }
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
                  ;
  }

  public enviarEmail() {
    this.enviarEmailUsuario();
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.envioSucesso) {
              this.navCtrl.pop();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
