import { Injectable } from '@angular/core';
import { urlServices } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnviarMensajeInterface } from '../interfaces/mensajeI';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensajeURL:string = `${urlServices}mensajes`
  constructor(private httpClient: HttpClient) { }

  getMensajeEmisor(key$){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.mensajeURL+`/salida/${key$}`,{headers});
  }
  getMensajeReceptor(key$){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.mensajeURL+`/entrada/${key$}`,{headers});
  }

  postMensajeEmisor(mensaje: EnviarMensajeInterface){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type', 'application/json');
    return this.httpClient.post(this.mensajeURL,mensaje,{headers});
  }

}

