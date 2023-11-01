//registro de cuando se cree algo ejemplo en la ruta register
const fs = require('fs');

function logDBMiddleware(req, res, next) {
    fs.writeFileSync('logDB.txt', 'Se creo un registro en la pagina ' + req.url);
    next();
}

module.exports = logDBMiddleware