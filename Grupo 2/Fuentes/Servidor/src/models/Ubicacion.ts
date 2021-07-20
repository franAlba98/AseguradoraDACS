import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { UbicacionInterface } from '../interfaces/interfaces';

interface UbicacionCreationAttributes extends Optional<UbicacionInterface,"idUbicacion">{}
export default class Ubicacion extends Model <UbicacionInterface, UbicacionCreationAttributes> implements UbicacionInterface{
    public idUbicacion!: number;
    public latitud!: number;
    public longitud!: number;
    public altura!: number;
    public ciudad!: string;
    public provincia!: string;
    public pais!: string;
    public codigoPostal!: string;
    public calle!: string;
};
Ubicacion.init({
    idUbicacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    latitud:{
        type:DataTypes.REAL,
        allowNull:true
    },
    longitud:{
        type:DataTypes.REAL,
        allowNull:true
    },
    altura:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    ciudad:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    provincia:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    pais:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    codigoPostal:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    calle:{
        type:DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    modelName: 'Ubicacion', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });