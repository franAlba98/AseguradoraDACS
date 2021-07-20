import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  titulo: string = "Bienvenido a la aplicación"
  constructor(public menu: MenuController) { }

  ngOnInit() {
    this.menu.enable(true);
    this.menu.swipeGesture(true);
  }

}
