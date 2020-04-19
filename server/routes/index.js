const { express } = require('../helpers/dependencies');

const app = express();

// Ruta para usuarios
app.use(require('./usuario'));
// iniciar sesion
app.use(require('./login'));

module.exports = app;