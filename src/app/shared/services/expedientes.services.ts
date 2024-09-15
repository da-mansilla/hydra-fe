import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpedienteItem, Expedientes } from '../interfaces/expediente.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ExpedienteService  {
    url: string;
    //sessionCookie: string;
    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        //this.sessionCookie = 'ASP.NET_SessionId=k0gftk0ig1uklbtbcmxqtufb';
        this.url="/phyapi/APITramites";
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            //'Cookie': this.sessionCookie
          });
          this.headers.append('Cookie', 'ASP.NET_SessionId=k0gftk0ig1uklbtbcmxqtufb');
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


}

