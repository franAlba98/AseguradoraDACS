export interface VehiculoI{
    idVehiculo?: number;
    marca: string;
    anio:string;
    modelo:string;
    version:string;
    tipoDeUso?:string;
    patente?:string;
    motor?: string;
};