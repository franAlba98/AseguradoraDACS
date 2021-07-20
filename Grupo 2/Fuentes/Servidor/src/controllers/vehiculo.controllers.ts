import {Request, Response} from 'express';
import Vehiculo from '../models/Vehiculo';

export default class VehiculoController{
    constructor(){};
    //Query all agencias
    getAll = async (req:Request, res:Response)=>{
        try{
            const vehiculos = await Vehiculo.findAll();
            res.json({
                data:vehiculos,
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
        const idVehiculo:number= parseFloat(req.params.idVehiculo);
        try{
            const vehiculo = await Vehiculo.findOne({
                where:{
                    idVehiculo
                }
            });
            res.json({
                data:vehiculo,
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