import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarSiniestroPageRoutingModule } from './editar-siniestro-routing.module';

import { EditarSiniestroPage } from './editar-siniestro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarSiniestroPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarSiniestroPage]
})
export class EditarSiniestroPageModule {}
