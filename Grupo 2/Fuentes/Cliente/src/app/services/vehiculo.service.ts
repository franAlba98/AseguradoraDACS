import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlServices } from '../interfaces/interfaces';
import { VehiculoI } from '../interfaces/vehiculoI';

@Injectable({
  providedIn: 'root'
})

export class VehiculoService {
  vehiculoURL:string = `${urlServices}vehiculos`
  constructor(private httpClient: HttpClient) { }

  new(unVehiculo: VehiculoI){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.post(this.vehiculoURL, unVehiculo,{headers});
  }

  getAll(){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get<VehiculoI>(this.vehiculoURL,{headers});
  }

  getOne(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.vehiculoURL+`/${key$}`,{headers});
  }

  change(vehiculo: VehiculoI, key$:number){
    const body = vehiculo;
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.post(this.vehiculoURL+`/${key$}`, body,{headers});
  }

  delete(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.delete(this.vehiculoURL+`/${key$}`,{headers});
  }
}

