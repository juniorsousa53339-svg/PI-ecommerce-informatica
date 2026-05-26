
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../../core/types/types';

interface ItemCarrinho extends Produto {
  quantidade: number;
}

@Component({
  selector: 'app-carrinho',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrinho.html',
  styleUrls: [
    './carrinho.css',
    '../home/home.css',
  ],
})
export class Carrinho implements OnInit {
  carrinho: ItemCarrinho[] = [];
  frete = 49.9;

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho(): void {
    this.carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
  }

  mudarQuantidade(index: number, valor: number): void {
    this.carrinho[index].quantidade += valor;

    if (this.carrinho[index].quantidade <= 0) {
      this.carrinho.splice(index, 1);
    }

    localStorage.setItem('carrinho', JSON.stringify(this.carrinho));
  }

  get quantidadeTotal(): number {
    return this.carrinho.reduce((total, item) => total + item.quantidade, 0);
  }

  get subtotal(): number {
    return this.carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);
  }

  get freteAtual(): number {
    return this.carrinho.length > 0 ? this.frete : 0;
  }

  get total(): number {
    return this.subtotal + this.freteAtual;
  }

  formatarPreco(valor: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }
}
