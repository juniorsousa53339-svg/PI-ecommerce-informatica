import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogado: 'admin' | 'usuario' | null = null;

  login(usuario: string, senha: string): void {
    if (usuario === 'admin' && senha === 'admin@1234') {
      this.usuarioLogado = 'admin';
    } else {
      this.usuarioLogado = 'usuario';
    }
  }

  logout(): void {
    this.usuarioLogado = null;
  }

  estaLogado(): boolean {
    return this.usuarioLogado !== null;
  }

  isAdmin(): boolean {
    return this.usuarioLogado === 'admin';
  }
}
