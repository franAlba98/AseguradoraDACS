import {Request, Response} from 'express';
import Agencia from '../models/Agencia';

export default class AgenciaController{
    constructor(){};
    //Query all agencias
    getAll = async (req:Request, res:Response)=>{
        try{
            const agencias = await Agencia.findAll();
            res.json({
                data:agencias,
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
        const idAgencia:number= parseFloat(req.params.idAgencia);
        try{
            const agencia = await Agencia.findOne({
                where:{
                    idAgencia
                }
            });
            res.json({
                data:agencia,
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