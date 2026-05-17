import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';
  erro: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(): void {
    this.erro = '';

    if (!this.nome.trim() || !this.senha.trim()) {
      this.erro = 'Preencha o nome e a senha';
      return;
    }

    if (this.authService.login(this.nome, this.senha)) {
      this.router.navigate(['/produtos']);
    } else {
      this.erro = 'Credenciais inválidas. Verifique o nome e a senha.';
      this.senha = '';
    }
  }
}
