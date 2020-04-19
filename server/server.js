const { express, colors, cors } = require('./helpers/dependencies');

require('./config/base');

// Server
const app = express();

// seguridad de cors
app.use(cors());
// uso de JSON
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use(require('./routes/index'));

// Inicio de servidor
app.listen(process.env.SERVER_PORT, err => {
    if (err) {
        console.log(`${'ERROR'.red}: El server no se a podido iniciar en puerto ${process.env.SERVER_PORT.red}`);
        console.log(err);
    } else {
        console.log(`${'SUCCESS'.green}: Server iniciado en puerto ${process.env.SERVER_PORT.green}`);
    }
});