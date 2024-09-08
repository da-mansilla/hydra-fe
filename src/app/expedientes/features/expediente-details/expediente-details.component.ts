import { Component, input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { ExpedienteProgressBarComponent } from '../../ui/expediente-progress-bar/expediente-progress-bar.component';
import ExpedienteListComponent from '../expediente-list/expediente-list.component';
import { ExpedienteTableComponent } from "../../ui/expediente-table/expediente-table.component";

@Component({
  selector: 'app-expediente-details',
  standalone: true,
  imports: [HeadingTitleComponent, ExpedienteProgressBarComponent, ExpedienteListComponent, ExpedienteTableComponent],
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
