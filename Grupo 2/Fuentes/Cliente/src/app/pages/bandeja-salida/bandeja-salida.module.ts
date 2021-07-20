import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BandejaSalidaPageRoutingModule } from './bandeja-salida-routing.module';

import { BandejaSalidaPage } from './bandeja-salida.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BandejaSalidaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BandejaSalidaPage]
})
export class BandejaSalidaPageModule {}
