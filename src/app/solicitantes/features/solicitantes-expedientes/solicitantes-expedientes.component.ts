import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';

@Component({
  selector: 'app-solicitantes-expedientes',
  standalone: true,
  imports: [HeadingTitleComponent],
  templateUrl: './solicitantes-expedientes.component.html',
  styles: ``
})
export default class SolicitantesExpedientesComponent {

  expedientes = [
      {id:1, nombre:"Juan Perez", estado:"Finalizado" ,numeroExpediente:"A-1234"},
      {id:2, nombre:"Juan Perez", estado:"En Evaluacion", numeroExpediente:"A-1235"},
  ]
}
