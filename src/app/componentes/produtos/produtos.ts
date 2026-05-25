import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';
import { ProdutoCard } from "../produto-card/produto-card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos',
  imports: [RouterLink, ProdutoCard,CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class produtos implements OnInit{
   produtos: Produto[] = [];

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {

    this.service.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

}

