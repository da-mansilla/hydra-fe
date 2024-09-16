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
documentos= [{nombre:'Nota de Solicitud de Aprobación', fecha:'12/09/2024'}, {nombre:'Informe de Registro inmobiliario', fecha:'12/09/2024'}, {nombre:'Plano de Arquitectura', fecha:'14/09/2024'},  {nombre:'Memoria Técnica Descriptiva', fecha:'15/09/2024'}] 
}
