import { Component, input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { ExpedienteProgressBarComponent } from '../../ui/expediente-progress-bar/expediente-progress-bar.component';
import ExpedienteListComponent from '../expediente-list/expediente-list.component';
import { ExpedienteTableComponent } from "../../ui/expediente-table/expediente-table.component";
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { ExpedienteDetail } from '../../../shared/interfaces/expediente.interface';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-expediente-details',
  standalone: true,
  imports: [AsyncPipe,TitleCasePipe,RouterLink ,HeadingTitleComponent, ExpedienteProgressBarComponent, ExpedienteListComponent, ExpedienteTableComponent],
  templateUrl: './expediente-details.component.html',
  styles: ``
})
export default class ExpedienteDetailsComponent {
  public expediente$! : Observable<ExpedienteDetail>;
  id = input.required<string>();

  constructor(private expedienteService: ExpedienteService){}

  ngOnInit(){
    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
  }

  
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
