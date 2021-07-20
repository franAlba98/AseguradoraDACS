import { Request, Response } from 'express';
import Incidente from '../models/Incidente';


export default class IncidenteController {
    constructor() { };
    getAll = async (req: Request, res: Response) => {
        try {
            const incidentes = await Incidente.findAll();
            res.json({
                data: incidentes,
                err: false
            });
        } catch (err) {
            console.error(err);
            return res.json({
                err: true
            });
        }
    };
    getById = async (req: Request, res: Response) => {
        const idIncidente: number = parseFloat(req.params.idIncidente);
        try {
            const incidente = await Incidente.findOne({
                where: {
                    idIncidente
                }
            });
            res.json({
                data: incidente,
                err: false
            });
        } catch (err) {
            console.error(err);
            return res.json({
                err: true
            });
        };
    }
}