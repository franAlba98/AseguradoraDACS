import { Request, Response } from "express";
import Usuario from "../models/Usuario";
import { createToken, verifyGoogle } from '../services/jwt.services';
import { UsuarioTokenInterface } from '../interfaces/interfaces';
import { encriptarPassword, verificarPassword } from '../services/crypto.services';
import Asegurado from '../models/Asegurado';
export default class UsuarioController {
    constructor() { }
    //Find an Usuario
    getById = async (req: Request, res: Response) => {
        const idUsuario: number = parseFloat(req.params.idUsuario);
        try {
            const usuario = await Usuario.findOne({
                where: {
                    idUsuario
                }
            });
            return res.json({
                data: usuario,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    };

    //Query all usuarios
    getAll = async (req: Request, res: Response) => {
        try {
            const usuarios = await Usuario.findAll();
            return res.json({
                ok:true,
                data: usuarios
            });
        } catch (err) {
            console.log(err);
            return res.json({
                ok:false,
                err: 'The server has an error'
            });
        }
    }

    login = async (req: Request, res: Response) => {
        const email: string = req.body.email;
        const password: string = req.body.password;

        const usuario = await Usuario.findOne({
            where: {
                email
            },
            raw: true
        });
        if (usuario) {
            const asegurado = Asegurado.findOne({
                where:{
                    idUsuario:usuario.idUsuario
                }
            });
            verificarPassword(password, usuario.salt).then(hashCreado => {
                if (hashCreado == usuario.hash) {
                    const token = createToken(usuario);
                    console.log("token generado por el cliente: ", token)
                    if (token) {
                        res.set("token", [token]);
                        return res.json({
                            "ok": true,
                            "token": token,
                            "id": usuario.idUsuario,
                            "usuario": asegurado
                        })
                    }
                } else {
                    return res.send({
                        message: "contraseña incorrecta",
                        "ok": false,
                        err: true
                    });
                }
            }).catch(err=>{
                console.error(err);
                res.json({
                    error: err,
                    err: true
                });
            })
        } else {
            res.json({
                message: "El usuario no existe",
                err: true
            })
        }
    };
    google = async (req: Request, res: Response) => {
        const token = req.get("googleToken");

        try {
            if (token) {
                console.log("token que recibo: ", token)
                //llamamos la funcion para verificar el token de google
                const googleUser: UsuarioTokenInterface | void = await verifyGoogle(token).catch(err => {
                    //en caso de que el token no sea valido
                    console.log("usuario de google no valido")
                    res.status(403).json({
                        message: err,
                        err: true
                    })
                });
                //verificamos que el googleUser sea un json con algun contenido
                if (googleUser) {
                    const usuario = await Usuario.findOne({
                        where: {
                            email: googleUser.email
                        }
                    });
                    //verificamos que no sea null
                    if (usuario) {
                        const asegurado = Asegurado.findOne({
                            where:{
                                idUsuario:usuario.idUsuario
                            }
                        });
                        //verificamos la existencia del mail
                        if (usuario.email) {
                            //le damos un toquen a un usuario existente que entro por google
                            const nuevoToken: string | undefined = createToken(usuario);
                            if (nuevoToken) {
                                res.set('token', [nuevoToken]);
                                return res.json({
                                    "ok": true,
                                    "token": nuevoToken,
                                    "id": usuario.idUsuario,
                                    "usuario": asegurado
                                })
                            }
                        }
                    } else {
                        //si el usuario no existe en la BD
                        if (googleUser) {
                            if (googleUser.email && googleUser.nombreUsuario) {
                                const nuevoUsuario = await Usuario.create({
                                    nombreUsuario: googleUser.nombreUsuario,
                                    email: googleUser.email,
                                    salt: "-1",
                                    hash: "-1",
                                });
                                const nuevoToken: string | undefined = createToken(nuevoUsuario);
                                if (nuevoToken) {
                                    res.set('token', [nuevoToken]);
                                    return res.json({
                                        "ok": true,
                                        "token": nuevoToken,
                                        "id": nuevoUsuario.idUsuario,
                                        "usuario": null
                                    })
                                }

                            }
                        }

                    }
                }
            }
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }

    };
    new = async (req: Request, res: Response) => {
        const email: string = req.body.email;
        const password: string = req.body.password;
        const nombreUsuario: string = req.body.nombreUsuario;
        console.log("termino la lectura de datos");
        try {
            const usuario = await Usuario.findOne({
                where: {
                    email
                }
            });
            if (!usuario) {
                encriptarPassword(password).then(async cifrado => {
                    const salt = cifrado.salt
                    const hash = cifrado.hash
                    await Usuario.create({
                        nombreUsuario,
                        email,
                        salt,
                        hash
                    }).then(usuario => {
                        const token = createToken(usuario);
                        if(token){
                            res.set('token', [token]);
                        res.json({
                            usuario,
                            err: false
                        });
                        };
                    });
                }).catch(err => {
                    console.error(err)
                    res.json({
                        error: err,
                        err: true
                    });
                });
            } else {
                res.json({
                    message: "El usuario ya existe",
                    err: true
                });
            };
        } catch (err) {
            console.log(err);
            return res.json({
                error: err,
                err: true
            });
        }
    };
}