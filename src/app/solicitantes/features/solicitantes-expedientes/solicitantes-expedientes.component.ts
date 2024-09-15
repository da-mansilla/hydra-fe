import { Component } from '@angular/core';
import { HeadingTitleComponent } from '../../../shared/ui/heading-title/heading-title.component';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Expedientes } from '../../../shared/interfaces/expediente.interface';
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
  private userLogged;
  public dni;


  constructor(private router: Router,private userService: UserService,private expedienteService: ExpedienteService){
    this.userLogged = this.userService.getUserLogged();
    this.dni = this.userLogged.dni;
  }

  ngOnInit(){
    this.expedientes = this.expedienteService.getExpedientesFromSolicitante(Number(this.dni));
  }
  
  expedienteDetails(expedienteID: number) {

    console.log(expedienteID);


    // Redirigir a la vista de detalles del expediente
    this.router.navigate(['solicitantes/expedientes', expedienteID]);
  }

}
