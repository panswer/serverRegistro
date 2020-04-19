const { express } = require('../helpers/dependencies');

/* 
    Middelwares para rutas
*/
const {
    ValidaPassword
} = require('../middelwares/validaRegistro');
const {
    check
} = require('express-validator');

/* 
    Controllers para rutas
*/
const {
    RegistrarUsuario
} = require('../controllers/usuario');

const app = express();

// Ruta para registrar usuario
app.post('/usuario/registrar', [
    ValidaPassword,
    check('email').isEmail()
], RegistrarUsuario);

module.exports = app;