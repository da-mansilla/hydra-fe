import { Component, input, Input } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { Observable } from 'rxjs';
import { ExpedienteDetail, ExpedienteEstado, Expedientes } from '../../../shared/interfaces/expediente.interface';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expediente-status',
  standalone: true,
  imports: [HeadingTitleComponent,AsyncPipe, TitleCasePipe, FormsModule],
  templateUrl: './expediente-status.component.html',
  styles: ``
})
export default class ExpedienteStatusComponent {
  id = input.required<string>();

  private userLogged;
  public dni_usuario;

  public expediente$! : Observable<ExpedienteDetail>;
  public expedientes$! : Observable<Expedientes>;
  public estado="";
  public siguienteEstado="";
  public descripcion=" ";
  public estados = ["PENDIENTE","EN EVALUACION","REVISION DE PLANO","CALCULO ESTRUCTURA","APROBADO"];


  constructor(private expedienteService: ExpedienteService, private userService: UserService, private router: Router){
    this.userLogged = this.userService.getUserLogged();
    this.dni_usuario = this.userLogged.dni;
  }

  ngOnInit(){

    this.expediente$ = this.expedienteService.getExpedienteDetail(this.id());
    this.expedientes$ = this.expedienteService.getExpedientes();
    this.expedientes$.subscribe((expediente) => {
      expediente.Expedientes.forEach((exp) => {
        if(exp.nro_expediente == Number(this.id())){
          this.estado = exp.estado;
          this.siguienteEstado = this.getSiguienteEstado(this.estado);
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
          this.siguienteEstado = this.getSiguienteEstado(this.estado);
        }
      })
    })
  }

  getSiguienteEstado(estado: string){
    for(let i = 0; i < this.estados.length; i++){
      if (this.estados[i].toUpperCase() === estado.toUpperCase()){
        return this.estados[i+1];
      }
    }
    return "";
  }

  updateEstado(event: Event){
    event.preventDefault();
    console.log("Update")
    const body: ExpedienteEstado = {
      nro_expediente: this.id(),
      estado: this.siguienteEstado,
      descripcion_seguimiento: this.descripcion,
      dni_usuario: this.dni_usuario
    }
    this.expedienteService.updateExpedienteEstado(body).subscribe((res) => {
      console.log(res);
      this.router.navigate(["/expedientes", this.id()]);
    })

  }


}
