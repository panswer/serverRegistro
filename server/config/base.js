/* 
    Configuracion de servidor
*/

// configuracion base de servidor

// Puerto de servidor
process.env.SERVER_PORT = process.env.SERVER_PORT || 3132;

// Configuracion de bcrypt
process.env.BCRYPT_SALT = process.env.BCRYPT_SALT || 10;

// Configuracion para base de datos
// Direccion de base de datos
process.env.ADDRESS_BD = process.env.ADDRESS_DB || 'mongodb://172.17.0.2';
// Puerto de BD
process.env.PORT_BD = process.env.PORT_BD || 27017;
// Nombre de base de datos
process.env.NOMBRE_BD = process.env.NOMBRE_BD || 'testRegistro';
// Base de datos
process.env.DB = `${process.env.ADDRESS_BD}:${process.env.PORT_BD}/${process.env.NOMBRE_BD}`;