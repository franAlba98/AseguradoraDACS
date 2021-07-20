import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSiniestrosPageRoutingModule } from './lista-siniestros-routing.module';

import { ListaSiniestrosPage } from './lista-siniestros.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSiniestrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListaSiniestrosPage]
})
export class ListaSiniestrosPageModule {}
