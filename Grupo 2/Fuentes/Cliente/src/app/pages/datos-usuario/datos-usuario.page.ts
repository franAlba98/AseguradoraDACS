import { Component, OnInit } from '@angular/core';
import { AseguradoI } from '../../interfaces/aseguradoI';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AseguradoService } from '../../services/asegurado.service';

@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.page.html',
  styleUrls: ['./datos-usuario.page.scss'],
})
export class DatosUsuarioPage implements OnInit {
  titulo: string = "Datos del usuario";
  idUser: string = localStorage.getItem('id');
  asegurado: AseguradoI = {
    nombre: '',
    apellido: '',
    correo: '',
    dni: null,
    telefono: null,
    domicilio: ''
  };

  constructor(private aseguradoService: AseguradoService) { }


  ngOnInit() {
    this.aseguradoService.getAsegurado(this.idUser).subscribe(data => {
      this.asegurado = data['data'];
    })
  }

}
