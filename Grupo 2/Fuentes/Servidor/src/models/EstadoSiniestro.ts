import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { EstadoSiniestroInterface } from '../interfaces/interfaces';

interface EstadoSiniestroCreationAttributes extends Optional<EstadoSiniestroInterface, "idEstadoSiniestro">{}
export default class EstadoSiniestro extends Model<EstadoSiniestroInterface,EstadoSiniestroCreationAttributes> implements EstadoSiniestroInterface{
    public idEstadoSiniestro!: number;
    public nombreEstado!: string;
    public idSiniestro!: number;
};
EstadoSiniestro.init({
    idEstadoSiniestro: {
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
    nombreEstado:{
        type:DataTypes.STRING(100),
        allowNull:true
    }
},
{
    sequelize,
    modelName: 'EstadoSiniestro', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });