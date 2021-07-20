import { Injectable } from '@angular/core';
import { urlServices } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PolizaService {
  polizaURL:string = `${urlServices}polizas`
  constructor(private httpClient: HttpClient) { }


  getInfo(){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this,this.httpClient.get(this.polizaURL+"/info",{headers})
  }

}
