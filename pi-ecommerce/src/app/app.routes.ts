import { Routes } from '@angular/router';
import { GerenciarProdutosComponent } from './pages/gerenciar-produtos/gerenciar-produtos.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard], title: 'Produtos' },
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, canActivate: [AuthGuard, AdminGuard], title: 'Gerenciar Produtos' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
