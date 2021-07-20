import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {VehiculoInterface} from '../interfaces/interfaces'

interface VehiculoCreationAttributes extends Optional<VehiculoInterface, 'idVehiculo'>{};
export default class Vehiculo extends Model<VehiculoInterface, VehiculoCreationAttributes> implements VehiculoInterface{
    public idVehiculo!: number;
    public marca!: string;
    public anio!: number;
    public modelo!: string;
    public version!: string;
    public numeroDeChasis!: string;
    public numeroDeMotor!: string;
    public tipoDeUso!: string;
    public patente!: string;
    
};

Vehiculo.init({
    idVehiculo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING
    },
    anio: {
        type: DataTypes.INTEGER
    },
    modelo: {
        type: DataTypes.STRING
    },
    version: {
        type: DataTypes.STRING(200)
    },
    numeroDeChasis: {
        type: DataTypes.STRING
    },
    numeroDeMotor: {
        type: DataTypes.STRING
    },
    tipoDeUso: {
        type: DataTypes.STRING
    },
    patente: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Vehiculo', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});