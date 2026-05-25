import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';
import { ProdutoCard } from "../produto-card/produto-card";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-produtos',
  imports: [RouterLink, ProdutoCard, CommonModule,FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  carregando = true;
  erro: string = '';

  // Filtro de busca por nome
  termoBusca: string = '';

  // Categorias dinâmicas
  categorias: string[] = [];
  categoriaSelecionada: string = '';

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.carregando = true;
    this.erro = 'produto não encontrado';

    this.produtoService.listar().subscribe({
      next: (data) => {
        this.produtos = data.sort((a, b) => (b.id || 0) - (a.id || 0));
        // Extrai categorias únicas
        this.categorias = Array.from(new Set(this.produtos.map(p => p.categoria)));
        this.carregando = false;
      },
      error: (err) => {
        this.erro = 'Erro ao carregar produtos. Verifique se o JSON-Server está rodando em http://localhost:3000';
        this.carregando = false;
        console.error('Erro:', err);
      }
    });
  }

  // Getter que filtra produtos por categoria e nome
  get produtosFiltrados(): Produto[] {
    let lista = this.produtos;

    // Filtra por categoria (se selecionada)
    if (this.categoriaSelecionada) {
      lista = lista.filter(p => p.categoria === this.categoriaSelecionada);
    }

    // Filtra por nome (se preenchido)
    if (this.termoBusca.trim()) {
      const termo = this.termoBusca.trim().toLowerCase();
      lista = lista.filter(p => p.nome.toLowerCase().includes(termo));
    }

    return lista;
  }

  formatarPreco(preco: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  }
}
