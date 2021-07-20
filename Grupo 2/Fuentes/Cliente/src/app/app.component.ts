import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DataService } from './services/data.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {
  public selectedIndex = 0;
  appPages: Observable<Componente[]>;
  darkMode:boolean = false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService:DataService,
    private usuarioService:UsuarioService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.appPages = this.dataService.getMenuOpciones();
    });
  };

  darkModeChange(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
  };
  logout(){
    this.usuarioService.logout();
  };

}
