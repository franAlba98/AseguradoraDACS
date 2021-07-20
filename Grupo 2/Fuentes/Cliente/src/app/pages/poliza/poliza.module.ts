import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolizaPageRoutingModule } from './poliza-routing.module';

import { PolizaPage } from './poliza.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { ExpandableComponent } from "../../components/expandable/expandable.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolizaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PolizaPage]
})
export class PolizaPageModule {}
