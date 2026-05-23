import { Routes } from '@angular/router';

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Home } from './componentes/home/home';
import { produtos } from './componentes/produtos/produtos';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'TechStore - Home' },
  { path: 'produtos' , component: produtos, title: 'TechStore - Produtos'},
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'Gerenciar - Produtos' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  /* { path: 'login', component: Home, title: 'TechStore - Login' },
  { path: 'carrinho', component: Home, title: 'TechStore - Carrinho' } */
   //adicionar deopois que gerar os componentes


];
