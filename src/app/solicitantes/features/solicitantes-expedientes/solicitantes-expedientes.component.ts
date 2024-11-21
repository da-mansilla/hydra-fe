import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ExpedienteItem, Expedientes } from '../../../shared/interfaces/expediente.interface';
import { ExpedienteService } from '../../../shared/services/expedientes.services';
import { UserService } from '../../../shared/services/users.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-solicitantes-expedientes',
  standalone: true,
  imports: [HeadingTitleComponent, RouterLink, AsyncPipe],
  templateUrl: './solicitantes-expedientes.component.html',
  styles: ``
})
export default class SolicitantesExpedientesComponent {
  public expedientes! : Observable<Expedientes>;
  public expedientesInicial! : Observable<Expedientes>;
  public expedientesMostrar : ExpedienteItem[] = [];
  private userLogged;
  public dni;


  constructor(private router: Router,private userService: UserService,private expedienteService: ExpedienteService){
    this.userLogged = this.userService.getUserLogged();
    this.dni = this.userLogged.dni;
  }

  ngOnInit(){
    this.expedientesInicial = this.expedienteService.getExpedientesFromSolicitante(Number(this.dni));
    // Iterar sobre los expedientes
    this.expedientesInicial.subscribe(expedientes => {
      expedientes.Expedientes.forEach(expediente => {
        const expedienteDetails = this.expedienteService.getExpedienteDetail(expediente.nro_expediente.toString());
        expedienteDetails.subscribe(expedienteDetail => {
          this.expedientesMostrar.push({
            nombre_solicitante: expedienteDetail.nombre_titular,
            estado: expediente.estado,
            nro_expediente: expediente.nro_expediente
          });
          console.log(this.expedientesMostrar);
          
        });
      })
    });
    this.expedientes = this.expedienteService.getExpedientesFromSolicitante(Number(this.dni));
  }
  
  expedienteDetails(expedienteID: number) {

    console.log(expedienteID);


    // Redirigir a la vista de detalles del expediente
    this.router.navigate(['solicitantes/expedientes', expedienteID]);
  }

}
