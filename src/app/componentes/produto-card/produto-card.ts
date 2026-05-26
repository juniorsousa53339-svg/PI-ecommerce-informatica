import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../core/types/types';
import { AuthService } from '../../core/services/auth.service';

interface ItemCarrinho extends Produto {
  quantidade: number;
}

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css',
})
export class ProdutoCard {
  @Input() produto!: Produto;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  comprarProduto(): void {
    if (!this.authService.estaLogado()) {
      this.router.navigate(['/login']);
      return;
    }

    const carrinho: ItemCarrinho[] = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const itemExistente = carrinho.find((item) => item.id === this.produto.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ ...this.produto, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    this.router.navigate(['/carrinho']);
  }

}
