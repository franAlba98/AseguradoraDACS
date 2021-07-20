import { Request, Response } from "express";
import { InfoMensajeNuevoInterface, MensajeEmisorInterface, MensajeInterface, MensajeReceptorInterface } from "../interfaces/interfaces";
import Mensaje from "../models//Mensaje";
import Usuario from '../models/Usuario';
import Asegurado from '../models/Asegurado';
import Siniestro from "../models/Siniestro";

export default class MensajeController {
    constructor() { }

    //Create a Mensaje
    new = async (req: Request, res: Response) => {
        const infoMensajeNuevo: InfoMensajeNuevoInterface = req.body.infoMensajeNuevo
        try {
            const emisor = await Usuario.findOne({
                where: { 
                    email: infoMensajeNuevo.emailEmisor
                }
            });
            if(emisor){
                const receptor = await Usuario.findOne({
                    where: { 
                        email: infoMensajeNuevo.emailReceptor
                    }
                });
                if(receptor){
                    const siniestro = await Siniestro.findOne({
                        where: { 
                            idSiniestro:infoMensajeNuevo.idSiniestro
                        }
                    });
                    if(siniestro){
                        const newMensaje = await Mensaje.create({
                            cuerpo: infoMensajeNuevo.cuerpo,
                            idUsuarioEmisor: emisor.idUsuario,
                            idUsuarioReceptor: receptor.idUsuario,
                            fecha: new Date(),
                            idSiniestro: infoMensajeNuevo.idSiniestro
                        });
                        res.json({
                            data: newMensaje,
                            err: false
                        })
                    }
                }
            }
            
        } catch (err) {
            console.log(err);
            res.json({
                err: true
            })
        }
    }

    //Find a Mensaje
    getById = async (req: Request, res: Response) => {
        const idMensaje: number = parseFloat(req.params.idMensaje);
        try {
            const mensaje = await Mensaje.findOne({
                where: {
                    idMensaje
                }
            });
            return res.json({
                data: mensaje,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }
    getByIdReceptor = async (req: Request, res: Response) => {
        const idUsuarioReceptor: number = parseFloat(req.params.idUsuarioReceptor);
        try {
            const mensajes = await Mensaje.findAll({
                where: {
                    idUsuarioReceptor
                }
            });
            let mensajeRecibidos: MensajeReceptorInterface[] = [];
            if (mensajes) {
                let mensaje: MensajeInterface
                for (mensaje of mensajes) {
                    let unMensajeReceptor: MensajeReceptorInterface;
                    const usuario = await Usuario.findOne({
                        where: {
                            idUsuario: mensaje.idUsuarioEmisor
                        }
                    });
                    if (usuario) {
                        unMensajeReceptor = {
                            cuerpo: mensaje.cuerpo,
                            emailEmisor: usuario.email,
                            fecha: mensaje.fecha
                        }
                        mensajeRecibidos.push(unMensajeReceptor)
                    }
                }
            }
            res.json({
                data: mensajeRecibidos,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }
    getByIdEmisor = async (req: Request, res: Response) => {
        const idUsuarioEmisor: number = parseFloat(req.params.idUsuarioEmisor);
        try {
            const mensajes = await Mensaje.findAll({
                where: {
                    idUsuarioEmisor
                }
            });
            let mensajeEnviados: MensajeEmisorInterface[] = [];
            if (mensajes) {
                let mensaje: MensajeInterface
                for (mensaje of mensajes) {
                    let unMensajeEmisor: MensajeEmisorInterface;
                    const usuario = await Usuario.findOne({
                        where: {
                            idUsuario: mensaje.idUsuarioReceptor
                        }
                    });
                    if (usuario) {
                        unMensajeEmisor = {
                            cuerpo: mensaje.cuerpo,
                            emailReceptor: usuario.email,
                            fecha: mensaje.fecha
                        }
                        mensajeEnviados.push(unMensajeEmisor)
                    }
                }
            }
            res.json({
                data: mensajeEnviados,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Query all mensajes
    getAll = async (req: Request, res: Response) => {
        try {
            const mensajes = await Mensaje.findAll();
            return res.json({
                data: mensajes,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Edit a Mensaje
    change = async (req: Request, res: Response) => {
        const idMensaje: number = parseFloat(req.params.idMensaje);
        let nuevoMensaje: MensajeInterface = req.body.mensaje
        try {
            await Mensaje.update({
                cuerpo: nuevoMensaje.cuerpo,
                idUsuarioEmisor: nuevoMensaje.idUsuarioEmisor,
                idUsuarioReceptor: nuevoMensaje.idUsuarioReceptor,
                fecha: nuevoMensaje.fecha,
                idSiniestro: nuevoMensaje.idSiniestro
            }, {
                where: {
                    idMensaje
                },
            });
            const mensaje = await Mensaje.findOne({
                where: {
                    idMensaje
                }
            });
            return res.json({
                data: mensaje,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    nuevo = async (req: Request, res: Response) => {
        let mensaje: MensajeInterface = req.body.mensaje
        try {

        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }
}