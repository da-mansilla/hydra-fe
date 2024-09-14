import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-solicitantes-expedientes',
  standalone: true,
  imports: [HeadingTitleComponent, RouterLink],
  templateUrl: './solicitantes-expedientes.component.html',
  styles: ``
})
export default class SolicitantesExpedientesComponent {
  constructor(private router: Router){}

  expedientes = [
      {id:1, nombre:"Juan Perez", estado:"Finalizado" ,numeroExpediente:"A-1234"},
      {id:2, nombre:"Juan Perez", estado:"En Evaluacion", numeroExpediente:"A-1235"},
  ]
  expedienteDetails(expedienteID: number) {

    console.log(expedienteID);


    // Redirigir a la vista de detalles del expediente
    this.router.navigate(['solicitantes/expedientes', expedienteID]);
  }

}
