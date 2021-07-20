import {Request, Response} from 'express';
import Cobertura from '../models/Cobertura';
import TipoSiniestroCobertura from '../models/TipoSiniestroCobertura';

export default class CoberturaController{
    constructor(){};
    getAll = async (req:Request, res:Response)=>{
        try{
            const coberturas = await Cobertura.findAll();
            res.json({
                data:coberturas,
                err:false
            });
        }catch(err){
            console.error(err);
            return res.json({
                err: true
            });
        }
    };
    getById = async (req:Request,res:Response)=>{
        const idCobertura:number = parseFloat(req.params.idCobertura);
        try{
            const cobertura = await Cobertura.findOne({
                where:{
                    idCobertura
                }
            });
            res.json({
                data:cobertura,
                err:false
            });
        }catch(err){
            console.error(err);
            return res.json({
                err:true
            });
        };
    }
    getTipoSiniestros = async (req:Request, res:Response)=>{
        const idCobertura:number = parseFloat(req.params.idCobertura);
        try{
            const tipoSiniestros = await TipoSiniestroCobertura.findAll({
                where:{
                    idCobertura
                }
            });
            res.json({
                data:tipoSiniestros,
                err:false
            });
        }catch(err){
            console.error(err);
            return res.json({
                err:true
            }); 
        };
    }
}