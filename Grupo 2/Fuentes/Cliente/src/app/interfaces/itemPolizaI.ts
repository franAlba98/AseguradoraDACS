export interface itemPolizaI{
    vehiculoMarca?: string;
    vehiculoModelo?: string;
    vehiculoVersion: string;
    vehiculoAnio?: number;
    vehiculoPatente?: string;
    vehiculoMotor?: string;
    polizaFechaContratacion?: Date;
    polizaFechaRenovacion?: Date;
    polizaTarifa?: number;
    coberturaNombre?: string;
    tipoSiniestroHechosGeneradores?: string[];
    expanded: boolean;

}