import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  appPages: Observable<Componente[]>;
  darkMode:boolean = false;
  
  constructor(private dataService:DataService,  private usuarioService:UsuarioService ) {
    this.appPages = this.dataService.getMenuOpciones();
    }

  ngOnInit() {
    this.appPages = this.dataService.getMenuOpciones();
    console.log(this.appPages);
  }
  darkModeChange(){
    this.darkMode = !this.darkMode;
      document.body.classList.toggle('dark');
  };
  logout(){
    this.usuarioService.logout();
  };
}