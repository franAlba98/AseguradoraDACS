import {Request, Response} from 'express';
import TipoSiniestro from '../models/TipoSiniestro';
import TipoSiniestroCobertura from '../models/TipoSiniestroCobertura';

export default class TipoSiniestroController{
    constructor(){};

    getAll = async (req:Request, res:Response)=>{
        try{
            const tipoSiniestros = await TipoSiniestro.findAll();
            res.json({
                data:tipoSiniestros,
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
        const {idTipoSiniestro}= await req.params;
        try{
            const tipoSiniestro = await TipoSiniestro.findOne({
                where:{
                    idTipoSiniestro
                }
            });
            res.json({
                data:tipoSiniestro,
                err:false
            });
        }catch(err){
            console.error(err);
            return res.json({
                err:true
            });
        };
    };

    getCoberturas = async (req:Request, res:Response)=>{
        const {idTipoSiniestro} = await req.params;
        try{
            const coberturas = await TipoSiniestroCobertura.findAll({
                where:{
                    idTipoSiniestro
                }
            });
            res.json({
                data:coberturas,
                err:false
            });
        }catch(err){
            console.error(err);
            return res.json({
                err:true
            });
        }

    }
}