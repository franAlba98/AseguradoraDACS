import Server from './classes/server';
import { json } from 'express';
import clc from 'cli-color';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'
import express from 'express';
import { stream } from './middlewares/winston';
import fs from "fs"
const server = Server.instance;

/*###################################### generating logs ######################################*/
function createdDate(file: any) {
    const { birthtime } = fs.statSync(file)

    return birthtime
}

if (fs.existsSync('./logs/combined.log')) {
    const newDate = new Date();
    const oldDate = createdDate('./logs/combined.log');
    let timeDifference = Math.abs(oldDate.getTime() - newDate.getTime());
    let differentDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
    //console.log(differentDays);
    if (differentDays < 7) {
        server.app.use(morgan('combined', { stream }));
    } else {
        fs.unlinkSync('./logs/combined.log');
        server.app.use(morgan('combined', { stream }));
    }
} else { server.app.use(morgan('combined', { stream })); }


/*##############################################################################################*/

/*###################################### importing routes ######################################*/
import agenciaRoutes from './routes/agencias';
import usuarioRoutes from './routes/usuarios';
import vehiculoRoutes from './routes/vehiculos';
import coberturaRoutes from './routes/coberturas';
import aseguradoRoutes from './routes/asegurados';
import tipoSiniestroRoutes from './routes/tipoSiniestros';
import polizaRoutes from './routes/polizas';
import indicenteRoutes from './routes/incidentes';
import siniestroRoutes from './routes/siniestros';
import estadoSiniestroRoutes from './routes/estadoSiniestros';
import mensajeRoutes from './routes/mensajes';
import detalleSiniestroRoutes from './routes/detalleSiniestros';
/*##############################################################################################*/

/*######################################### middleware #########################################*/
server.app.use(morgan('dev'));
server.app.use(json());
server.app.use(cors());

console.log(path.resolve(__dirname, '../public'));
server.app.use(express.static(path.resolve(__dirname, '../public')));
/*##############################################################################################*/

/*########################################### routes ###########################################*/
server.app.use('/api/agencias', agenciaRoutes);
server.app.use('/api/usuarios', usuarioRoutes);
server.app.use('/api/vehiculos', vehiculoRoutes);
server.app.use('/api/coberturas', coberturaRoutes);
server.app.use('/api/asegurados', aseguradoRoutes);
server.app.use('/api/tiposiniestros', tipoSiniestroRoutes);
server.app.use('/api/polizas', polizaRoutes);
server.app.use('/api/incidentes', indicenteRoutes);
server.app.use('/api/siniestros', siniestroRoutes);
server.app.use('/api/estadoSiniestros', estadoSiniestroRoutes);
server.app.use('/api/mensajes', mensajeRoutes);
server.app.use('/api/detalleSiniestros', detalleSiniestroRoutes);
/*##############################################################################################*/

server.start(() => {
    console.log(clc.magenta.inverse.bold(`Server on: localhost:${server.app.get('port')}`));
});