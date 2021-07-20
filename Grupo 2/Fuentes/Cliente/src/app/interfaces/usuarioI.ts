export interface UsuarioLocal{
    idUsuario?:number,
    nombreUsuario?:string,
    email?:string,
};
export interface UsuarioLogin{
    email:string,
    password:string
};
export interface RespuestaLogin{
    id:number,
    ok:boolean,
    token:string,
    usuario:UsuarioLocal
}