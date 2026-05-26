import { ProdutoService } from './../../core/services/produto.service';
import { Produto } from './../../core/types/types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gerenciar-alterar-produtos',
  imports: [CommonModule, FormsModule],
  templateUrl: './gerenciar-alterar-produtos.html',
  styleUrl: './gerenciar-alterar-produtos.css',
})
export class GerenciarAlterarProdutos {


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


constructor(
  private service: ProdutoService,
  private route: ActivatedRoute,
  private router: Router
) {}


ngOnInit(): void {

 const id = Number(this.route.snapshot.paramMap.get('id'));
 if (id) {

  this.service.buscarPorId(id).subscribe((produto: Produto) => {
    this.produto = { ...produto };
  });
}
}

editarProduto(): void {
 this.service.editar(this.produto).subscribe(() => {
  alert('Produto atualizado!');
  this.router.navigate(['/gerenciar-produtos']);

 });

}

}
