import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Produto } from '../../core/types/types';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-gerenciar-produtos',
  imports: [FormsModule, CommonModule],
  templateUrl: './gerenciar-produtos.component.html',
  styleUrl: './gerenciar-produtos.component.scss'
})
export class GerenciarProdutosComponent implements OnInit {

  listaProdutos: Produto[] = [];
  produto: Produto = {} as Produto;
  produtoId?: number;
  modoEdicao = false;

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    });
  }

  editar(id: number): void {
    this.produtoId = id;
    this.modoEdicao = true;
    this.service.buscarPorId(id).subscribe((p) => {
      this.produto = { ...p };
    });
  }

  excluir(id: number): void {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }

  submeter(): void {
    if (this.modoEdicao && this.produtoId) {
      this.service.editar(this.produto).subscribe(() => {
        this.limpar();
        this.carregarProdutos();
      });
    } else {
      this.service.incluir(this.produto).subscribe(() => {
        this.limpar();
        this.carregarProdutos();
      });
    }
  }

  limpar(): void {
    this.produto = {} as Produto;
    this.produtoId = undefined;
    this.modoEdicao = false;
  }
}
