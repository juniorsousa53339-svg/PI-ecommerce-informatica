import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from "./shared/navbar/navbar";
import { Home } from "./componentes/home/home";

import { GerenciarProdutosComponent } from './componentes/gerenciar-produtos/gerenciar-produtos';
import { Footer } from "./shared/footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, GerenciarProdutosComponent,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TechStore');
}
