import {Sequelize} from "sequelize"

export const sequelize = new Sequelize(
    'AseguradoraDB',//Data Base
    'postgres',//user
    'investigacion',//password
    {
        host:'localhost',
        port:5433,
        dialect:'postgres',
        logging: false
    }
)