import { Component, input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { ExpedienteProgressBarComponent } from '../../../expedientes/ui/expediente-progress-bar/expediente-progress-bar.component';
import { ExpedienteTableComponent } from '../../../expedientes/ui/expediente-table/expediente-table.component';
import { RouterLink } from '@angular/router';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { ExpedienteDetail } from '../../../shared/interfaces/expediente.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-solicitantes-expedientes-detail',
  standalone: true,
  imports: [RouterLink,HeadingTitleComponent, ExpedienteProgressBarComponent, ExpedienteTableComponent, AsyncPipe],
  templateUrl: './solicitantes-expedientes-detail.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDetailComponent {
  public expediente$! : Observable<ExpedienteDetail>;

  id = input.required<string>();

  constructor(private expedienteService: ExpedienteService){}

  ngOnInit(){
    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
  }
  expediente = {
    "id" : this.id,
    "nombre" : "Juan Perez",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
  estados = ["Pendiente","En Evaluacion","Aprobado","Rechazado"];
  ultimosMovinientos = [
    {
      nombre:"Avanzó a la etapa de Evaluación",
      fecha: "08/9/2024",
      revisadoPor: "Juan Perez"
    },
    {
      nombre:"Se inició el expediente",
      fecha: "08/9/2024",
      revisadoPor: "Juan Perez"
    }
  ]
}
