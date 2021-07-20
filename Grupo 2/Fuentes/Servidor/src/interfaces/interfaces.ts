export interface VehiculoInterface {
    idVehiculo?: number,
    marca?: string,
    anio?: number,
    modelo?: string,
    version?: string,
    numeroDeChasis?: string,
    numeroDeMotor?: string,
    tipoDeUso?: string,
    patente?: string,
};

export interface AgenciaInterface {
    idAgencia?: number,
    nombre?: string,
    alturaAgencia?: number,
    calleAgencia?: string,
    ciudadAgencia?: string,
    provinciaAgencia?: string,
    paisAgencia?: string,
    codigoPostalAgencia?: number,
    latitudAgencia?: number,
    longitudAgencia?: number
};

export interface UsuarioInterface {
    idUsuario?: number,
    hash:string,
    salt:string,
    nombreUsuario:string,
    email:string
};

export interface MensajeInterface {
    idMensaje?: number,
    cuerpo?: Text,
    idUsuarioReceptor?: number,
    idUsuarioEmisor?: number,
    fecha: Date
    idSiniestro:number
};
export interface InfoMensajeNuevoInterface {
    emailEmisor: string,
    emailReceptor: string,
    cuerpo: Text,
    idSiniestro: number
}
export interface MensajeReceptorInterface {
    cuerpo?: Text,
    emailEmisor?:string,
    fecha?: Date
};
export interface MensajeEmisorInterface {
    cuerpo?: Text,
    emailReceptor?:string,
    fecha?: Date
};
export interface AseguradoInterface {
    idAsegurado?: number,
    nombre?: string,
    apellido?: string,
    dni?: number,
    telefono?: number,
    domicilio?: string,
    idUsuario?: number
};

export interface TipoSiniestroInterface {
    idTipoSiniestro?: number,
    hechoGenerador?: string
};

export interface CoberturaInterface {
    idCobertura?: number,
    tarifaActual?: number,
    nombreCobertura?:string
};

export interface PolizaInterface {
    idPoliza?: number,
    fechaDeContratacion?: Date,
    fechaDeRenovacion?: Date,
    tarifa?: number,
    idVehiculo?: number,
    idCobertura?: number,
    idAsegurado?: number,
    nombrePoliza?:string
};

export interface UbicacionInterface {
    idUbicacion?: number,
    latitud?: number,
    longitud?: number,
    altura?: number,
    ciudad?: string,
    provincia?: string,
    pais?: string,
    codigoPostal?: string,
    calle?: string
};
export interface SiniestroInterface {
    idSiniestro?: number,
    fecha?: Date,
    hora?: any,
    descripcion?: string,
    idUbicacion?: number,
    idPoliza?: number,
    idTipoSiniestro?: number,
    idAgencia?: number
};
export interface SiniestroInfoInterface{
    idSiniestro?: number,
    fecha?: Date,
    hora?: any,
    descripcion?: string,
    nombreCobertura?:string,
    nombrePoliza?:string,
    hechoGenerador?:string,
    marca?:string,
    modelo?:string,
    anio?:number,
    motor?:string,
    versionVehiculo?:string,
    patente?:string,
    expanded?:boolean,
    modificable?:boolean,
    localidad?:string,
    codigoPostal?:string,
    provincia?:string,
    calle?:string,
    nombreAgencia?:string,
    roboRuedas?: any[],
    roturaCristales?: any[]
}
export interface EstadoSiniestroInterface {
    idEstadoSiniestro?: number,
    nombreEstado?: string,
    idSiniestro?: number
};
export interface IncidenteInterface {
    idIncidente?: number,
    descripcionIncidente?: string,
    idTipoSiniestro?: number
};
export interface DetalleSiniestroInterface {
    idDetalleSiniestro?: number,
    confirmacionDetalleSiniestro?: boolean,
    idSiniestro?: number,
    idIncidente?: number
};

export interface roturaCristalesI{
    parabrisasTrasero: boolean,
    parabrisasDelantero: boolean,
    ventanaDelanteraIzq: boolean,
    ventanaDelanteraDer: boolean,
    ventanaTraseraIzq: boolean,
    ventanaTraseraDer: boolean
}

export interface roboRuedasI{
    delanteraDer: boolean,
    delanteraIzq: boolean,
    traseraDer: boolean,
    traseraIzq: boolean,
    repuesto: boolean
}

export interface TipoSiniestroCoberturaInterface {
    idTipoSiniestro?: number,
    idCobertura?: number
};

export interface infoPolizaInterface{
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
export interface UsuarioTokenInterface {
    idUsuario?: number,
    nombreUsuario?:string,
    email?:string,
    img?:string,
    google?:boolean
};
export interface CifradoInterface{
    hash:string,
    salt:string,
}

export interface ImagenSiniestroInterface{
    idImagen:number,
    idSiniestro:number,
    rutaImagen:string,
    nombreImagen:string
}