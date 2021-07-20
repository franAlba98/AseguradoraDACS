import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandejaSalidaPage } from './bandeja-salida.page';

const routes: Routes = [
  {
    path: '',
    component: BandejaSalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BandejaSalidaPageRoutingModule {}
