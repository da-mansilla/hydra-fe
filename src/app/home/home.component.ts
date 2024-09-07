import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
