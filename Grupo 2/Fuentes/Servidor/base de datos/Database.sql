CREATE TABLE "Vehiculo" (
    "idVehiculo" SERIAL NOT NULL,
    "marca" VARCHAR(50),
    "anio" INT,
    "modelo" VARCHAR(50),
    "version" VARCHAR(200),
    "numeroDeChasis" VARCHAR(100),
    "numeroDeMotor" VARCHAR(100),
    "tipoDeUso" VARCHAR(200),
    "patente" VARCHAR(30),

    PRIMARY KEY ("idVehiculo")

);

CREATE TABLE "Agencia" (
    "idAgencia" SERIAL NOT NULL,
    "nombre" VARCHAR (200),
    "alturaAgencia" INT,
    "calleAgencia" VARCHAR(200),
    "ciudadAgencia" VARCHAR (200),
    "provinciaAgencia" VARCHAR (200),
    "paisAgencia" VARCHAR (200),
    "codigoPostalAgencia" INT,
    "latitudAgencia" REAL,
    "longitudAgencia" REAL,

    PRIMARY KEY ("idAgencia")
);

CREATE TABLE "Usuario" (
    "idUsuario" SERIAL NOT NULL UNIQUE,
    "nombreUsuario" VARCHAR(100),
    "hash" VARCHAR,
    "salt" VARCHAR,
    "email" VARCHAR,

    PRIMARY KEY ("idUsuario")
);

CREATE TABLE "Asegurado" (
    "idAsegurado" SERIAL NOT NULL,
    "nombre" VARCHAR(100),
    "apellido" VARCHAR(100),
    "dni" INT,
    "telefono" INT,
    "correo" VARCHAR(200),
    "domicilio" VARCHAR(200),
    "idUsuario" INT NOT NULL,

    PRIMARY KEY ("idAsegurado"),
    FOREIGN KEY ("idUsuario") REFERENCES "Usuario"
);

CREATE TABLE "TipoSiniestro" (
    "idTipoSiniestro" SERIAL NOT NULL,
    "hechoGenerador" VARCHAR(200),

    PRIMARY KEY ("idTipoSiniestro")
);

CREATE TABLE "Cobertura" (
    "idCobertura" SERIAL NOT NULL,
    "tarifaActual" REAL,
    "nombreCobertura" VARCHAR(200),

    PRIMARY KEY ("idCobertura")
);


CREATE TABLE "Poliza" (
    "idPoliza" SERIAL NOT NULL,
    "fechaDeContratacion" DATE,
    "fechaDeRenovacion" DATE,
    "tarifa" REAL,
    "nombrePoliza" VARCHAR(300),
    "idVehiculo" INT NOT NULL,
    "idCobertura" INT NOT NULL,
    "idAsegurado" INT NOT NULL,

    PRIMARY KEY ("idPoliza"),
    FOREIGN KEY ("idVehiculo") REFERENCES "Vehiculo",
    FOREIGN KEY ("idCobertura") REFERENCES "Cobertura",
    FOREIGN KEY ("idAsegurado") REFERENCES "Asegurado"
);

CREATE TABLE "Ubicacion" (
    "idUbicacion" SERIAL NOT NULL,
    "latitud" REAL,
    "longitud" REAL,
    "altura" INT,
    "ciudad" VARCHAR(200),
    "provincia" VARCHAR(200),
    "pais" VARCHAR(200),
    "codigoPostal" INT,
    "calle" VARCHAR,

    PRIMARY KEY ("idUbicacion")
);

CREATE TABLE "Siniestro" (
    "idSiniestro" SERIAL NOT NULL,
    "fecha" DATE,
    "hora" TIME,
    "descripcion" TEXT,
    "idUbicacion" INT NOT NULL,
    "idPoliza" INT NOT NULL,
    "idTipoSiniestro" INT NOT NULL,
    "idAgencia" INT NOT NULL,

    PRIMARY KEY ("idSiniestro"),
    FOREIGN KEY ("idUbicacion") REFERENCES "Ubicacion",
    FOREIGN KEY ("idPoliza") REFERENCES "Poliza",
    FOREIGN KEY ("idTipoSiniestro") REFERENCES "TipoSiniestro",
    FOREIGN KEY ("idAgencia") REFERENCES "Agencia"
);

CREATE TABLE "EstadoSiniestro" (
    "idEstadoSiniestro" SERIAL NOT NULL,
     "idSiniestro" INT NOT NULL,
    "nombreEstado" VARCHAR(100),

    PRIMARY KEY ("idEstadoSiniestro","idSiniestro"),
    FOREIGN KEY ("idSiniestro") REFERENCES "Siniestro"
);

CREATE TABLE "Incidente" (
    "idIncidente" SERIAL NOT NULL,
    "descripcionIncidente" VARCHAR(200),
    "idTipoSiniestro" INT NOT NULL,

    PRIMARY KEY ("idIncidente"),
    FOREIGN KEY ("idTipoSiniestro") REFERENCES "TipoSiniestro"
);

CREATE TABLE "DetalleSiniestro" (
    "idDetalleSiniestro" SERIAL NOT NULL,
    "idSiniestro" INT NOT NULL,
    "confirmacionDetalleSiniestro" BOOLEAN,
    "idIncidente" INT NOT NULL,

    PRIMARY KEY ("idDetalleSiniestro", "idSiniestro"),
    FOREIGN KEY ("idSiniestro") REFERENCES "Siniestro",
    FOREIGN KEY ("idIncidente") REFERENCES "Incidente"
);

CREATE TABLE "ImagenSiniestro" (
    "idImagen" SERIAL NOT NULL,
    "idSiniestro" INT NOT NULL,
    "rutaImagen" VARCHAR,
    "nombreImagen" VARCHAR(200),

    PRIMARY KEY ("idImagen", "idSiniestro"),
    FOREIGN KEY ("idSiniestro") REFERENCES "Siniestro"
);

CREATE TABLE "TipoSiniestroCobertura" (
    "idTipoSiniestro" SERIAL NOT NULL,
    "idCobertura" SERIAL NOT NULL,

    PRIMARY KEY ("idTipoSiniestro","idCobertura"),
    FOREIGN KEY ("idTipoSiniestro") REFERENCES "TipoSiniestro",
    FOREIGN KEY ("idCobertura") REFERENCES "Cobertura"
);

CREATE TABLE "Mensaje" (
    "idMensaje" SERIAL NOT NULL,
    "cuerpo" TEXT,
    "idUsuarioReceptor" INT NOT NULL,
    "idUsuarioEmisor" INT NOT NULL,
    "fecha" TIMESTAMP,
    "idSiniestro" INT,

    PRIMARY KEY ("idMensaje"),
    FOREIGN KEY ("idUsuarioReceptor") REFERENCES "Usuario",
    FOREIGN KEY ("idUsuarioEmisor") REFERENCES "Usuario",
    FOREIGN KEY ("idSiniestro") REFERENCES "Siniestro"
);