import { Request, Response } from "express";
import { DetalleSiniestroInterface } from "../interfaces/interfaces";
import DetalleSiniestro from "../models/DetalleSiniestro";

export default class DetalleSiniestroController {
    constructor() { }

    //Create a DetalleSiniestro
    new = async (req: Request, res: Response) => {
        let detalleSiniestro: DetalleSiniestroInterface = req.body.detalleSiniestro
        try {
            const newDetalleSiniestro = await DetalleSiniestro.create({
                confirmacionDetalleSiniestro: detalleSiniestro.confirmacionDetalleSiniestro, 
                idSiniestro: detalleSiniestro.idSiniestro, 
                idIncidente: detalleSiniestro.idIncidente
            });
            res.json({
                data: newDetalleSiniestro,
                err: false
            })
        } catch (err) {
            console.log(err);
            res.json({
                err: true
            })
        }
    }

    //Find a DetalleSiniestro
    getById = async (req: Request, res: Response) => {
        const idDetalleSiniestro:number = parseFloat(req.params.idDetalleSiniestro);
        try {
            const detalleSiniestro = await DetalleSiniestro.findOne({
                where: {
                    idDetalleSiniestro
                }
            });
            return res.json({
                data: detalleSiniestro,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Query all DetalleSiniestro
    getAll = async (req: Request, res: Response) => {
        try {
            const detalleSiniestros = await DetalleSiniestro.findAll();
            return res.json({
                data: detalleSiniestros,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Edit a DetalleSiniestro
    change = async (req: Request,res: Response) => {
        const idDetalleSiniestro:number = parseFloat(req.params.idDetalleSiniestro);
        let nuevoDetalleSiniestro: DetalleSiniestroInterface = req.body.detalleSiniestro;
        try {
            await DetalleSiniestro.update({
                confirmacionDetalleSiniestro: nuevoDetalleSiniestro.confirmacionDetalleSiniestro
            },{
                where:{
                    idDetalleSiniestro
                },
            });
            const detalleSiniestro = await DetalleSiniestro.findOne({
                where: {
                    idDetalleSiniestro
                }
            });
            return res.json({
                data: detalleSiniestro,
                err: false
            })
        } catch(err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }
}