import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-solicitantes-expedientes-documentacion',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './solicitantes-expedientes-documentacion.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDocumentacionComponent {
  expediente = {
    "id" : "2",
    "nombre" : "Juan Perez",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
}
