import {Injectable} from '@angular/core';

import { Config } from '../pages/config/config';
import { Login } from '../pages/login/login';
import { Home } from '../pages/home/home';
import { Pedidos } from '../pages/pedidos/pedidos';
import { Logout } from '../pages/logout/logout';

@Injectable()
export class DataServices{

  public pages: Array<{title: string, component: any}>  = [
    { title: 'Inicio', component: Home},
    { title: 'Meus Pedidos', component: Pedidos },
    { title: 'Configurações', component: Config }
  ];

}
