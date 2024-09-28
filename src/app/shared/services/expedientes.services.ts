import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpedienteDetail, ExpedienteEstado, ExpedienteItem, ExpedienteNew, Expedientes } from '../interfaces/expediente.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Documento, Documentos} from "../interfaces/documentacion.interface";

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

  getExpedienteDetail(id: string): Observable<ExpedienteDetail> {
    const body = {
        nro_expediente: id
    }
    return this.http.post<ExpedienteDetail>(`${this.url}/informacionDeExpediente`,body, { headers: this.headers });
  }

  createExpediente(expediente: ExpedienteNew){
    return this.http.post(`${this.url}/nuevoExpediente`, expediente, { headers: this.headers });
  }

  getExpedientesFromSolicitante(id:number){
    const body = {
      dni_solicitante: id,
    }
    return this.http.post<Expedientes>(`${this.url}/consultarExpedientesDeSolicitante`,body, { headers: this.headers});
  }


  updateExpedienteEstado(expedienteEstado: ExpedienteEstado){
    return this.http.post(`${this.url}/cambiarEstodoExpediente`, expedienteEstado, { headers: this.headers });
  }

  createDocumentacionExpediente(numeroExpediente: number,documentacion: Documento[]) {

    const bodyContent = documentacion.map(doc => {
      return {
        "Base64": "",
        "nombre_documentacion": doc.nombre,
        "tipo_documentacion": "Archivo"
      }
    })
    const body= {
      "nro_expediente": numeroExpediente,
      "Documentos": bodyContent
    }
    return this.http.post(`${this.url}/enviarDocumentacion`, body, { headers: this.headers });
  }

  getDocumentacionExpediente(numeroExpediente: string) : Observable<Documentos> {
    const body = {
      "nro_expediente": numeroExpediente
    }
    return this.http.post<Documentos>(`${this.url}/listarDocumentacion`, body, { headers: this.headers });
  }

}


