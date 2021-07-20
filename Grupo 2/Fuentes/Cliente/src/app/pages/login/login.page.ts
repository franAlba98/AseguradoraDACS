import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from "@angular/router";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password: string;

  constructor(private autenticacionService: AutenticacionService, public router: Router, public menu: MenuController) {

   }

  ngOnInit() {
    this.menu.swipeGesture(false);
    this.menu.enable(false);
  }

/*   iniciarSesion(){
    this.autenticacionService.login(this.email,this.password).then( res => {
      this.router.navigate(['/home']);
    }).catch(err => alert('Los datos ingresados son incorrectos'))
  } */
}
