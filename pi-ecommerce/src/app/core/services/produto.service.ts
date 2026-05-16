import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly STORAGE_KEY = 'pi-ecommerce-produtos';

  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Notebook Dell Inspiron 15',
      marca: 'Dell',
      categoria: 'Notebooks',
      modelo: 'Inspiron 15',
      preco: 3499.90,
      estoque: 12,
      status: 'Disponivel',
      descricao: 'Processador Intel Core i5, 8GB RAM, 512GB SSD'
    },
    {
      id: 2,
      nome: 'Mouse Gamer RGB',
      marca: 'Redragon',
      categoria: 'Perifericos',
      modelo: 'M602',
      preco: 149.90,
      estoque: 35,
      status: 'Disponivel',
      descricao: 'Mouse gamer com iluminacao RGB e 7200 DPI'
    },
    {
      id: 3,
      nome: 'SSD 1TB NVMe',
      marca: 'Kingston',
      categoria: 'Componentes',
      modelo: 'NV2',
      preco: 429.90,
      estoque: 4,
      status: 'Baixo estoque',
      descricao: 'SSD NVMe PCIe 4.0, leitura ate 3500 MB/s'
    }
  ];

  constructor() {
    this.carregarProdutosSalvos();
  }

  listar(): Observable<Produto[]> {
    return of(this.produtos.map((produto) => ({ ...produto })));
  }

  buscarPorId(id: number): Observable<Produto> {
    const produto = this.produtos.find((p) => p.id === id);
    return of({ ...produto } as Produto);
  }

  incluir(produto: Produto): Observable<Produto> {
    const novoProduto = {
      ...produto,
      id: this.proximoId()
    };

    this.produtos = [...this.produtos, novoProduto];
    this.salvarProdutos();

    return of({ ...novoProduto });
  }

  editar(produto: Produto): Observable<Produto> {
    this.produtos = this.produtos.map((p) =>
      p.id === produto.id ? { ...produto } : p
    );
    this.salvarProdutos();

    return of({ ...produto });
  }

  excluir(id: number): Observable<Produto> {
    const produtoExcluido = this.produtos.find((p) => p.id === id) as Produto;
    this.produtos = this.produtos.filter((p) => p.id !== id);
    this.salvarProdutos();

    return of({ ...produtoExcluido });
  }

  private carregarProdutosSalvos(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const produtosSalvos = localStorage.getItem(this.STORAGE_KEY);
    if (produtosSalvos) {
      this.produtos = JSON.parse(produtosSalvos);
    }
  }

  private salvarProdutos(): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.produtos));
  }

  private proximoId(): number {
    const maiorId = this.produtos.reduce((maior, produto) => Math.max(maior, produto.id ?? 0), 0);
    return maiorId + 1;
  }
}
