import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { InputSearchComponent } from '../../../shared/ui/input-search/input-search.component';
import { RedirectCommand, Router, RouterLink } from '@angular/router';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { ExpedienteItem, Expedientes } from '../../../shared/interfaces/expediente.interface';
import { Observable } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-expediente-list',
  standalone: true,
  imports: [AsyncPipe,HeadingTitleComponent,RouterLink, InputSearchComponent, RouterLink, TitleCasePipe],
  templateUrl: './expediente-list.component.html',
})
export default class ExpedienteListComponent {
  public exp$! : Observable<Expedientes>;
  constructor(private router: Router, private expedienteService: ExpedienteService) {
    
  }
  
  ngOnInit(){
    this.exp$ = this.expedienteService.getExpedientes();
  }
  exp="ds";

  ESTADOS = ["PENDIENTE","EN EVALUACION","REVISION DE PLANO","CALCULO ESTRUCTURA","APROBADO"];

  //ESTADOS = ["PENDIENTE","EN EVALUACION","APROBADO","RECHAZADO"];
  expedientes = [
    {id:1, nombre:"Juan Perez", estado:"Pendiente" ,numeroExpediente:"A-1234"},
    {id:2, nombre:"Hernan Sosa", estado:"En Evaluacion", numeroExpediente:"A-1235"},
    {id:3, nombre:"Damian Llosa", estado:"Aprobado", numeroExpediente:"A-1236"},
    {id:4, nombre:"Ricardo Nieves", estado:"Rechazado", numeroExpediente:"A-1237"},
  ];
  expedienteDetails(expedienteID: number) {

    console.log(expedienteID);


    // Redirigir a la vista de detalles del expediente
    this.router.navigate(['expedientes', expedienteID]);
  }

}
