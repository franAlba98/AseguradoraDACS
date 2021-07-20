
//ATENCION, por temas de tiempo lo hice de esta forma, mas adelante el condig va a leer un json
// y con eso va a crear variables de entorno dentro del servidor
/*#################################### Vencimiento del token ###################################*/
//process.env.CADUCIDAD_TOKEN =  (2592000).toString(); // Un mes de vencimiento 60 *60 * 24 * 30
export const caducidad:string = (2592000).toString();
/*##############################################################################################*/
/*######################################## Clave Secreta #######################################*/
//process.env.SEED = process.env.SEED || 'acadeberiaponerunaclavesecreta';
export const SEED:string = 'acadeberiaponerunaclavesecreta';
/*##############################################################################################*/
/*###################################### Cliente de google #####################################*/
export const CLIENT_ID= "776058338606-1ha24ksimjtooivdb6b9l1eql1vevqq4.apps.googleusercontent.com";
/*##############################################################################################*/
