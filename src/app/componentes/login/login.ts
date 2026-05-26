import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario = '';
  senha = '';
  mensagem = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  entrar(): void {
    this.authService.login(this.usuario, this.senha);

    if (this.authService.isAdmin()) {
      this.mensagem = 'Login de admin realizado com sucesso!';
    } else {
      this.mensagem = 'Login realizado como usuario comum.';
    }

    this.router.navigate(['/produtos']);
  }
}
