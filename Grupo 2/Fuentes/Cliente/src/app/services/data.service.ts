import { Injectable } from '@angular/core';
import {PolizaI} from  '../interfaces/polizaI'
import { Componente} from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  Poliza: PolizaI;
  Componentes: Componente;

  constructor(private http:HttpClient) { }

  private urlAPIPoliza = 'api/poliza'
  private urlAPIMenu = 'api/menu'

  getAllPolizas(): Observable<PolizaI[]>{
    return this.http.get<PolizaI[]>(this.urlAPIPoliza);
  }

  getMenuOpciones(){
   return this.http.get<Componente[]>('assets/data/menu.json') //data service que toma el json
   // return this.http.get<Componente[]>(this.urlAPIMenu);    //in-memory-web-api 
  };
}
