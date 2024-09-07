import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-expediente-list',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './expediente-list.component.html',
  styleUrl: './expediente-list.component.scss'
})
export default class ExpedienteListComponent {

}
