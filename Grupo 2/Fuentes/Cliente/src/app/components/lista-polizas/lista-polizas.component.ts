import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import {VehiculoI} from 'src/app/interfaces/vehiculoI';
import {PolizaI} from 'src/app/interfaces/polizaI';
import { CoberturaI } from 'src/app/interfaces/coberturaI';
import { TipoSiniestroI } from 'src/app/interfaces/tipoSiniestroI';
import { itemPolizaI } from 'src/app/interfaces/itemPolizaI';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-lista-polizas',
  templateUrl: './lista-polizas.component.html',
  styleUrls: ['./lista-polizas.component.scss'],
})
export class ListaPolizasComponent implements OnInit {
  @Input() items: PolizaI[];


  /* items: any = [     //Acá habría que hacer que los items existan según las polizas que se vayan agregando
    { vehiculoMarca: 'PEUGEOT',
    vehiculoModelo: '207',
    vehiculoVersion: 'GTI',
    vehiculoAnio: 2010,
    vehiculoMotor: '1.0',
    vehiculoPatente: 'AA408UR',
    polizaFechaContratacion: new Date("2019-01-16"),
    polizaFechaRenovacion: new Date("2019-01-20"),
    polizaTarifa: 5000.43,
    coberturaNombre: 'Alpha',
    tipoSiniestroHechosGeneradores: ['Ruedas', 'Cristales'],
    expanded: false},
    { vehiculoMarca: 'VOLKSWAGEN',
    vehiculoModelo: 'POLO',
    vehiculoVersion: 'COMFORTLINE TIPTRONIC',
    vehiculoAnio: 2016,
    vehiculoMotor: '1.6',
    vehiculoPatente: 'BO707IN',
    polizaFechaContratacion: new Date("2019-01-16"),
    polizaFechaRenovacion: new Date("2019-01-20"),
    polizaTarifa: 5000.43,
    coberturaNombre: 'Beta',
    tipoSiniestroHechosGeneradores: ['Ruedas', 'Cristales'],
    expanded: false}
  ]; */
  
  constructor(private dataService: DataService) {

  };
  ngOnInit() {
  

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

  
}
