import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/types/types';

@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = true;
  erro: string = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.erro = '';

    this.produtoService.listar().subscribe({
      next: (data) => {
        this.produtos = data.sort((a, b) => (b.id || 0) - (a.id || 0));
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar produtos. Verifique se o JSON-Server está rodando em http://localhost:3000';
        this.carregando = false;
        console.error('Erro:', err);
      }
    });
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }
}
