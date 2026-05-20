import { Routes } from '@angular/router';

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Home } from './componentes/home/home';

export const routes: Routes = [


     // Implementar a Rota do Login e Produtos
     
  { path: 'home', component: Home, canActivate: [Home], title: 'Home' },
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'Gerenciar Produtos' },

];
