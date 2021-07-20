import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad {
  constructor(private usuarioService:UsuarioService){

  };
  canLoad() {
    return this.usuarioService.validarToken();
    // return true;
  }
  
}
