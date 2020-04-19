// Dependencias
const { bcrypt } = require('../helpers/dependencies');

// Validaciones
const {
    validationResult
} = require('express-validator');

/* 
    Modelo de usuario
*/
const Usuario = require('../models/usuario');

const RegistrarUsuario = (req, res) => {
    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(422).json({
            ok: false,
            errores: errores.array()
        });
    }

    let NewUsuario = new Usuario({
        email: req.body.email,
        clave: bcrypt.hashSync(req.body.clave, parseInt(process.env.SERVER_SALT))
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