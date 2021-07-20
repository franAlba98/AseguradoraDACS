import { Request, Response } from "express";
import Asegurado from "../models/Asegurado";

export default class AseguradoController {
    constructor() { }
    //Find an Asegurado
    getById = async (req: Request, res: Response) => {
        const idAsegurado:number = parseFloat(req.params.idAsegurado);
        try {
            const asegurado = await Asegurado.findOne({
                where: {
                    idAsegurado
                }
            });
            return res.json({
                data: asegurado,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    };

    //Query all asegurados
    getAll = async (req: Request, res: Response) => {
        try {
            const asegurados = await Asegurado.findAll();
            return res.json({
                data: asegurados
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: 'The server has an error'
            });
        }
    }
}