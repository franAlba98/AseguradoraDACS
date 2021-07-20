import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './services/guards/login-guard.guard';

const routes: Routes = [
  {
    canLoad:[LoginGuard],
    path: 'nuevo-siniestro',
    loadChildren: () => import('./pages/nuevo-siniestro/nuevo-siniestro.module').then( m => m.NuevoSiniestroPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'lista-siniestros',
    loadChildren: () => import('./pages/lista-siniestros/lista-siniestros.module').then( m => m.ListaSiniestrosPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'poliza',
    loadChildren: () => import('./pages/poliza/poliza.module').then( m => m.PolizaPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'datos-usuario',
    loadChildren: () => import('./pages/datos-usuario/datos-usuario.module').then( m => m.DatosUsuarioPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'bandeja-entrada',
    loadChildren: () => import('./pages/bandeja-entrada/bandeja-entrada.module').then( m => m.BandejaEntradaPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'bandeja-salida',
    loadChildren: () => import('./pages/bandeja-salida/bandeja-salida.module').then( m => m.BandejaSalidaPageModule)
  },
  {
    canLoad:[LoginGuard],
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    canLoad:[LoginGuard],
    path: 'editar-siniestro',
    loadChildren: () => import('./pages/editar-siniestro/editar-siniestro.module').then( m => m.EditarSiniestroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
