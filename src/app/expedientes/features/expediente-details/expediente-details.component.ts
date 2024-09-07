import { Component, input } from '@angular/core';

@Component({
  selector: 'app-expediente-details',
  standalone: true,
  imports: [],
  templateUrl: './expediente-details.component.html',
  styles: ``
})
export default class ExpedienteDetailsComponent {
  id = input.required<string>();
}
