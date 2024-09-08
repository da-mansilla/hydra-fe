import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-expediente-progress-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expediente-progress-bar.component.html',
  styles: ``
})
export class ExpedienteProgressBarComponent {
  @Input() estados =[
    {nombre:"Pendiente", isCompleted: true},
    {nombre:"En Evaluacion", isCompleted: true},
    {nombre:"Aprobado", isCompleted: false},
    {nombre:"Rechazado", isCompleted:false}
  ]

}
