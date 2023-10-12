//requerimos path para poder enviar los archivos html
const path = require("path");

//creamos el objeto literal con los metodos a exportar
const mainController = {
    //manejos del pedido get con ruta /
    index: (req, res)=> {
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }
}

//exporto el objeto literal con los metodos, que se usaran
// en el enrutador por defecto

module.exports = mainController;