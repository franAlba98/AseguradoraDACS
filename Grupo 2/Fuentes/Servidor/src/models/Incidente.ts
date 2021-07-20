import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { IncidenteInterface } from '../interfaces/interfaces';
import DetalleSiniestro from './DetalleSiniestro';
import TipoSiniestro from './TipoSiniestro';

interface IncidenteCreationAttributes extends Optional<IncidenteInterface, "idIncidente"> {}
export default class Incidente extends Model<IncidenteInterface, IncidenteCreationAttributes> implements IncidenteInterface{
    public idIncidente!: number;
    public descripcionIncidente!: string;
    public idTipoSiniestro!: number;
}

Incidente.init({
    idIncidente: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    descripcionIncidente:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    idTipoSiniestro:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'Incidente', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
});

/*################################ Cardinality with DetalleSiniestro ################################*/
Incidente.hasMany(DetalleSiniestro, {foreignKey: 'idIncidente', sourceKey: 'idIncidente'});
DetalleSiniestro.belongsTo(Incidente, {foreignKey: 'idIncidente'});
/*################################################################################################*/

/*################################ Cardinality with TipoSiniestro ################################*/
TipoSiniestro.hasMany(Incidente, {foreignKey: 'idTipoSiniestro', sourceKey: 'idTipoSiniestro'});
Incidente.belongsTo(TipoSiniestro, {foreignKey: 'idTipoSiniestro'});
/*################################################################################################*/
