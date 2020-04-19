const { bcrypt } = require('../helpers/dependencies');

const Usuario = require('../models/usuario');

const RegistrarUsuario = (req, res) => {
    let NewUsuario = new Usuario({
        email: req.body.email,
        clave: bcrypt.hashSync(req.body.clave, process.env.SERVER_SALT)
    });

    NewUsuario.save((err, usuarioSave) => {
        if (err) {
            return res.status(412).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            message: 'El usuario se ah registrado exitosamente'
        });
    });
}

module.exports = {
    RegistrarUsuario
}