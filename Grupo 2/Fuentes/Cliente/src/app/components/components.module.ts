import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/*#########Aca importamos todos los componentes creados #########*/
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { ListaPolizasComponent } from './lista-polizas/lista-polizas.component';
import { RoturaCristalesComponent } from './rotura-cristales/rotura-cristales.component';
import { RoboRuedasComponent } from './robo-ruedas/robo-ruedas.component';
import { AmSiniestroComponent } from './am-siniestro/am-siniestro.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
/*###############################################################*/
@NgModule({
    declarations:[MenuComponent, HeaderComponent, ListaPolizasComponent, ExpandableComponent, RoturaCristalesComponent, RoboRuedasComponent, AmSiniestroComponent, LoginUsuarioComponent],
    imports:[IonicModule, FormsModule,ReactiveFormsModule, CommonModule, RouterModule],
    exports:[MenuComponent, HeaderComponent, ListaPolizasComponent , ExpandableComponent, RoturaCristalesComponent, RoboRuedasComponent, AmSiniestroComponent, LoginUsuarioComponent]
})

export class ComponentsModule{}