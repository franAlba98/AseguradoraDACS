import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoSiniestroPageRoutingModule } from './nuevo-siniestro-routing.module';

import { NuevoSiniestroPage } from './nuevo-siniestro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoSiniestroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoSiniestroPage]
})
export class NuevoSiniestroPageModule {}
