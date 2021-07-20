import { Component, OnInit } from '@angular/core';
import { SiniestroI } from 'src/app/interfaces/SiniestroI';


@Component({
  selector: 'app-nuevo-siniestro',
  templateUrl: './nuevo-siniestro.page.html',
  styleUrls: ['./nuevo-siniestro.page.scss'],
})

export class NuevoSiniestroPage implements OnInit {
  titulo:string="Nuevo siniestro";
  siniestro: SiniestroI = {
    idSiniestro: null,
    fecha: null,
    hora: null,
    localidad:'',
    provincia:'',
    calle:'',
    codigoPostal:'',
    descripcion:'',
    roturaCristales:null,
    roboRuedas:null,
  };


  constructor(){
  }

  ngOnInit(){

  }
}
