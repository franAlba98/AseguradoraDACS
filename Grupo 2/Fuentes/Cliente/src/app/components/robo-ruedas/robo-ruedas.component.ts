import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { roboRuedasI } from 'src/app/interfaces/itemSiniestroI';

@Component({
  selector: 'app-robo-ruedas',
  templateUrl: './robo-ruedas.component.html',
  styleUrls: ['./robo-ruedas.component.scss'],
})
export class RoboRuedasComponent implements OnInit {

      @Input() ruedas:roboRuedasI={      
          delanteraDer: false,
          delanteraIzq: false,
          traseraDer: false,
          traseraIzq: false,
          repuesto: false
      }

      @Output() emitterRuedas: EventEmitter<roboRuedasI> = new EventEmitter<roboRuedasI>();

      constructor() { }

      ngOnInit() {
      }

      update() {
        this.emitterRuedas.emit(this.ruedas);
        console.log(this.ruedas)
      }
}
