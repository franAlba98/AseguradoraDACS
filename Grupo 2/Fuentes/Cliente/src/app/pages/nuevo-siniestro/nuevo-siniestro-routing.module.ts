import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoSiniestroPage } from './nuevo-siniestro.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoSiniestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoSiniestroPageRoutingModule {}
