import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/ui/sidebar/sidebar.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router:Router){

  }
  ngOnInit() {

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.showSidebar = event.url !== '/login';
    });

  }
  title = 'hydra-fe';
  showSidebar = true;


}
