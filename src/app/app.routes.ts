import { Routes } from '@angular/router';

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Home } from './componentes/home/home';
import { produtos } from './componentes/produtos/produtos';
import { Carrinho } from './componentes/carrinho/carrinho';
import { GerenciarProdutosNovos } from './componentes/gerenciar-produtos-novos/gerenciar-produtos-novos';



export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'TechStore - Home' },
  { path: 'produtos' , component: produtos, title: 'TechStore - Produtos'},
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'TechStore - Gerenciar Produtos' },
   { path: 'novo-produto', component: GerenciarProdutosNovos, title: 'TechStore - Gerenciar Produtos Novos' },
  { path: 'carrinho', component: Carrinho, title: 'TechStore - Carrinho' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
  /* { path: 'login', component: Home, title: 'TechStore - Login' },
   //adicionar deopois que gerar os componentes
   */


];
