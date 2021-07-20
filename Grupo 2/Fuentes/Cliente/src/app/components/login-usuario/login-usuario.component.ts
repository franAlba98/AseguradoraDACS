import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { UsuarioLocal, UsuarioLogin } from '../../interfaces/usuarioI';
import { idClientGoogle } from '../../../environments/environment';
declare const gapi:any;
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss'],
})
export class LoginUsuarioComponent implements OnInit {
  auth2:any
  private formularioSesion:FormGroup;
  constructor(private usuarioService:UsuarioService, private navCtrl: NavController) {
    this.formularioSesion = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
    })
  }
  ngOnInit() {
    this.googleInit();
  }

  googleInit(){
    gapi.load('auth2',()=>{
      this.auth2 = gapi.auth2.init({
        client_id:idClientGoogle,
        cookiepolicy:'single_host_origin',
        scope:'profile email'
      });
      this.attachSignin(document.getElementById('btnGoogle'))

    })
  }
  attachSignin(element){
    this.auth2.attachClickHandler(element,{},googleUser=>{
      /* let profile = googleUser.getBasicProfile();
      console.log(profile); */
      const token:string = googleUser.getAuthResponse().id_token;
      console.log("token mandado al cliente ", token)
      this.usuarioService.loginGoogle(token).subscribe(data=>{
        if(data['ok']){
          const id:number =data['id']
          const usuario:UsuarioLocal=data['usuario']
          this.usuarioService.guardarToken(data['token'],id,usuario).then();
          console.log("login correcto :)")
          this.navCtrl.navigateRoot('home');
        }
      });
    })
  }
  
  iniciarSesion(formulario:FormGroup){
    if(formulario.invalid){
      return;
    };
    if(formulario.value.email && formulario.value.password){
      const usuario:UsuarioLogin={
        email:formulario.value.email,
        password:formulario.value.password
      };
      this.usuarioService.login(usuario).then(ok=>{
        if(ok){
          this.navCtrl.navigateRoot('home');
        }
      })
    };
  
  }

}