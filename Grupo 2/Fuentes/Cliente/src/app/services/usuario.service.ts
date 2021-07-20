import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { urlServices } from '../interfaces/interfaces';
import { UsuarioLocal, UsuarioLogin, RespuestaLogin } from '../interfaces/usuarioI';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioURL:string = `${urlServices}usuarios`;
  usuario:UsuarioLocal
  token:string
  constructor(private httpClient: HttpClient, private navCtrl: NavController) { }

  cargarToken(){
    this.token = localStorage.getItem('token') || null;
  };
  async guardarToken(token:string, id:number, usuario:UsuarioLocal){
    this.token=token;
    localStorage.setItem('token',token);
    localStorage.setItem('id',id.toString());
    localStorage.setItem('usuario',JSON.stringify(usuario));
    await this.validarToken();
  }
  
  limpiarStorage(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('id');
  }
  
  login(usuario:UsuarioLogin){
    const url = this.usuarioURL+"/login";
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json')
    return new Promise<boolean>(resolve=>{
      this.httpClient.post(url,usuario,{headers}).subscribe(async (res:RespuestaLogin)=>{
        console.log("respuesta del login:", res);
        console.log("respuesta del ok:", res.ok);

        if(res.ok){
          console.log("Dentro del if: ")
          await this.guardarToken(res.token,res.id,res.usuario);
          this.usuario= res.usuario;
          resolve(true)
        }else{
          this.token=null;
          this.limpiarStorage();
          resolve(false)
        }
      })
    })
  
  };

  loginGoogle(token:string){
    const url = this.usuarioURL + "/google"
    let headers = new HttpHeaders();
    headers = headers.set('googleToken', token).set('Content-Type','application/json');

    return this.httpClient.post(url,null,{headers});
  };
   validarToken():Promise<boolean>{
    this.cargarToken();
    if(!this.token){
      this.navCtrl.navigateRoot('/login');
      return Promise.resolve(false);
    }
    return new Promise<boolean>(resolve=>{
      const url = this.usuarioURL
      const token:string = this.token
      let headers = new HttpHeaders();
      headers = headers.set('token', token).set('Content-Type','application/json');
       this.httpClient.get(url,{headers}).subscribe(data=>{
        if(data['ok']){
          this.usuario = data['usuario'];
          resolve(true);
        }else{
          this.navCtrl.navigateRoot('/login');
          resolve(false);
        }
      })
    })
  };

  
  logout(){
    this.usuario = null;
    this.token=null;
    this.limpiarStorage();
    this.navCtrl.navigateRoot('/login', {animated:true});
  };

  getAll(){
    return this.httpClient.get(this.usuarioURL)
  };
  getOne(key$:number){
    return this.httpClient.get(this.usuarioURL+`/${key$}`);
  };

}

