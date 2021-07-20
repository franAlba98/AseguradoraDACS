import { Request, Response } from "express";
import { PolizaInterface, infoPolizaInterface, TipoSiniestroCoberturaInterface } from '../interfaces/interfaces';
import Poliza from '../models/Poliza';
import Vehiculo from '../models/Vehiculo';
import Cobertura from '../models/Cobertura';
import TipoSiniestroCobertura from "../models/TipoSiniestroCobertura";
import TipoSiniestro from "../models/TipoSiniestro";

export default class PolizaController {
    constructor() { }
    //Find a Poliza
    getById = async (req: Request, res: Response) => {
        const idPoliza: number = parseFloat(req.params.idPoliza);
        try {
            const poliza = await Poliza.findOne({
                where: {
                    idPoliza
                }
            });
            return res.json({
                data: poliza,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    };

    //Query all polizas
    getAll = async (req: Request, res: Response) => {
        try {
            const polizas = await Poliza.findAll();
            return res.json({
                data: polizas,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }
    info = async (req: Request, res: Response) => {
        try {
            const polizas = await Poliza.findAll();
            if (polizas) {
                let p: PolizaInterface;
                const infoPolizas: infoPolizaInterface[] = [];
                for (p of polizas) {
                    const vehiculo = await Vehiculo.findOne({
                        where: {
                            idVehiculo: p.idVehiculo
                        }
                    });
                    const cobertura = await Cobertura.findOne({
                        where: {
                            idCobertura: p.idCobertura
                        }
                    });
                    const tipoSiniestroCoberturas = await TipoSiniestroCobertura.findAll({
                        where: {
                            idCobertura: p.idCobertura
                        }
                    });
                    let tipoSinCob: TipoSiniestroCoberturaInterface;
                    const tipoSiniestroHechoGeneradores: string[] = [];
                    for (tipoSinCob of tipoSiniestroCoberturas) {
                        let tipoSiniestro = await TipoSiniestro.findOne({
                            where: {
                                idTipoSiniestro: tipoSinCob.idTipoSiniestro
                            }
                        });
                        if (tipoSiniestro) {
                            tipoSiniestroHechoGeneradores.push(tipoSiniestro.hechoGenerador);
                        };
                    };

                    if (vehiculo && cobertura) {
                        let infoPoliza: infoPolizaInterface = {
                            vehiculoMarca: vehiculo.marca,
                            vehiculoModelo: vehiculo.modelo,
                            vehiculoAnio: vehiculo.anio,
                            vehiculoPatente: vehiculo.patente,
                            vehiculoVersion: vehiculo.version,
                            vehiculoNumeroMotor: vehiculo.numeroDeMotor,
                            polizaFechaContratacion: p.fechaDeContratacion,
                            polizaFechaRenovacion: p.fechaDeRenovacion,
                            polizaTarifa: p.tarifa,
                            nombreCobertura: cobertura.nombreCobertura,
                            tipoSiniestroHechoGeneradores,
                            expanded:false
                        };
                        infoPolizas.push(infoPoliza);
                    };
                };
                res.json({
                    data: infoPolizas,
                    err: false
                });
            };
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        };
    }
}