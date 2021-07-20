import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlServices } from '../interfaces/interfaces';
import { AgenciaI } from '../interfaces/AgenciaI';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  agenciaURL:string = `${urlServices}agencias`;
  constructor(private httpClient: HttpClient) { }

  new(unaAgencia: AgenciaI){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.post(this.agenciaURL, unaAgencia,{headers});
  }

  getAll(){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get<AgenciaI>(this.agenciaURL,{headers});
  }

  getOne(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.agenciaURL+`/${key$}`,{headers});
  }

  change(agencia: AgenciaI, key$:number){
    const body = agencia;
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.post(this.agenciaURL+`/${key$}`, body,{headers});
  }

  delete(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.delete(this.agenciaURL+`/${key$}`, {headers});
  }
}

