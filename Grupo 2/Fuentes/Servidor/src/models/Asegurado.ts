import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {AseguradoInterface} from '../interfaces/interfaces'

interface AseguradoCreationAttributes extends Optional<AseguradoInterface, 'idAsegurado'>{};
export default class Asegurado extends Model<AseguradoInterface, AseguradoCreationAttributes> implements AseguradoInterface{
    public idAsegurado!: number;
    public nombre!: string;
    public apellido!: string;
    public dni!: number;
    public telefono!: number;
    public domicilio!: string;
    public idusuario!: number;
}

Asegurado.init({
    idAsegurado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.INTEGER
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    domicilio: {
        type: DataTypes.STRING
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false

    }
}, {
    sequelize,
    modelName: 'Asegurado', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});