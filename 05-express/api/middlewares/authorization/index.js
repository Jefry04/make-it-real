const response = require ("./../../lib/response");

const authorization = (req, res, next)=> {
    req.username === req.params.username ?
        next()
        :
        res.json(response(false, undefined, "No esta autorizado para realizar esta accion"));
};

module.exports = authorization;