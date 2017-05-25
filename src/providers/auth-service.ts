import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class User {
  nome: string;
  senha: string;

  constructor(nome: string, senha: string) {
    this.nome = nome;
    this.senha = senha;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  possiveisUsuarios: any[];

  constructor(private http: Http) {
    this.buscarUsuarios();
  }

  public buscarUsuarios(){
        this.http.get('http://localhost:8080/CatalogoUesbServer/rest/usuario/findall')
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => this.possiveisUsuarios = data.usuario,
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
                  ;
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = false;

        for(var objectUsuario in this.possiveisUsuarios){
          if(credentials.senha === this.possiveisUsuarios[objectUsuario]["senha"] && credentials.nome === this.possiveisUsuarios[objectUsuario]["nome"]){
            access = true;
            break;
          }
        }

        this.currentUser = new User(credentials.nome, credentials.senha);

        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
