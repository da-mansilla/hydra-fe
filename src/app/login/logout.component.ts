import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/users.service';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    // Llama al método logout del servicio de autenticación
    this.userService.logout();

    // Redirige al login después de cerrar sesión
    this.router.navigate(['/login']);
  }
}