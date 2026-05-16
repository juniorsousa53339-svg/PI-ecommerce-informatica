import { Routes } from '@angular/router';
import { GerenciarProdutosComponent } from './pages/gerenciar-produtos/gerenciar-produtos.component';

export const routes: Routes = [
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, title: 'Gerenciar Produtos' },
  { path: '', redirectTo: 'gerenciar-produtos', pathMatch: 'full' }
];
