import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {UsuarioInterface} from '../interfaces/interfaces'
import Asegurado from './Asegurado';
import Mensaje from './Mensaje';

interface UsuarioCreationAttributes extends Optional<UsuarioInterface, 'idUsuario'>{};
export default class Usuario extends Model<UsuarioInterface, UsuarioCreationAttributes> implements UsuarioInterface{
    public idUsuario!: number;
    public hash!: string;
    public salt!: string;
    public nombreUsuario!:string;
    public email!:string;
};

Usuario.init({
    idUsuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    hash: {
        type: DataTypes.STRING
    },
    salt: {
        type: DataTypes.STRING
    },
    nombreUsuario:{
        type: DataTypes.STRING 
    },
    email:{
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'Usuario', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});

/*################################ Cardinality with Mensaje Emisor ################################*/
Usuario.hasMany(Mensaje, {foreignKey: 'idUsuarioEmisor', sourceKey: 'idUsuario'});
Mensaje.belongsTo(Usuario, {foreignKey: 'idUsuarioEmisor'});
/*################################################################################################*/

/*################################ Cardinality with Mensaje Receptor ################################*/
Usuario.hasMany(Mensaje, {foreignKey: 'idUsuarioReceptor', sourceKey: 'idUsuario'});
Mensaje.belongsTo(Usuario, {foreignKey: 'idUsuarioReceptor'});
/*################################################################################################*/

/*################################ Cardinality with Asegurado ################################*/
Usuario.hasOne(Asegurado, {foreignKey: 'idUsuario', sourceKey: 'idUsuario'});
Asegurado.belongsTo(Usuario, {foreignKey: 'idUsuario'});
/*################################################################################################*/
