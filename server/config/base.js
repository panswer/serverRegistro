/* 
    Configuracion de servidor
*/

// configuracion base de servidor

// Puerto de servidor
process.env.SERVER_PORT = process.env.SERVER_PORT || 3000;

// Configuracion de bcrypt
process.env.BCRYPT_SALT = process.env.BCRYPT_SALT || 10;