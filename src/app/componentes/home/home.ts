import { Component, OnInit } from '@angular/core';
import { RouterLink} from "@angular/router";
import { ProdutoCard } from '../produto-card/produto-card';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProdutoCard,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

   produtos: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(produtos => {
      this.produtos = produtos.slice(0, 6);
      console.log(this.produtos);
    });
  }
}
