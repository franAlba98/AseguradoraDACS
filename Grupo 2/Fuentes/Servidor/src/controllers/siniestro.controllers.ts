import { Request, Response } from "express";
import Siniestro from "../models/Siniestro";
import { SiniestroInterface, SiniestroInfoInterface, UsuarioInterface, PolizaInterface, DetalleSiniestroInterface } from '../interfaces/interfaces';
import Poliza from '../models/Poliza';
import Agencia from '../models/Agencia';
import TipoSiniestro from '../models/TipoSiniestro';
import Vehiculo from '../models/Vehiculo';
import Cobertura from '../models/Cobertura';
import Imagen from "../models/ImagenSiniestro";
import { any } from "sequelize/types/lib/operators";
import Server from "../classes/server";
import Asegurado from "../models/Asegurado";
import Ubicacion from "../models/Ubicacion";
import DetalleSiniestro from "../models/DetalleSiniestro";

const server = Server.instance;
export default class SiniestroController {
    constructor() { }


    //Create a Siniestro
    new = async (req: Request, res: Response) => {
        function crearDetalles(detalle: any, siniestro: number): DetalleSiniestroInterface[] {
            if (detalle.parabrisasTrasero != undefined) {
                const detalleParabrisasTrasero: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.parabrisasTrasero,
                    idSiniestro: siniestro,
                    idIncidente: 13
                }
                const detalleParabrisasDelantero: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.parabrisasDelantero,
                    idSiniestro: siniestro,
                    idIncidente: 12
                }
                const detalleFrontalIzquierdo: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.ventanaDelanteraIzq,
                    idSiniestro: siniestro,
                    idIncidente: 8
                }
                const detalleFrontalDerecho: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.ventanaDelanteraDer,
                    idSiniestro: siniestro,
                    idIncidente: 9
                }
                const detalleTraseroIzquierdo: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.ventanaTraseraIzq,
                    idSiniestro: siniestro,
                    idIncidente: 10
                }
                const detalleTraseroDerecho: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.ventanaTraseraDer,
                    idSiniestro: siniestro,
                    idIncidente: 11
                }

                const newDetalle: DetalleSiniestroInterface[] = [detalleParabrisasTrasero, detalleParabrisasDelantero, detalleFrontalIzquierdo, detalleFrontalDerecho, detalleTraseroIzquierdo, detalleTraseroDerecho]
                return newDetalle;

            } if (detalle.repuesto != undefined) {

                const detalleRuedaFrontalIzquierda: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.delanteraIzq,
                    idSiniestro: siniestro,
                    idIncidente: 3
                }
                const detalleRuedaFrontalDerecha: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.delanteraDer,
                    idSiniestro: siniestro,
                    idIncidente: 4
                }
                const detalleRuedaTraseraIzquierda: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.traseraIzq,
                    idSiniestro: siniestro,
                    idIncidente: 5
                }
                const detalleRuedaTraseraDerecha: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.traseraDer,
                    idSiniestro: siniestro,
                    idIncidente: 6
                }
                const detalleRuedaRepuesto: DetalleSiniestroInterface = {
                    confirmacionDetalleSiniestro: detalle.repuesto,
                    idSiniestro: siniestro,
                    idIncidente: 7
                }

                const newDetalle: DetalleSiniestroInterface[] = [detalleRuedaFrontalIzquierda, detalleRuedaFrontalDerecha, detalleRuedaTraseraIzquierda, detalleRuedaTraseraDerecha, detalleRuedaRepuesto]
                return newDetalle;

            }
            else {
                return [];
            }
        }
        const { fecha, hora, descripcion, roturaCristales, roboRuedas, patenteVehiculo, nombreAgencia, ciudadAgencia, calleAgencia, alturaAgencia } = req.body;
        let nuevaFecha: Date = new Date(fecha);
        let nuevaHora: any = new Date(hora);
        const newRoturaCristales: any = roturaCristales;
        const newRoboRuedas: any = roboRuedas;

        console.log(req.files);
        let arregloImagenes: any = req.files;
        let imagenes: any = [];
        const asignar = async (unaImagen: any,elId:number) => {
            let nombreImagen = unaImagen.originalname;
            let rutaImagen = unaImagen.path;
            //let idSiniestro = parseFloat(req.params.idSiniestro);
            const newImage = await Imagen.create({
                nombreImagen: nombreImagen,
                rutaImagen: rutaImagen,
                idSiniestro: elId
            });
            imagenes.push(newImage);

        }
        console.log(typeof (req.files));

        console.log(newRoturaCristales);
        console.log('Hora antes de slice: ', nuevaHora.toString());
        console.log(req.body);
        try {
            //ROTURA DE CRISTALES
            //slice de 16 hasta 23 para dejar solo la hora
            nuevaHora = nuevaHora.toString().slice(16, 23);
            if (newRoturaCristales != null) {

                //BUSCANDO AGENCIA
                const agencia = await Agencia.findOne({
                    where: {
                        nombre: nombreAgencia,
                        ciudadAgencia,
                        calleAgencia,
                        alturaAgencia

                    }
                })
                console.log('AGENCIA ENCONTRADA: ',agencia);

                //BUSCANDO POLIZA
                const vehiculo = await Vehiculo.findOne({
                    where: {
                        patente: patenteVehiculo

                    }
                })
                const poliza = await Poliza.findOne({
                    where: {
                        idVehiculo: vehiculo?.idVehiculo
                    }
                })
                console.log('POLIZA ENCONTRADA: ',poliza);
                console.log('VEHICULO ENCONTRADO: ', vehiculo);

                console.log(newRoturaCristales)
                const newSiniestro = await Siniestro.create({
                    fecha: nuevaFecha,
                    hora: nuevaHora,
                    descripcion: descripcion,
                    idUbicacion: 1,
                    idPoliza: poliza?.idPoliza,
                    idTipoSiniestro: 3,
                    idAgencia: agencia?.idAgencia
                });
                const arregloDetalles = crearDetalles(newRoturaCristales, newSiniestro.idSiniestro);
                console.log(arregloDetalles);
                const detalleSiniestro = await DetalleSiniestro.bulkCreate(arregloDetalles);
                arregloImagenes.forEach((imagen: any) => { asignar(imagen,newSiniestro.idSiniestro); });
                console.log('le imagenes: ',imagenes);
                /* res.json({
                    data: arregloImagenes,
                    err: false
                }) */
                //console.log(res,typeof(res));
                //reader.readAsDataURL();
                //res.send();
                res.json({
                    data: newSiniestro,
                    detallesSiniestros: detalleSiniestro,
                    imagenes: arregloImagenes,
                    err: false
                })
                //SI ES ROBO DE RUEDAS    
            } else {
                console.log('le hora: ', nuevaHora);
                console.log('el tipo de la hora: ', typeof (nuevaHora));
                console.log(newRoboRuedas)
                const newSiniestro = await Siniestro.create({
                    fecha: nuevaFecha,
                    hora: nuevaHora,
                    descripcion: descripcion,
                    idUbicacion: 1,
                    idPoliza: 1,
                    idTipoSiniestro: 8,
                    idAgencia: 1
                });
                const arregloDetalles = crearDetalles(newRoboRuedas, newSiniestro.idSiniestro);
                console.log(arregloDetalles);
                const detalleSiniestro = await DetalleSiniestro.bulkCreate(arregloDetalles);

                arregloImagenes.forEach((imagen: any) => { asignar(imagen,newSiniestro.idSiniestro); });
                console.log('le imagenes: ',imagenes);
                /* res.json({
                    data: arregloImagenes,
                    err: false
                }) */
                //console.log(res,typeof(res));
                //reader.readAsDataURL();
                //res.send();

                res.json({
                    data: newSiniestro,
                    detallesSiniestros: detalleSiniestro,
                    imagenes: arregloImagenes,
                    err: false
                })
            }

        } catch (err) {
            console.log(err);
            res.json({
                err: true
            })
        }
    }

    //Find a Siniestro
    getById = async (req: Request, res: Response) => {
        const idSiniestro: number = parseFloat(req.params.idSiniestro);
        try {
            const siniestro = await Siniestro.findOne({
                where: {
                    idSiniestro
                }
            });
            return res.json({
                data: siniestro,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Query all siniestros
    getAll = async (req: Request, res: Response) => {
        try {
            const siniestros = await Siniestro.findAll();
            return res.json({
                data: siniestros,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    info = async (req: Request, res: Response) => {
        try {
            const siniestros = await Siniestro.findAll();
            const newSiniestros: SiniestroInfoInterface[] = [];
            if (siniestros) {
                let siniestro: SiniestroInterface;
                for (siniestro of siniestros) {
                    if (siniestro.idPoliza && siniestro.idAgencia && siniestro.idTipoSiniestro) {
                        const poliza = await Poliza.findOne({
                            where: {
                                idPoliza: siniestro.idPoliza
                            }
                        });
                        const agencia = await Agencia.findOne({
                            where: {
                                idAgencia: siniestro.idAgencia
                            }
                        });
                        const tipoSiniestro = await TipoSiniestro.findOne({
                            where: {
                                idTipoSiniestro: siniestro.idTipoSiniestro
                            }
                        });
                        if (poliza && tipoSiniestro && agencia) {
                            if (poliza.idVehiculo) {
                                const vehiculo = await Vehiculo.findOne({
                                    where: {
                                        idVehiculo: poliza.idVehiculo
                                    }
                                });
                                const cobertura = await Cobertura.findOne({
                                    where: {
                                        idCobertura: poliza.idCobertura
                                    }
                                });
                                const ubicacion = await Ubicacion.findOne({
                                    where: {
                                        idUbicacion: siniestro.idUbicacion
                                    }
                                });

                                if (cobertura && vehiculo && ubicacion) {
                                    const newSiniestro: SiniestroInfoInterface = {
                                        hechoGenerador: tipoSiniestro.hechoGenerador,
                                        nombreCobertura: cobertura.nombreCobertura,
                                        nombrePoliza: poliza.nombrePoliza,
                                        marca: vehiculo.marca,
                                        anio: vehiculo.anio,
                                        modelo: vehiculo.modelo,
                                        versionVehiculo: vehiculo.version,
                                        motor: vehiculo.numeroDeMotor,
                                        patente: vehiculo.patente,
                                        fecha: siniestro.fecha,
                                        hora: siniestro.hora,
                                        descripcion: siniestro.descripcion,
                                        idSiniestro: siniestro.idSiniestro,
                                        expanded: false,
                                        modificable: true,
                                        localidad: ubicacion.ciudad,
                                        provincia: ubicacion.provincia,
                                        codigoPostal: ubicacion.codigoPostal,
                                        calle: ubicacion.calle
                                    };
                                    newSiniestros.push(newSiniestro);
                                }
                            };
                        };
                    }
                }
            };
            res.json({
                data: newSiniestros,
                err: false
            });
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    infoCurrentUser = async (req: Request, res: Response) => {
        try {
            const head = server.getUser();
            //const head: any = req.get('usuario');
            //console.log('header usuario: ',head);
            if (head) {
                const usuario: number = parseFloat(head);
                console.log(usuario);
                console.log(typeof (usuario));
                if (usuario) {
                    const asegurado = await Asegurado.findOne({
                        where: {
                            idUsuario: usuario
                        }
                    });
                    if (asegurado) {
                        const polizas = await Poliza.findAll({
                            where: {
                                idAsegurado: asegurado.idAsegurado
                            }
                        });
                        if (polizas) {
                            let poliza: PolizaInterface;
                            console.log('POLIZAS: ', polizas);
                            const newSiniestros: SiniestroInfoInterface[] = [];
                            for (poliza of polizas) {
                                let siniestros = await Siniestro.findAll({
                                    where: {
                                        idPoliza: poliza.idPoliza
                                    }
                                });
                                console.log('siniestros: ', siniestros);
                                if (siniestros) {
                                    let siniestro: SiniestroInterface;
                                    console.log('EN IF');
                                    for (siniestro of siniestros) {
                                        if (siniestro.idPoliza && siniestro.idAgencia && siniestro.idTipoSiniestro) {
                                            const poliza = await Poliza.findOne({
                                                where: {
                                                    idPoliza: siniestro.idPoliza
                                                }
                                            });
                                            const agencia = await Agencia.findOne({
                                                where: {
                                                    idAgencia: siniestro.idAgencia
                                                }
                                            });
                                            const tipoSiniestro = await TipoSiniestro.findOne({
                                                where: {
                                                    idTipoSiniestro: siniestro.idTipoSiniestro
                                                }
                                            });
                                            const detallesSiniestros = await DetalleSiniestro.findAll({
                                                where:{
                                                    idSiniestro: siniestro.idSiniestro
                                                }
                                            })
                                            if (poliza && tipoSiniestro && agencia) {
                                                if (poliza.idVehiculo) {
                                                    const vehiculo = await Vehiculo.findOne({
                                                        where: {
                                                            idVehiculo: poliza.idVehiculo
                                                        }
                                                    });
                                                    const cobertura = await Cobertura.findOne({
                                                        where: {
                                                            idCobertura: poliza.idCobertura
                                                        }
                                                    });
                                                    const ubicacion = await Ubicacion.findOne({
                                                        where: {
                                                            idUbicacion: siniestro.idUbicacion
                                                        }
                                                    });
                                                    if(detallesSiniestros[0].idIncidente===8 || detallesSiniestros[0].idIncidente===9 || detallesSiniestros[0].idIncidente===10 || detallesSiniestros[0].idIncidente===11 || detallesSiniestros[0].idIncidente===12 || detallesSiniestros[0].idIncidente===13) {

                                                        if (cobertura && vehiculo && ubicacion) {
                                                            const newSiniestro: SiniestroInfoInterface = {
                                                                hechoGenerador: tipoSiniestro.hechoGenerador,
                                                                nombreCobertura: cobertura.nombreCobertura,
                                                                nombrePoliza: poliza.nombrePoliza,
                                                                marca: vehiculo.marca,
                                                                anio: vehiculo.anio,
                                                                modelo: vehiculo.modelo,
                                                                versionVehiculo: vehiculo.version,
                                                                motor: vehiculo.numeroDeMotor,
                                                                patente: vehiculo.patente,
                                                                fecha: siniestro.fecha,
                                                                hora: siniestro.fecha,
                                                                descripcion: siniestro.descripcion,
                                                                idSiniestro: siniestro.idSiniestro,
                                                                expanded: false,
                                                                modificable: true,
                                                                localidad: ubicacion.ciudad,
                                                                codigoPostal: ubicacion.codigoPostal,
                                                                provincia: ubicacion.provincia,
                                                                calle: ubicacion.calle,
                                                                roboRuedas: [],
                                                                roturaCristales: detallesSiniestros 
    
                                                            };
                                                            newSiniestros.push(newSiniestro);
                                                        }

                                                    }else {
                                                        
                                                        if (cobertura && vehiculo && ubicacion) {
                                                            const newSiniestro: SiniestroInfoInterface = {
                                                                hechoGenerador: tipoSiniestro.hechoGenerador,
                                                                nombreCobertura: cobertura.nombreCobertura,
                                                                nombrePoliza: poliza.nombrePoliza,
                                                                marca: vehiculo.marca,
                                                                anio: vehiculo.anio,
                                                                modelo: vehiculo.modelo,
                                                                versionVehiculo: vehiculo.version,
                                                                motor: vehiculo.numeroDeMotor,
                                                                patente: vehiculo.patente,
                                                                fecha: siniestro.fecha,
                                                                hora: siniestro.fecha,
                                                                descripcion: siniestro.descripcion,
                                                                idSiniestro: siniestro.idSiniestro,
                                                                expanded: false,
                                                                modificable: true,
                                                                localidad: ubicacion.ciudad,
                                                                codigoPostal: ubicacion.codigoPostal,
                                                                provincia: ubicacion.provincia,
                                                                calle: ubicacion.calle,
                                                                roboRuedas: detallesSiniestros,
                                                                roturaCristales: []
    
                                                            };
                                                            newSiniestros.push(newSiniestro);
                                                        }

                                                    }
                                                    
                                                };
                                            };
                                        }
                                    }

                                };

                            }
                            res.json({
                                data: newSiniestros,
                                err: false
                            });
                        }

                    }
                }
            }

        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    infoSingle = async (req: Request, res: Response) => {
        const idSiniestro: number = parseFloat(req.params.idSiniestro);
        try {
            let siniestro = await Siniestro.findOne({
                where: {
                    idSiniestro: idSiniestro
                }
            });
            if (siniestro) {
                if (siniestro.idPoliza && siniestro.idAgencia && siniestro.idTipoSiniestro) {
                    const poliza = await Poliza.findOne({
                        where: {
                            idPoliza: siniestro.idPoliza
                        }
                    });
                    const agencia = await Agencia.findOne({
                        where: {
                            idAgencia: siniestro.idAgencia
                        }
                    });
                    const tipoSiniestro = await TipoSiniestro.findOne({
                        where: {
                            idTipoSiniestro: siniestro.idTipoSiniestro
                        }
                    });
                    if (poliza && tipoSiniestro && agencia) {
                        if (poliza.idVehiculo) {
                            const vehiculo = await Vehiculo.findOne({
                                where: {
                                    idVehiculo: poliza.idVehiculo
                                }
                            });
                            const cobertura = await Cobertura.findOne({
                                where: {
                                    idCobertura: poliza.idCobertura
                                }
                            });
                            const ubicacion = await Ubicacion.findOne({
                                where: {
                                    idUbicacion: siniestro.idUbicacion
                                }
                            });

                            if (cobertura && vehiculo && ubicacion) {
                                const newSiniestro: SiniestroInfoInterface = {
                                    hechoGenerador: tipoSiniestro.hechoGenerador,
                                    nombreCobertura: cobertura.nombreCobertura,
                                    nombrePoliza: poliza.nombrePoliza,
                                    marca: vehiculo.marca,
                                    anio: vehiculo.anio,
                                    modelo: vehiculo.modelo,
                                    versionVehiculo: vehiculo.version,
                                    motor: vehiculo.numeroDeMotor,
                                    patente: vehiculo.patente,
                                    fecha: siniestro.fecha,
                                    hora: siniestro.hora,
                                    descripcion: siniestro.descripcion,
                                    idSiniestro: siniestro.idSiniestro,
                                    expanded: false,
                                    modificable: true,
                                    localidad: ubicacion.ciudad,
                                    codigoPostal: ubicacion.codigoPostal,
                                    provincia: ubicacion.provincia,
                                    calle: ubicacion.calle,
                                    nombreAgencia: agencia.nombre
                                };
                                res.json({
                                    data: newSiniestro,
                                    err: false
                                });
                            }
                        };
                    };
                }
            }


        }


        catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    //Edit a Siniestro
    change = async (req: Request, res: Response) => {
        const idSiniestro: number = parseFloat(req.params.idSiniestro);
        let nuevoSiniestro: SiniestroInterface = req.body.siniestro
        try {
            await Siniestro.update({
                fecha: nuevoSiniestro.fecha,
                hora: nuevoSiniestro.hora,
                descripcion: nuevoSiniestro.descripcion
            }, {
                where: {
                    idSiniestro
                },
            });
            const siniestro = await Siniestro.findOne({
                where: {
                    idSiniestro
                }
            });
            return res.json({
                data: siniestro,
                err: false
            })
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }
    }

    upload = async (req: Request, res: Response) => {
        //let reader = new FileReader();
        console.log(req.files);
        let arregloImagenes: any = req.files;
        let imagenes: any = [];
        const asignar = async (unaImagen: any) => {
            let nombreImagen = unaImagen.originalname;
            let rutaImagen = unaImagen.path;
            let idSiniestro = parseFloat(req.params.idSiniestro);
            const newImage = await Imagen.create({
                nombreImagen: nombreImagen,
                rutaImagen: rutaImagen,
                idSiniestro: idSiniestro
            });
            imagenes.push(newImage);

        }
        console.log(typeof (req.files));
        try {
            arregloImagenes.forEach((imagen: any) => { asignar(imagen); });
            console.log(imagenes);
            res.json({
                data: arregloImagenes,
                err: false
            })
            //console.log(res,typeof(res));
            //reader.readAsDataURL();
            //res.send();
        } catch (err) {
            console.log(err);
            return res.json({
                err: true
            });
        }

    }

    upload2 = async (req: Request, res: Response) => {
        const files = req.file;
        console.log(files);
        if (!files) {
            return res.json({
                err: true
            });
        } else {

        }
    }
}