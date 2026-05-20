import { Produto } from './../../core/types/types';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../core/services/produto.service';


@Component({
  selector: 'app-gerenciar-produtos',
  imports: [FormsModule, CommonModule],
  templateUrl: './gerenciar-produtos.html',
  styleUrl: './gerenciar-produtos.css'
})
export class GerenciarProdutosComponent implements OnInit {

  listaProdutos: Produto[] = [];
  produto: Produto = this.criarProdutoVazio();
  produtoId?: number;
  modoEdicao = false;
  termoBusca = '';
  modalAberto = false;

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos.sort((a, b) => (b.id || 0) - (a.id || 0));
    });
  }

  get produtosFiltrados(): Produto[] {
    const termo = this.termoBusca.trim().toLowerCase();

    if (!termo) {
      return this.listaProdutos;
    }

    return this.listaProdutos.filter((produto) =>
      [produto.nome, produto.marca, produto.categoria, produto.modelo, produto.status]
        .some((valor) => valor?.toLowerCase().includes(termo))
    );
  }

  get totalEstoque(): number {
    return this.listaProdutos.reduce((total, produto) => total + Number(produto.estoque || 0), 0);
  }

  get valorEstoque(): number {
    return this.listaProdutos.reduce((total, produto) => {
      return total + Number(produto.preco || 0) * Number(produto.estoque || 0);
    }, 0);
  }

  get totalBaixoEstoque(): number {
    return this.listaProdutos.filter((produto) => Number(produto.estoque || 0) <= 5).length;
  }

  abrirModalNovo(): void {
    this.limpar();
    this.modalAberto = true;
  }

  editar(id: number): void {
    this.produtoId = id;
    this.modoEdicao = true;
    this.modalAberto = true;
    this.service.buscarPorId(id).subscribe((p) => {
      this.produto = { ...p };
    });
  }

  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este produto?')) {
      this.service.excluir(id).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }

  submeter(): void {
    if (!this.produto.nome || !this.produto.marca || !this.produto.categoria || !this.produto.preco || this.produto.estoque === undefined) {
      alert('Por favor preencha todos os campos obrigatorios!');
      return;
    }

    if (this.modoEdicao && this.produtoId) {
      this.produto.id = this.produtoId;
      this.service.editar(this.produto).subscribe(() => {
        this.fecharModal();
        this.carregarProdutos();
      });
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.fecharModal();
        this.carregarProdutos();
      });
    }
  }

  fecharModal(): void {
    this.modalAberto = false;
    this.limpar();
  }

  limpar(): void {
    this.produto = this.criarProdutoVazio();
    this.produtoId = undefined;
    this.modoEdicao = false;
  }

  private criarProdutoVazio(): Produto {
    return {
      nome: '',
      marca: '',
      categoria: '',
      modelo: '',
      preco: 0,
      estoque: 0,
      status: 'Disponivel',
      descricao: ''
    };
  }
}
