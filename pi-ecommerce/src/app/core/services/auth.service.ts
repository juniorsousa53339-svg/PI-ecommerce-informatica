import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Usuario {
  nome: string;
  tipo: 'admin' | 'user';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAtual = new BehaviorSubject<Usuario | null>(null);
  public usuarioAtual$ = this.usuarioAtual.asObservable();

  constructor() {
    this.carregarUsuarioSalvo();
  }

  login(nome: string, senha: string): boolean {
    // Validação de admin
    if (nome === 'admin' && senha === '12345') {
      const usuario: Usuario = { nome: 'admin', tipo: 'admin' };
      this.usuarioAtual.next(usuario);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }

    // Validação de usuário comum
    if (nome !== 'admin' && senha === '54321') {
      const usuario: Usuario = { nome: nome, tipo: 'user' };
      this.usuarioAtual.next(usuario);
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }

    return false;
  }

  logout(): void {
    this.usuarioAtual.next(null);
    localStorage.removeItem('usuario');
  }

  estaAutenticado(): boolean {
    return this.usuarioAtual.value !== null;
  }

  ehAdmin(): boolean {
    return this.usuarioAtual.value?.tipo === 'admin';
  }

  obterUsuarioAtual(): Usuario | null {
    return this.usuarioAtual.value;
  }

  private carregarUsuarioSalvo(): void {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      try {
        const usuario = JSON.parse(usuarioSalvo) as Usuario;
        this.usuarioAtual.next(usuario);
      } catch (e) {
        localStorage.removeItem('usuario');
      }
    }
  }
}
