import { ProdutoService } from './../../core/services/produto.service';
import { Produto } from './../../core/types/types';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
  private router: Router,
   private cdr: ChangeDetectorRef
) {}


ngOnInit(): void {

 const id = Number(this.route.snapshot.paramMap.get('id'));
 if (id) {

  this.service.buscarPorId(id).subscribe((produto: Produto) => {
    this.produto = { ...produto };
    this.cdr.detectChanges();
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
