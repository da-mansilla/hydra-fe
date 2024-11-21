import { Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpedienteDetail } from '../../../shared/interfaces/expediente.interface';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import {AsyncPipe, DatePipe} from '@angular/common';
import {Documentos} from "../../../shared/interfaces/documentacion.interface";

@Component({
  selector: 'app-expediente-information',
  standalone: true,
  imports: [HeadingTitleComponent, AsyncPipe, DatePipe],
  templateUrl: './expediente-information.component.html',
  styles: ``
})
export default class ExpedienteInformationComponent {

public expediente$! : Observable<ExpedienteDetail>;
public documentos$! : Observable<Documentos>;
id = input.required<string>();

constructor(private expedienteService: ExpedienteService){}

ngOnInit(){
  this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
  this.documentos$ = this.expedienteService.getDocumentacionExpediente(this.id());
}

titulo= 'documento'
documentos= [{nombre:'Nota de Solicitud de Aprobación', fecha:'12/09/2024'}, {nombre:'Informe de Registro inmobiliario', fecha:'12/09/2024'}, {nombre:'Plano de Arquitectura', fecha:'14/09/2024'},  {nombre:'Memoria Técnica Descriptiva', fecha:'15/09/2024'}]
  protected readonly Date = Date;
}
