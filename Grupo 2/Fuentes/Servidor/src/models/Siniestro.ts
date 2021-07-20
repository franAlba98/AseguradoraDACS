import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { SiniestroInterface } from '../interfaces/interfaces';
import TipoSiniestro from './TipoSiniestro';
import Poliza from './Poliza';
import Agencia from './Agencia';
import Ubicacion from './Ubicacion';
import DetalleSiniestro from './DetalleSiniestro';
import EstadoSiniestro from './EstadoSiniestro';
import Mensaje from './Mensaje';

interface SiniestroCreationAttributes extends Optional<SiniestroInterface,"idSiniestro">{}
export default class Siniestro extends Model<SiniestroInterface,SiniestroCreationAttributes> implements SiniestroInterface{
    public idSiniestro!: number
    public fecha!: Date
    public hora!: any
    public descripcion!: string
    public idUbicacion!: number
    public idPoliza!: number
    public idTipoSiniestro!: number
    public idAgencia!: number
};

Siniestro.init({
    idSiniestro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    fecha:{
        type:DataTypes.DATE,
        allowNull:true
    },
    hora:{
        type:DataTypes.TIME,
        allowNull:true
    },
    descripcion:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    idUbicacion:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idPoliza:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idTipoSiniestro:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idAgencia:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},
{
    sequelize,
    modelName: 'Siniestro', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });

/*################################ Cardinality with TipoSiniestro ################################*/
TipoSiniestro.hasMany(Siniestro, { foreignKey: 'idTipoSiniestro', sourceKey: 'idTipoSiniestro' });
Siniestro.belongsTo(TipoSiniestro, { foreignKey: 'idTipoSiniestro' });
/*################################################################################################*/

/*#################################### Cardinality with Poliza ###################################*/
Poliza.hasMany(Siniestro, { foreignKey: 'idPoliza', sourceKey: 'idPoliza' });
Siniestro.belongsTo(Poliza, { foreignKey: 'idPoliza' });
/*################################################################################################*/

/*################################### Cardinality with Agencia ###################################*/
Agencia.hasMany(Siniestro, { foreignKey: 'idAgencia', sourceKey: 'idAgencia' });
Siniestro.belongsTo(Agencia, { foreignKey: 'idAgencia' });
/*################################################################################################*/

/*################################## Cardinality with Ubicacion ##################################*/
Ubicacion.hasMany(Siniestro, { foreignKey: 'idUbicacion', sourceKey: 'idUbicacion' });
Siniestro.belongsTo(Ubicacion, { foreignKey: 'idUbicacion' });
/*################################################################################################*/

/*################################### Cardinality with Mensaje ###################################*/
Siniestro.hasMany(Mensaje, { foreignKey: 'idSiniestro', sourceKey: 'idSiniestro' });
Mensaje.belongsTo(Siniestro, { foreignKey: 'idSiniestro' });
/*################################################################################################*/

/*############################### Cardinality with EstadoSiniestro ###############################*/
Siniestro.hasMany(EstadoSiniestro, { foreignKey: 'idSiniestro', sourceKey: 'idSiniestro' });
EstadoSiniestro.belongsTo(Siniestro, { foreignKey: 'idSiniestro' });
/*################################################################################################*/

/*############################### Cardinality with DetalleSiniestro ##############################*/
Siniestro.hasMany(DetalleSiniestro, { foreignKey: 'idSiniestro', sourceKey: 'idSiniestro' });
DetalleSiniestro.belongsTo(Siniestro, { foreignKey: 'idSiniestro' });
/*################################################################################################*/