import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { ImagenSiniestroInterface } from '../interfaces/interfaces';

interface ImagenCreationAttributes extends Optional<ImagenSiniestroInterface, "idImagen">{}
export default class ImagenSiniestro extends Model<ImagenSiniestroInterface,ImagenCreationAttributes> implements ImagenSiniestroInterface{
    public idImagen!: number;
    public idSiniestro!: number;
    public nombreImagen!: string;
    public rutaImagen!: string;
};
ImagenSiniestro.init({
    idImagen: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    idSiniestro:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    nombreImagen:{
        type:DataTypes.STRING(200),
        allowNull:true
    },
    rutaImagen:{
        type:DataTypes.STRING,
        allowNull:true
    }
},
{
    sequelize,
    modelName: 'ImagenSiniestro', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });