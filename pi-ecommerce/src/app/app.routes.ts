import { Routes } from '@angular/router';
import { GerenciarProdutosComponent } from './pages/gerenciar-produtos/gerenciar-produtos.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'produtos', component: ProdutosComponent, canActivate: [AuthGuard], title: 'Produtos' },
  { path: 'gerenciar-produtos', component: GerenciarProdutosComponent, canActivate: [AuthGuard, AdminGuard], title: 'Gerenciar Produtos' }
];
