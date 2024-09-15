import { Component } from '@angular/core';

@Component({
  selector: 'app-expediente-documentacion',
  standalone: true,
  imports: [],
  templateUrl: './expediente-documentacion.component.html',
  styles: ``
})
export default class ExpedienteDocumentacionComponent {
titulo= 'documento'
documentos= [{nombre:'Nota de Solicitud de Aprobación', fecha:'string'}, {nombre:'Informe de Registro inmobiliario', fecha:'string2'}, {nombre:'Plano de Arquitectura', fecha:'string2'},  {nombre:'Memoria Técnica Descriptiva', fecha:'string2'}] 
}
