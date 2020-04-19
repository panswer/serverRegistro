const { express } = require('../helpers/dependencies');

const app = express();

// Registrar usuario
app.use(require('./usuario'));
// iniciar sesion
app.use(require('./login'));

module.exports = app;