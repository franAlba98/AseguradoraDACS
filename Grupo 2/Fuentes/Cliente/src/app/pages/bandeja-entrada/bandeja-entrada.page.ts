import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { AlertController } from '@ionic/angular';
import { MensajeReceptorInterface } from '../../interfaces/mensajeI';

@Component({
  selector: 'app-bandeja-entrada',
  templateUrl: './bandeja-entrada.page.html',
  styleUrls: ['./bandeja-entrada.page.scss'],
})
export class BandejaEntradaPage implements OnInit {
  titulo: string = "Bandeja de entrada";
  mensajes:MensajeReceptorInterface; 
  idUsuario:string=localStorage.getItem('id') || null; //para sacar el id de usuario del local storage
  constructor(private mensajeService:MensajeService, private alerta: AlertController) { }

  ngOnInit() {
    if (this.idUsuario){
    this.mensajeService.getMensajeReceptor(this.idUsuario).subscribe(data=>{
      this.mensajes = data['data'];
    })
   }
  }

  async alertaMensajeRecibido(aCorreo: string, aMensaje: string) {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      subHeader: aCorreo,
      message: aMensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



}

