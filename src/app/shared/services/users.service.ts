import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpedienteDetail, ExpedienteItem, Expedientes } from '../interfaces/expediente.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { User, UserLogged } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService  {
   constructor(http: HttpClient) {
    super(http);
   }

   login(dni:string, contrasenia:string): Observable<UserLogged> {
    const body = {
        dni: dni,
        contrasenia: contrasenia
      };
  
    return this.http.post<UserLogged>(`${this.url}/login`,body, { headers: this.headers });
   }

  getExpedientes(): Observable<Expedientes> {
    const body = {
        dni_solicitante: 0,
        nombre_solicitante: 0,
        nro_expediente: 0,
        estado: ""
      };
  
    return this.http.post<Expedientes>(`${this.url}/consultarExpedientes`,body, { headers: this.headers });
  }

  getExpedienteDetail(id: string): Observable<ExpedienteDetail> {
    const body = {
        nro_expediente: id
    }
    return this.http.post<ExpedienteDetail>(`${this.url}/informacionDeExpediente`,body, { headers: this.headers });
  }

  setUserLogged(user: UserLogged){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserLogged(): UserLogged {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user) as UserLogged;
    }
    throw new Error('No user is logged in');
  }

  logout(){
    localStorage.removeItem('user');
  }



}
