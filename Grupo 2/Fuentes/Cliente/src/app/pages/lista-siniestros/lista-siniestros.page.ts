import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { roboRuedasI, roturaCristalesI } from 'src/app/interfaces/itemSiniestroI';
import { SiniestroI } from 'src/app/interfaces/SiniestroI';
import { ListaSiniestroI } from '../../interfaces/listaSiniestroI';
import { SiniestroService } from '../../services/siniestro.service'; 


@Component({
  selector: 'app-lista-siniestros',
  templateUrl: './lista-siniestros.page.html',
  styleUrls: ['./lista-siniestros.page.scss'],
})

export class ListaSiniestrosPage implements OnInit {
  titulo: string = "Lista de siniestros";
  siniestro: SiniestroI;
  @Input() items: ListaSiniestroI[];

  /* items: ListaSiniestroI[] = [{
    hechoGenerador: "",
    nombreCobertura: "",
    nombrePoliza: null,
    vehiculoMarca: "",
    vehiculoAnio: null,
    vehiculoModelo: "",
    vehiculoVersion: "",
    vehiculoPatente: "",
    fecha: null,
    hora: null,
    descripcion: "",
    idSiniestro: null,
    expanded: true,
    modificable: true,
    localidad: ""
    }
  ]
 */
  vehiculo: SiniestroI = {
    fecha: null,
    hora: null,
    descripcion: "",
    localidad: "",
    provincia: "",
    calle: "",
    codigoPostal: "",
    roturaCristales: null,
    roboRuedas: null
  }
  
  constructor(public route: Router, private siniestroService:SiniestroService) {
  }

  ngOnInit() {
    this.siniestroService.getInfo().subscribe(data=>{
      this.items = data['data'];
    });
    
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  };

  modifyPage($key): void{
    this.route.navigate(['/editar-siniestro',`${$key}`]);
  }

}
