import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiniestroI } from 'src/app/interfaces/SiniestroI';
import { AgenciaService } from 'src/app/services/agencia.service';
import { SiniestroService } from 'src/app/services/siniestro.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-editar-siniestro',
  templateUrl: './editar-siniestro.page.html',
  styleUrls: ['./editar-siniestro.page.scss'],
})
export class EditarSiniestroPage implements OnInit {

  titulo:string="Editar siniestro";
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
    patente: '',
    nombreAgencia: '',
    alturaAgencia: '',
    calleAgencia: '',
    ciudadAgencia: '',
    tipoSiniestro: '',
  };
  todasAgencias: any;
  todosVehiculo: any;
  vehiculo: any;
  agencia: any;
  
  
  constructor(private siniestroService: SiniestroService, private agenciaService: AgenciaService, private vehiculoService: VehiculoService, private activeRouter:ActivatedRoute){ 
  }
  
  ngOnInit(){
    this.activeRouter.params.subscribe(params=>{
      this.siniestro.idSiniestro = params['idSiniestro']
    });
  }
}
