# AseguradoraDACS - Servidor

_Esta es la pequeña documentacion para hacer funcionar la API-REST_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_
_En primer lugar necesitamos instalar los siguientes programas:_

* [nodeJS v14.15.0 (Recomendada)](https://nodejs.org/dist/v14.15.0/node-v14.15.0-x64.msi)
* [postgreSQL v12.4](https://www.enterprisedb.com/postgresql-tutorial-resources-training?cid=48)
_Ambas instalaciones son exclusivas de windows x64 bits_
_Una vez instalado ambos programas, se requiere acceder a una consola para instalar typeScript con el siguiente comando:_

```
npm install -g typescript
```

### Instalación 🔧

_La instalacion del servidor es muy sencilla, solo hay que instalar las liberias de nodeJS con el siguiente comando_

```
npm install
```
_el comando a continuacion es para instalar las dependencias de desarrollo, como nodemon y los types. No es necesario para pruebas o para usarlo en distribucion_

```
npm install -D
```

_Una vez instaladas las liberias se deberia configurar la base de datos, por favor leer el [README-BD.md](https://gitlab.com/JuanKitu/aseguradoradacs/-/tree/master/Grupo%202/Fuentes/Servidor/src/database/README.md)_

_Por ultimo en el archivo [index.ts](https://gitlab.com/JuanKitu/aseguradoradacs/-/blob/master/Grupo%202/Fuentes/Servidor/src/index.ts) en metodo **server.start()** en el segundo argumento debe ser borrado para usar como IP del server el **localhost** o agregar como string el IP deseado_
## Ejecutando el proyecto ⚡

_Para iniciar el proyecto solamente es necesario el siguiente comando:_
```
npm start
```
_Si el programa no incia porque no existe la carpeta dist/ es porque el typeScript no compilo el src/, para solucionar eso solo es necesario usar el siguiente comando_
```
tsc
```
_Si quiere correr el programa con el nodemon (la unica diferencia es que si detecta algun cambio va a volver a ejecutar el servidor) debe usar el siguiente comando:_
```
npm run dev
```
## Construido con 🛠️

* [nodeJS](https://nodejs.org/es/docs/) - El entorno de ejecucion para JavaSript.
* [typeScript](https://www.typescriptlang.org/docs) - La extencion de JavaScript para brindarle un tipado fuerte.
* [postgreSQL](https://www.postgresql.org/docs/) - El motor de la base de datos usado.
* [express](https://expressjs.com/es/starter/installing.html) - El framework web usado.
* [morgan](https://github.com/expressjs/morgan#readme) - HTTP request logger middleware para node.js usado.
* [sequelize](https://sequelize.org/master/) - Es el ORM usado para postgreSQL.
* [cli-color](https://github.com/medikoo/cli-color#readme) - Usado para dar formato y colores a la consola del servidor.
* [node-postgres](https://rometools.github.io/rome/) - es el cliente PostgreSQL sin bloqueo para Node.js.
* [pg-hstore](https://rometools.github.io/rome/) - Un paquete de node para serializar y deserializar JSON al formato hstore.

## Autores ✒️

* **Juan Manuel Santa Cruz** - [JuanKitu](https://gitlab.com/JuanKitu)
* **Francisco Alba** - [fralba98](https://gitlab.com/fralba98)
