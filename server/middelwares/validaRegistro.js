const ValidaPassword = (req, res, next) => {
    let clave;
    if (req.body.clave) {
        clave = req.body.clave;
    } else {
        return res.status(412).json({
            ok: false,
            err: {
                message: 'clave es requerida'
            }
        });
    }


    next();
}

module.exports = {
    ValidaPassword
}