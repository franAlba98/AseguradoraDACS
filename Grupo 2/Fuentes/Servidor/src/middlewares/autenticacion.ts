import jwt, { Secret } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express';
import { SEED } from '../config/config';
import Server from '../classes/server';


const server = Server.instance;
export let verificaToken = (req: Request, res: Response, next: NextFunction) => {

    let token = req.get('token');
    if (token) {
        const claveSecreta: Secret = SEED
        jwt.verify(token, claveSecreta, (err: any, decoded:any) => {

            if (err) {
                return res.status(401).json({
                    ok: false,
                    err: {
                        message: 'Token no válido'
                    }
                });
            }
            //console.log(decoded.usuario);
            //console.log('tipo: ',typeof(decoded.usuario));
            server.setUser(decoded.usuario.idUsuario);
            res.setHeader("usuario", decoded.usuario.idUsuario);
            next();

        });
    }
};
