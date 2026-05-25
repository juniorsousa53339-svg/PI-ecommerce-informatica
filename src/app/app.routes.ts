import { Routes } from '@angular/router';

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Home } from './componentes/home/home';
import { ProdutosComponent } from './componentes/produtos/produtos';
import { Carrinho } from './componentes/carrinho/carrinho';
import { GerenciarProdutosNovos } from './componentes/gerenciar-produtos-novos/gerenciar-produtos-novos';
import { GerenciarAlterarProdutos } from './componentes/gerenciar-alterar-produtos/gerenciar-alterar-produtos';
import { Login } from './componentes/login/login';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'TechStore - Home' },
  { path: 'produtos' , component: ProdutosComponent, title: 'TechStore - Produtos'},
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'TechStore - Gerenciar Produtos' },
   { path: 'novo-produto', component: GerenciarProdutosNovos, title: 'TechStore - Gerenciar Produtos Novos' },
   { path: 'alterar-produto/:id', component: GerenciarAlterarProdutos, title: 'TechStore - Alterar Produto' },
  { path: 'carrinho', component: Carrinho, title: 'TechStore - Carrinho' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
   { path: 'login', component: Login, title: 'TechStore - Login' },
   


];
