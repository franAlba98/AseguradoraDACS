export interface MensajeReceptorInterface {
    cuerpo?: Text,
    correoEmisor?:string,
    fecha?: Date
};

export interface MensajeEmisorInterface {
    cuerpo?: Text,
    correoReceptor?:string,
    fecha?: Date
};

export interface EnviarMensajeInterface{
    emisor?: string,
    receptor?: string,
    cuerpo?: Text
};