import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { UserService } from '../../../shared/services/users.service';
import { UserLogged } from '../../../shared/interfaces/user.interface';
import { FormsModule } from '@angular/forms';
import { ExpedienteNew } from '../../../shared/interfaces/expediente.interface';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expediente-new',
  standalone: true,
  imports: [HeadingTitleComponent,FormsModule],
  templateUrl: './expediente-new.component.html',
  styles: ``
})
export default class ExpedienteNewComponent {
  userLogged: UserLogged | undefined;

  newExpediente : ExpedienteNew = {
    "dni_usuario" : 0,
    "apellido_nombre_solicitante" : 'Agustin Mansilla',
    "dni_solicitante" : 1234,
    "email_solicitante" : 'agustin@gmail.com',
    "colegiado" : 'SI',
    "telefono_solicitante" : '3887718123',
    "nombre_titular" : 'Luciano Garcia',
    "direccion_obra" : 'Granadas 345',
    "padron_catastral"  : 'A-308',
    "nro_normativa" : 1,
    "estado_construccion" : 'PENDIENTE',

    "fecha_alta_expediente" : new Date().toString(),
    "tipo_obra" : 'Vivienda',
    "estado_tramite" : "PENDIENTE",
    "historial_seguimiento" : '',
    "descripcion_tramite" : '',
  }
  constructor(private userService: UserService, private expedienteService: ExpedienteService, private router: Router){}

  getNombreNormativa(nro_normativa: number){
    if (nro_normativa === 1) return 'Anteproyecto';
    else return 'Proyecto';
  }

  ngOnInit(){
    this.userLogged = this.userService.getUserLogged();
    this.newExpediente.dni_usuario = Number(this.userLogged.dni);
  }
  
  pagina=1;

  avanzarPagina(event: Event){
    event.preventDefault();
    this.pagina++;
  }
  volverPagina(event: Event){
    event.preventDefault();
    this.pagina--;
  }
  crearExpediente(){
    console.log(this.newExpediente);
    console.log("Expediente creado");
    this.expedienteService.createExpediente(this.newExpediente).subscribe(
      (response) => {
        console.log(response);

      }
    );
  }
}
