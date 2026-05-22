import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AuthService, Usuario } from '../../core/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  usuario$: Observable<Usuario | null>;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.usuario$ = this.authService.usuarioAtual$;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ehAdmin(): boolean {
    return this.authService.ehAdmin();
  }
}
