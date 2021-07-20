import { Injectable } from '@angular/core';
import { urlServices } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AseguradoI } from '../interfaces/aseguradoI';

@Injectable({
  providedIn: 'root'
})
export class AseguradoService {
  aseguradoURL:string = `${urlServices}asegurados`
  constructor(private httpClient: HttpClient) { }

    getAsegurado(key$){
      const token = localStorage.getItem('token') || null;
      let headers = new HttpHeaders();
      headers = headers.set('token', token).set('Content-Type','application/json');
      return this.httpClient.get(this.aseguradoURL+`/${key$}`,{headers});
  }

}
