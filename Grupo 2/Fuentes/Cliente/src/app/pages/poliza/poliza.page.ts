import { Component, OnInit } from '@angular/core';
import { PolizaService } from '../../services/poliza.service';
import { PolizaI } from '../../interfaces/polizaI';

@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.page.html',
  styleUrls: ['./poliza.page.scss'],
})

export class PolizaPage implements OnInit {
  titulo: string = "Poliza";
  listaPoliza:PolizaI[];

  
  constructor(private polizaService:PolizaService) {
  }
  

  ngOnInit() {
    this.polizaService.getInfo().subscribe(data => {
      this.listaPoliza = data['data'];
    })
  }

}
