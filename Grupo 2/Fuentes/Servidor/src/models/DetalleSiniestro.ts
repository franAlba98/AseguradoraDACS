import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { DetalleSiniestroInterface } from '../interfaces/interfaces';

interface DetalleSiniestroCreationAttributes extends Optional <DetalleSiniestroInterface,"idDetalleSiniestro">{};
export default class DetalleSiniestro extends Model <DetalleSiniestroInterface, DetalleSiniestroCreationAttributes> implements DetalleSiniestroInterface{
    public idDetalleSiniestro!: number;
    public confirmacionDetalleSiniestro!: boolean;
    public idSiniestro!: number;
    public idIncidente!: number;
}
DetalleSiniestro.init({
    idDetalleSiniestro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    idSiniestro:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false
    },
    confirmacionDetalleSiniestro:{
        type:DataTypes.BOOLEAN,
        allowNull:true
    },
    idIncidente:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'DetalleSiniestro', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });