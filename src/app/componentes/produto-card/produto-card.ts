import { Component, Input} from '@angular/core';
import { Produto } from '../../core/types/types';


@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css',
})
export class ProdutoCard{
  
  @Input() produto!: Produto;

}
