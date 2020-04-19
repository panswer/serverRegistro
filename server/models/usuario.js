const { mongoose, uniqueValidator } = require('../helpers/dependencies');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, 'Usuario es requerido']
    },
    clave: {
        type: String,
        required: [true, 'Clave es requerida']
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

mongoose.plugin(uniqueValidator);

module.exports = mongoose.model('usuario', UsuarioSchema);