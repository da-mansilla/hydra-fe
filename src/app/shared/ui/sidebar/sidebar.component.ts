import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { UserLogged } from '../../interfaces/user.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private userLogged;
  public username;
  constructor(private userService: UserService){
    this.userLogged = this.userService.getUserLogged();
    this.username = this.userLogged.nombre_usuario;
  }

}
