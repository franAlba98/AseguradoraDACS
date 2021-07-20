import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {AgenciaInterface} from '../interfaces/interfaces'


interface AgenciaCreationAttributes extends Optional<AgenciaInterface, 'idAgencia'>{};
export default class Agencia extends Model<AgenciaInterface, AgenciaCreationAttributes> implements AgenciaInterface{
    public idAgencia!: number;
    public nombre!: string;
    public alturaAgencia!: number;
    public calleAgencia!: string;
    public ciudadAgencia!: string;
    public provinciaAgencia!: string;
    public paisAgencia!: string;
    public codigoPostalAgencia!: number;
    public latitudAgencia!: number;
    public longitudAgencia!: number;

};

Agencia.init({
    idAgencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    alturaAgencia: {
        type: DataTypes.NUMBER
    },
    calleAgencia: {
        type: DataTypes.STRING
    },
    ciudadAgencia: {
        type: DataTypes.STRING
    },
    provinciaAgencia: {
        type: DataTypes.STRING
    },
    paisAgencia: {
        type: DataTypes.STRING
    },
    codigoPostalAgencia: {
        type: DataTypes.NUMBER
    },  
    latitudAgencia: {
        type: DataTypes.REAL
    },
    longitudAgencia: {
        type: DataTypes.REAL
    }
}, {
    sequelize,
    modelName: 'Agencia', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});