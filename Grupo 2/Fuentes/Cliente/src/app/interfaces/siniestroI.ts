import { roturaCristalesI, roboRuedasI } from './itemSiniestroI';
export interface SiniestroI{
    fecha: Date;
    hora: number;
    descripcion?: String;
    localidad: String;
    provincia: String;
    calle: String;
    codigoPostal: String;
    idSiniestro?: number;
    roturaCristales?:roturaCristalesI;
    roboRuedas?:roboRuedasI;
    patente?: String,
    nombreAgencia?: String,
    alturaAgencia?: String,
    calleAgencia?: String,
    ciudadAgencia?: String,
    tipoSiniestro?: String,
};
