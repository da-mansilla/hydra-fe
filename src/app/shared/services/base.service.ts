import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BaseService  {
    url: string;
    headers: HttpHeaders;

    constructor(public http: HttpClient) {
        this.url="/phyapi/APITramites";
        this.headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          });
          this.headers.append('Cookie', 'ASP.NET_SessionId=k0gftk0ig1uklbtbcmxqtufb');
    }

}


