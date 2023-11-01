//registro de donde entra el usuario al navegar
const fs = require('fs');

function logMiddleware(req, res, next) {
    fs.writeFileSync('log.txt', 'Se ingresó en la pagina ' + req.url);
    next();
}

module.exports = logMiddleware