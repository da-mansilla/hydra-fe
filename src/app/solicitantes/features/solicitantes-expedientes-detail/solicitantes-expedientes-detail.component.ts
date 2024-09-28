import { Component, input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { ExpedienteProgressBarComponent } from '../../../expedientes/ui/expediente-progress-bar/expediente-progress-bar.component';
import { ExpedienteTableComponent } from '../../../expedientes/ui/expediente-table/expediente-table.component';
import {Router, RouterLink} from '@angular/router';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import {ExpedienteDetail, Expedientes} from '../../../shared/interfaces/expediente.interface';
import { Observable } from 'rxjs';
import {AsyncPipe, TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-solicitantes-expedientes-detail',
  standalone: true,
  imports: [RouterLink, HeadingTitleComponent, ExpedienteProgressBarComponent, ExpedienteTableComponent, AsyncPipe, TitleCasePipe],
  templateUrl: './solicitantes-expedientes-detail.component.html',
  styles: ``
})
export default class SolicitantesExpedientesDetailComponent {
  public expediente$! : Observable<ExpedienteDetail>;
  public expedientes$! : Observable<Expedientes>;
  public estado="";
  public siguienteEstado="";
  public descripcion=" ";
  public estados = ["PENDIENTE","EN EVALUACION","REVISION DE PLANO","CALCULO ESTRUCTURA","APROBADO"];

  id = input.required<string>();

  constructor(private router: Router,private expedienteService: ExpedienteService){}

  ngOnInit(){

    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
    this.expedientes$ = this.expedienteService.getExpedientes();
    this.expedientes$.subscribe((expediente) => {
      expediente.Expedientes.forEach((exp) => {
        if(exp.nro_expediente == Number(this.id())){
          this.estado = exp.estado;
        }
      })
    })
  }

  ngOnUpdate(){
    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
    this.expedientes$ = this.expedienteService.getExpedientes();
    this.expedientes$.subscribe((expediente) => {
      expediente.Expedientes.forEach((exp) => {
        if(exp.nro_expediente == Number(this.id())){
          this.estado = exp.estado;
        }
      })
    })
  }

  expediente = {
    "id" : this.id,
    "nombre" : "Juan Perez",
    "dni" : "12345678",
    numeroExpediente: "A-1234",
    "estado" : "Activo",
  }
  //estados = ["Pendiente","En Evaluacion","Aprobado","Rechazado"];
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

  goExpedienteDocumentacion(){
    this.router.navigate(['solicitantes/expedientes/documentacion', this.id()]);
  }
}
