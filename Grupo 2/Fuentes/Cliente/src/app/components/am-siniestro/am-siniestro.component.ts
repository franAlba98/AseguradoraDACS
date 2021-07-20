import { ReadVarExpr, THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, isDevMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { SiniestroI } from 'src/app/interfaces/SiniestroI';
import { SiniestroService } from 'src/app/services/siniestro.service';
import { Router } from '@angular/router';
import { VehiculoI } from 'src/app/interfaces/vehiculoI';
import { AgenciaI } from 'src/app/interfaces/agenciaI';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import { AgenciaService } from 'src/app/services/agencia.service';
import { roboRuedasI, roturaCristalesI } from 'src/app/interfaces/itemSiniestroI';
import { Platform } from '@ionic/angular';

declare var window: any;


@Component({
  selector: 'app-am-siniestro',
  templateUrl: './am-siniestro.component.html',
  styleUrls: ['./am-siniestro.component.scss'],
})

export class AmSiniestroComponent implements OnInit {
  fileToUpload: File | null = null;
  tipoSiniestro:string="Rotura de cristales";
  vehiculoSelected: any;
  agenciaSelected: any;
  indexVehiculo: number;
  formularioSiniestro: FormGroup;
  @Input() siniestro: SiniestroI;
  vehiculo: VehiculoI;
  agencia: AgenciaI;
  patenteVehiculo: string;
  cristales:roturaCristalesI;
  ruedas:roboRuedasI;
  plataforma: string;  
  image: any;
  choosen: boolean;
  submitted: boolean;
  length: any;
  imagenes = [];
  urls = [];
  constructor(private camera: Camera, 
              private siniestroService: SiniestroService, 
              private vehiculoService: VehiculoService,
              private agenciaService: AgenciaService,
              private router: Router,
              public plt: Platform,
              ) { 
    this.formularioSiniestro = new FormGroup({
      'idSiniestro': new FormControl(),
      'fecha': new FormControl('', Validators.required),
      'hora': new FormControl('', Validators.required),
      'descripcion': new FormControl('',Validators.required),
      'localidad': new FormControl('',Validators.required),
      'provincia': new FormControl('',Validators.required),
      'calle': new FormControl('',Validators.required),
      'codigoPostal': new FormControl('',Validators.required),
      'roturaCristales': new FormControl('',Validators.required),
      'roboRuedas': new FormControl('',Validators.required),
      'patenteVehiculo': new FormControl(),
      'nombreAgencia': new FormControl(),
      'alturaAgencia': new FormControl(),
      'calleAgencia': new FormControl(),
      'ciudadAgencia': new FormControl(),
      'tipoSiniestro': new FormControl(),
    })
  }

  ngOnInit() {
   this.verificarPlataforma();
   if (this.siniestro.idSiniestro){
     this.siniestroService.getOne(this.siniestro.idSiniestro).subscribe(dataSiniestro=>{
       this.siniestro=dataSiniestro['data'];
    this.formularioSiniestro.patchValue(this.siniestro);
       this.vehiculoService.getAll().subscribe(data => {
        data['data'].forEach((unVehiculo, index) => {
          if (unVehiculo.patente == this.siniestro.patente){
            this.vehiculoSelected=unVehiculo;
            this.indexVehiculo = index;
          };
        })
        this.agenciaService.getAll().subscribe(data => { 
          this.agencia = data['data'];
         })
    
         this.vehiculoService.getAll().subscribe(data => {
           this.vehiculo = data['data'];
        })
      })
     })

   } else {
    this.vehiculoSelected = undefined;
    this.agenciaSelected = undefined;
    this.agenciaService.getAll().subscribe(data => { 
      this.agencia = data['data'];
     })
     this.vehiculoService.getAll().subscribe(data => {
       this.vehiculo = data['data'];
    })
   }
  }

  verificarPlataforma(){
    if (this.plt.is('android')){
      this.plataforma = 'Android';
    } else {
      this.plataforma = 'Desktop';
    }
  }
  
  altaSiniestro(){
    if(this.siniestro.idSiniestro){
      const key$ = this.siniestro.idSiniestro;
      this.siniestro = this.formularioSiniestro.value;
      this.siniestro.idSiniestro = key$;
      //falta servicio de change
    } else {
      const data:SiniestroI = this.formularioSiniestro.value;
      this.siniestroService.new(data).subscribe(data => {
        this.router.navigate(['/home'])
      })
    }
  }

  segmentChosen(name:string){
    this.tipoSiniestro = name;
  }

  updateCristales(cristales: roturaCristalesI){
    this.cristales = cristales;
    let auxSiniestro: SiniestroI = this.formularioSiniestro.value;
    auxSiniestro.roturaCristales=cristales;
    this.formularioSiniestro.setValue(auxSiniestro);  
  }

  updateRuedas(ruedas: roboRuedasI){
    this.ruedas = ruedas;
    let auxSiniestro: SiniestroI = this.formularioSiniestro.value;
    auxSiniestro.roboRuedas=ruedas;
    this.formularioSiniestro.setValue(auxSiniestro);
  }

  takePicture(){
    let fd = new FormData();
    const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.CAMERA,
        correctOrientation: true
    };
    this.camera.getPicture(options).then(
      (ImageData) => { 
       const img = window.Ionic.WebView.convertFileScr(ImageData); 
       fd.append('upload', img);
      },
      (err) => {console.log(err);}
    );
    this.siniestroService.uploadImage(fd).subscribe((res) => {
      if(res['success']){
        this.submitted=false;
      }
    });
  }

  getPictureFromGallery(){
    let fd = new FormData();
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
      };
      this.camera.getPicture(options).then(
        (ImageData) => { 
          const img = window.Ionic.WebView.convertFileScr(ImageData); 
          fd.append('upload', img);
        },
        (err) => {console.log(err);}
      );
      this.siniestroService.uploadImage(fd).subscribe((res) => {
        if(res['success']){
          this.submitted=false;
        }
      });
    }
4

  fileChoosen(event:any){
    if(event.target.value){
      this.image = <File>event.target.files;
      this.choosen = true; 
      this.length = <File>event.target.files.length;

      for (let i = 0; i < this.length; i++){
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (event:any) => {
          this.imagenes.push(event.target.result);
       }
      } 
     }
    }

  submitPhoto(){
    let fd = new FormData();
    this.submitted = true;
    if (this.image){
      for (let i = 0; i < this.length; i++){
        fd.append('upload', this.image[i]);
      }
      this.siniestroService.uploadImage(fd).subscribe((res) => {
        if(res['success']){
          this.submitted=false;
        }
      })
    }
  }

  public optionsFnVehiculo(event) {  
    this.formularioSiniestro.patchValue({
      patenteVehiculo: event.target.value.patente
    })
  };

  
  public optionsFnAgencia(event) {  
    this.formularioSiniestro.patchValue({
      nombreAgencia: event.target.value.nombre,
      calleAgencia: event.target.value.calleAgencia,
      alturaAgencia: event.target.value.alturaAgencia,
      ciudadAgencia: event.target.value.ciudadAgencia
    });
  };
}


