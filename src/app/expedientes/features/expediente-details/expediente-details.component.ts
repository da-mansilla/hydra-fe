import { Component, input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-expediente-details',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './expediente-details.component.html',
  styles: ``
})
export default class ExpedienteDetailsComponent {
  id = input.required<string>();
  expediente = {
    "id" : this.id,
    "nombre" : "Agustin Mansilla",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
}
