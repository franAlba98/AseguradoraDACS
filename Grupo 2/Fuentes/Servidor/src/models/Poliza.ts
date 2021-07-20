import {DataTypes, Model, Optional } from 'sequelize'
import { sequelize } from '../database/database';
import { PolizaInterface } from '../interfaces/interfaces';
import Cobertura from './Cobertura';
import Asegurado from './Asegurado';
import Vehiculo from './Vehiculo';

interface PolizaCreationAttributes extends Optional<PolizaInterface,"idPoliza">{}
export default class Poliza extends Model<PolizaInterface,PolizaCreationAttributes> implements PolizaInterface{
    public idPoliza!: number
    public fechaDeContratacion!: Date
    public fechaDeRenovacion!: Date
    public tarifa!: number
    public idVehiculo!: number
    public idCobertura!: number
    public idAsegurado!: number
    public nombrePoliza!: string
};

Poliza.init({
    idPoliza: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    fechaDeContratacion:{
        type:DataTypes.DATE,
        allowNull:true
    },
    fechaDeRenovacion:{
        type:DataTypes.DATE,
        allowNull:true
    },
    tarifa:{
        type:DataTypes.REAL,
        allowNull:true
    },
    nombrePoliza:{
        type:DataTypes.STRING,
        allowNull:true
    },
    idVehiculo:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idCobertura:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    idAsegurado:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
    sequelize,
    modelName: 'Poliza', //nombre que tiene en la tabla de la DB
    timestamps: false,
    freezeTableName: true, //this is so that sequelize does not pluralize the table
    });

/*################################## Cardinality with Cobertura ##################################*/
Cobertura.hasMany(Poliza, { foreignKey: 'idCobertura', sourceKey: 'idCobertura' });
Poliza.belongsTo(Cobertura, { foreignKey: 'idCobertura' });
/*################################################################################################*/

/*################################## Cardinality with Asegurado ##################################*/
Asegurado.hasMany(Poliza, { foreignKey: 'idAsegurado', sourceKey: 'idAsegurado' });
Poliza.belongsTo(Asegurado, { foreignKey: 'idAsegurado' });
/*################################################################################################*/

/*################################## Cardinality with Vehiculo ###################################*/
Vehiculo.hasMany(Poliza, { foreignKey: 'idVehiculo', sourceKey: 'idVehiculo' });
Poliza.belongsTo(Vehiculo, { foreignKey: 'idVehiculo' });
/*################################################################################################*/