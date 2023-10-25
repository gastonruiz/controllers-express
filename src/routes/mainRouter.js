const express = require("express");
const router = express.Router();

//importo el controlador de rutas por defecto

const mainController = require("../controllers/mainController")

//usando router get en vez de app.get "se guarda" en router las rutas
//procesa pedido get con ruta /

router.get("/", mainController.index);

module.exports = router;

