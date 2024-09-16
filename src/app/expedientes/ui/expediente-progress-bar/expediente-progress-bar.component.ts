import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Estado{
  nombre:string;
  isCompleted:boolean;
}
// interface Estados{
//   estados:Estado[];
// }

@Component({
  selector: 'app-expediente-progress-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './expediente-progress-bar.component.html',
  styles: ``
})
export class ExpedienteProgressBarComponent {
  @Input() estado:string= "Pendiente";

  public estados: Estado[] =[
    {nombre:"PENDIENTE", isCompleted: false},
    {nombre:"EN EVALUACION", isCompleted: false},
    {nombre:"REVISION DE PLANO", isCompleted: false},
    {nombre:"CALCULO ESTRUCTURA", isCompleted:false},
    {nombre:"APROBADO", isCompleted:false}
  ]

  ngOnInit(): void {
    if(this.estado in this.estados.map(e=>e.nombre)){
    for(let i = 0; i < this.estados.length; i++){
      this.estados[i].isCompleted = true;
      if (this.estados[i].nombre === this.estado.toUpperCase()){
        break;
      }
    };
    }
  }
}
