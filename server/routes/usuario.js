const { express } = require('../helpers/dependencies');

const {
    RegistrarUsuario
} = require('../controllers/usuario');

const app = express();

app.post('/usuario/registrar', RegistrarUsuario);

module.exports = app;