import { Request, Response } from "express";
import EstadoSiniestro from "../models/EstadoSiniestro";

export default class EstadoSiniestroController {
    constructor() { }
    //Find an EstadoSiniestro
    getById = async (req: Request, res: Response) => {
        const idEstadoSiniestro: number  = parseFloat(req.params.idEstadoSiniestro);
        try {
            const estadoSiniestro = await EstadoSiniestro.findOne({
                where: {
                    idEstadoSiniestro
                }
            });
            return res.json({
                data: estadoSiniestro,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    };

    //Query all EstadoSiniestro
    getAll = async (req: Request, res: Response) => {
        try {
            const estadoSiniestro = await EstadoSiniestro.findAll();
            return res.json({
                data: estadoSiniestro
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: 'The server has an error'
            });
        }
    }
}