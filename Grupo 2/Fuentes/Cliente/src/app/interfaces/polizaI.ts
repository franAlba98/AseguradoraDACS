export interface PolizaI{
    vehiculoMarca?:string,
    vehiculoModelo?:string,
    vehiculoAnio?:number,
    vehiculoPatente?:string,
    vehiculoVersion?:string,
    vehiculoNumeroMotor?:string,
    polizaFechaContratacion?:Date,
    polizaFechaRenovacion?:Date,
    polizaTarifa?:number,
    nombreCobertura?:string,
    tipoSiniestroHechoGeneradores?:string[],
    expanded?:boolean
};
