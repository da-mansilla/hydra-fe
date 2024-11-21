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
  @Input() estado:string = "";

  public estados: Estado[] =[
    {nombre:"PENDIENTE", isCompleted: false},
    {nombre:"EN EVALUACION", isCompleted: false},
    {nombre:"REVISION DE PLANO", isCompleted: false},
    {nombre:"CALCULO ESTRUCTURA", isCompleted:false},
    {nombre:"APROBADO", isCompleted:false}
  ]

  ngOnInit(): void {
    this.estados.forEach(estado => {
      estado.isCompleted = false;
    });
    for(let i = 0; i < this.estados.length; i++){
      this.estados[i].isCompleted = true;
      if (this.estados[i].nombre.toUpperCase() === this.estado.toUpperCase()){
        break;
      }
    }
    }
  ngOnChanges(): void{
    this.estados.forEach(estado => {
      estado.isCompleted = false;
    });
    console.log("Estado: ", this.estado);
    for(let i = 0; i < this.estados.length; i++){
      this.estados[i].isCompleted = true;
      if (this.estados[i].nombre.toUpperCase() === this.estado.toUpperCase()){
        break;
      }
    }
    console.log(this.estados);
  }
}
