import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarSiniestroPage } from './editar-siniestro.page';

const routes: Routes = [
  {
    path: ':idSiniestro',
    component: EditarSiniestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarSiniestroPageRoutingModule {}
