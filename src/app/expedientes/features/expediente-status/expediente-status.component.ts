import { Component, input, Input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-expediente-status',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './expediente-status.component.html',
  styles: ``
})
export default class ExpedienteStatusComponent {
  id = input.required<string>();
  expediente = {
      id : this.id,
      nombre : "Agustin Mansilla",
      dni : "12345678",
      numeroExpediente: "A-1234",
      estado : "Activo",
  }
}
