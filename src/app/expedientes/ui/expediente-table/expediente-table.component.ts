import { Component, Input } from '@angular/core';

  

@Component({
  selector: 'app-expediente-table',
  standalone: true,
  imports: [],
  templateUrl: './expediente-table.component.html',
  styles: ``
})

export class ExpedienteTableComponent {
  @Input() ultimosMovinientos = [{
    nombre:"",
    fecha: "",
    revisadoPor: ""
  }]

}
