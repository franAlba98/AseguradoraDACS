
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlServices } from '../interfaces/interfaces';
import { SiniestroI } from '../interfaces/siniestroI';

@Injectable({
  providedIn: 'root'
})
export class SiniestroService {
  siniestroURL:string = `${urlServices}siniestros`
  constructor(private httpClient: HttpClient) { 
  }

  new(unSiniestro: SiniestroI){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    console.log('head new: ', headers);
    console.log('SINIESTRO A DAR DE ALTA: ', unSiniestro);
    return this.httpClient.post(this.siniestroURL, unSiniestro, {headers});
  }

  getAll(){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.siniestroURL,{headers});
  }

  getOne(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.get(this.siniestroURL+`/infoSingle/${key$}`,{headers});
  }

  change(siniestro: SiniestroI, key$:number){
    const body = siniestro;
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.post(this.siniestroURL+`/${key$}`, body,{headers});
  }

  delete(key$:number){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    return this.httpClient.delete(this.siniestroURL+`/${key$}`,{headers});
  }

  getInfo(){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    console.log(headers);
    return this.httpClient.get(this.siniestroURL+`/infoUser`,{headers})
  }
/* 
  onUpload(selectedFile: any, key$:number){
    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    console.log(fd);
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token).set('Content-Type','application/json');
    console.log(headers);
    return this.httpClient.post(this.siniestroURL+`/upload/${key$}`, fd, {headers, reportProgress: true, observe: 'events'})
  } */
  
  uploadImage(image:any){
    const token = localStorage.getItem('token') || null;
    let headers = new HttpHeaders();
    headers = headers.set('token', token);
    return this.httpClient.post(this.siniestroURL+`/upload/7`,image,{headers})
  }

}

