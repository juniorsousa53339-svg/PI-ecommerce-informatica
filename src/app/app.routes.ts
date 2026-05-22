import { Routes } from '@angular/router';

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Home } from './componentes/home/home';

export const routes: Routes = [

  { path: '', component: Home, title: 'Home' },
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'Gerenciar - Produtos' },

];
