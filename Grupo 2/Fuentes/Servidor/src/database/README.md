# AseguradoraDACS - Base de Datos

_Esta es la pequeña documentacion sobre la implementacion de la BD por medio del ORM Sequelize_

## Configurando

_Toda esta configuracion es sobre el archivo [database.ts](https://gitlab.com/JuanKitu/aseguradoradacs/-/blob/master/Grupo%202/Fuentes/Servidor/src/database/database.ts)_
_donde:_
```
'AseguradoraDB'
```
_Es el nombre de la base de datos cargada en postgres_

```
'postgres'
```
_Es el nombre del usuario, en este caso dejamos el usuario que da por defecto el motor_

```
investigacion
```
_Es la contraseña para acceder al servidor de base de datos_

## Haciendo restore
_Si solo se quiere crear las tablas de la BD sin informacion de prueba acceda al archivo [Database.sql](https://gitlab.com/JuanKitu/aseguradoradacs/-/blob/master/Grupo%202/Fuentes/Servidor/base%20de%20datos/Database.sql)_

_Si desea crear tablas con algunos datos prueba, use los backups de ejemplo que se encuentra en la carpeta [backups](https://gitlab.com/JuanKitu/aseguradoradacs/-/tree/Entrega-20201030/Grupo%202/Fuentes/Servidor/src/database/backups) hay tanto del formato **.sql** como el formato **.backup**_


