import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {CoberturaInterface} from '../interfaces/interfaces'
import TipoSiniestro from './TipoSiniestro';
import TipoSiniestroCobertura from './TipoSiniestroCobertura';


interface CoberturaCreationAttributes extends Optional<CoberturaInterface, 'idCobertura'>{};
export default class Cobertura extends Model<CoberturaInterface, CoberturaCreationAttributes> implements CoberturaInterface{
    public idCobertura!: number;
    public tarifaActual!: number;
    public nombreCobertura!:string;
}
Cobertura.init({
    idCobertura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tarifaActual: {
        type: DataTypes.REAL
    },
    nombreCobertura:{
        type:DataTypes.STRING(200),
        allowNull:true
    }
}, {
    sequelize,
    modelName: 'Cobertura', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});

/*################################## Cardinality with Vehiculo ###################################*/
Cobertura.belongsToMany(TipoSiniestro,{ through: TipoSiniestroCobertura, foreignKey:"idCobertura" });
TipoSiniestro.belongsToMany(Cobertura,{ through: TipoSiniestroCobertura, foreignKey:"idTipoSiniestro" });
/*################################################################################################*/