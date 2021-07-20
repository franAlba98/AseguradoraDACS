import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {MensajeInterface} from '../interfaces/interfaces'

interface MensajeCreationInterface extends Optional<MensajeInterface, 'idMensaje'>{};
export default class Mensaje extends Model<MensajeInterface, MensajeCreationInterface> implements MensajeInterface{
    public idMensaje!: number;
    public cuerpo!: Text;
    public idUsuarioReceptor!: number;
    public idUsuarioEmisor!: number;
    public fecha!:Date;
    public idSiniestro!:number;
};

Mensaje.init({
    idMensaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    cuerpo: {
        type: DataTypes.TEXT
    },
    idUsuarioReceptor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idUsuarioEmisor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull: true
    },
    idSiniestro:{
        type:DataTypes.NUMBER,
        allowNull:true
    }
}, {
    sequelize,
    modelName: 'Mensaje', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});