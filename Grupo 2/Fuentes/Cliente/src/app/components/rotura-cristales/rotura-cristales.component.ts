import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { roturaCristalesI } from 'src/app/interfaces/itemSiniestroI';


@Component({
  selector: 'app-rotura-cristales',
  templateUrl: './rotura-cristales.component.html',
  styleUrls: ['./rotura-cristales.component.scss'],
})
export class RoturaCristalesComponent implements OnInit {

@Input() cristales:roturaCristalesI={
    parabrisasTrasero: false,
    parabrisasDelantero: false,
    ventanaDelanteraIzq: false,
    ventanaDelanteraDer: false,
    ventanaTraseraIzq: false,
    ventanaTraseraDer: false
  }

  @Output() emitterCristales: EventEmitter<roturaCristalesI> = new EventEmitter<roturaCristalesI>();

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.emitterCristales.emit(this.cristales);
    console.log(this.cristales)
  }
 

}
