import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database/database';
import {TipoSiniestroInterface} from '../interfaces/interfaces'

interface TipoSiniestroCreationAttributes extends Optional<TipoSiniestroInterface, 'idTipoSiniestro'>{};
export default class TipoSiniestro extends Model<TipoSiniestroInterface, TipoSiniestroCreationAttributes> implements TipoSiniestroInterface{
    public idTipoSiniestro!: number;
    public hechoGenerador!: string;
};

TipoSiniestro.init({
    idTipoSiniestro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    hechoGenerador: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'TipoSiniestro', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});