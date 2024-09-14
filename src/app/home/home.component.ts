import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../shared/ui/heading-title/heading-title.component';
import { SidebarComponent } from '../shared/ui/sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingTitleComponent,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
