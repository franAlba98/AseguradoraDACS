import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { TipoSiniestroCoberturaInterface } from '../interfaces/interfaces';

interface TipoSiniestroCoberturaCreationAttributes extends Optional<TipoSiniestroCoberturaInterface, "idTipoSiniestro" | "idCobertura"> { }
interface TipoSiniestroCoberturaInstance extends Model<TipoSiniestroCoberturaInterface, TipoSiniestroCoberturaCreationAttributes>, TipoSiniestroCoberturaInterface {}

const TipoSiniestroCobertura = sequelize.define<TipoSiniestroCoberturaInstance>("TipoSiniestroCobertura",{
    idTipoSiniestro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    idCobertura: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    }
},
{
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});

export default TipoSiniestroCobertura;

   