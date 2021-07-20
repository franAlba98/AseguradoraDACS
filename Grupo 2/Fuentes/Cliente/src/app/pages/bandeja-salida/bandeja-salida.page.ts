import { Component, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { MensajeEmisorInterface } from '../../interfaces/mensajeI';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bandeja-salida',
  templateUrl: './bandeja-salida.page.html',
  styleUrls: ['./bandeja-salida.page.scss'],
})
export class BandejaSalidaPage implements OnInit {
  titulo: string = "Bandeja de salida";
  mensajes:MensajeEmisorInterface; 
  idUsuario:string=localStorage.getItem('id') || null; //para sacar el id de usuario del local storage
  constructor(private mensajeService:MensajeService, private alerta: AlertController) { }

  ngOnInit() {
    if (this.idUsuario){
    this.mensajeService.getMensajeEmisor(this.idUsuario).subscribe(data=>{
      this.mensajes = data['data'];
    })
   }
  }

  async redactarMensaje(){
    let miAlerta = await this.alerta.create({
      header: 'Escriba su mensaje',
      inputs: [
        {
          name: 'correo',
          type: 'text',
          placeholder: 'correo@dominio.com'
        },
        {
          name: 'cuerpo',
          type: 'textarea',
          placeholder: 'Ingrese aquí su mensaje'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    })
    await miAlerta.present();
  }


  async alertaMensajeEnviado(aCorreo: string, aMensaje: string) {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      subHeader: aCorreo,
      message: aMensaje,
      buttons: ['OK']
    });

    await alert.present();
  }



}
