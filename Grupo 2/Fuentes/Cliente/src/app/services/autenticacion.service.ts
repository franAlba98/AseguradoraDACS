import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private AFauth: AngularFireAuth) { }

  login(email:string,password:string){

    return new Promise((resolve,rejected) => {
      this.AFauth.signInWithEmailAndPassword(email,password).then(user => {
        resolve(user);
        }).catch(err => rejected('Error: '+ err ));
    });
  }

}
