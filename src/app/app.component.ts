import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/ui/sidebar/sidebar.component';
import { filter } from 'rxjs';
import { SidebarSolicitanteComponent } from './shared/ui/sidebar-solicitante/sidebar-solicitante.component';
import { UserService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SidebarSolicitanteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private userLogged$! : Observable<UserLogged>;
  constructor(private router:Router, private userService: UserService) {

  }
  ngOnInit() {
    this.userService.getUserLogged();

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      if (event.url === '/login') {
        this.showSidebar = false;
        this.showSidebarSolicitante = false;
        return;
      }
      if (event.url.includes('solicitantes')) {
        this.showSidebar = false;
        this.showSidebarSolicitante = true;
        return;
      }else{
        this.showSidebar = true;
        this.showSidebarSolicitante = false;
      }
      //this.showSidebar = event.url !== '/login';
    });

  }
  title = 'hydra-fe';
  showSidebar = true;
  showSidebarSolicitante = false;


}
