import { ProdutoService } from './../../core/services/produto.service';
import { Produto } from './../../core/types/types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-gerenciar-produtos-novos',
  imports: [CommonModule, FormsModule],
  templateUrl: './gerenciar-produtos-novos.html',
  styleUrl: './gerenciar-produtos-novos.css',
})

export class GerenciarProdutosNovos {

produto: Produto = {
  imagem: '',
  nome: '',
  marca: '',
  categoria: '',
  modelo: '',
  preco: 0,
  estoque: 0,
  status: 'Disponivel',
  descricao: ''
};

constructor(private service: ProdutoService){}

salvarProduto(): void {

 this.service.incluir(this.produto).subscribe(() => {

  alert('Produto cadastrado!');

 });

}

}
