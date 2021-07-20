import jwt, { Secret } from 'jsonwebtoken'
import { UsuarioInterface, UsuarioTokenInterface } from '../interfaces/interfaces';
import { SEED, caducidad, CLIENT_ID } from '../config/config';
import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(CLIENT_ID);
//esta funcion crea un token interno del servidor
export function createToken(usuario: UsuarioInterface) {
    if (SEED) {
        const claveSecreta: Secret = SEED
        return jwt.sign({
            usuario: usuario
        }, claveSecreta, { expiresIn: caducidad });
    }
};
//esta funcion verifica que el token que envia google es valido
export async function verifyGoogle(token:string) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    if(payload){
        const userid = payload['sub'];
        console.log(payload.name);
        console.log(payload.email);
        console.log(payload.picture);
        const usuario:UsuarioTokenInterface={
            nombreUsuario:payload.name,
            email:payload.email,
            img:payload.picture,
            google:true
        };
        return usuario
    }
  }
    