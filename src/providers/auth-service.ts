import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Config } from '../pages/config/config';

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
  access = false;

  constructor(private http: Http) {

  }

  public fazerLogin(nome, senha, observer){

    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');

    let options = new RequestOptions({headers: headers});

    this.http.post(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/usuario/login', JSON.stringify({nome: nome, senha: senha}), options)
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                this.access = data.retorno==1;
                                if(this.access){
                                  this.currentUser = new User(nome, senha);
                                }
                                observer.next(this.access);
                                observer.complete();
                              },
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
        this.fazerLogin(credentials.nome, credentials.senha, observer);
      });
    }
  }

  public fazerCadastro(nome, cpf, telefone1, telefone2, email, senha, observer){

    let headers = new Headers();
    headers.append('Content-Type', 'text/plain');

    let options = new RequestOptions({headers: headers});

    let usuarioJson = {nome: nome, cpf: cpf, telefone1: telefone1, telefone2: telefone2, email: email, senha: senha};
    this.http.post(Config.enderecoPrincipal + '/CatalogoUesbServer/rest/usuario/cadastro', JSON.stringify(usuarioJson), options)
                  .map((res:Response) => res.json())
                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                  .subscribe(
                              data => {
                                this.access = true;
                                if(this.access){
                                  this.currentUser = new User(nome, senha);
                                }
                                observer.next(this.access);
                                observer.complete();
                              },
                              err => {
                                  // Log errors if any
                                  console.log(err);
                              });
                  ;
  }

  public register(credentials) {
    return Observable.create(observer => {
      this.fazerCadastro(credentials.nome, credentials.cpf, credentials.telefone1, credentials.telefone2, credentials.email, credentials.senha, observer);
    });
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
