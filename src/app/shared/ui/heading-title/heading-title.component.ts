import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading-title',
  standalone: true,
  imports: [],
  templateUrl: './heading-title.component.html',
  styleUrl: './heading-title.component.scss'
})
export class HeadingTitleComponent {
  @Input() title = 'Heading Title';
}
