const express = require("express");
// Router con mayusculas
const router = express.Router(); 

//importo el controlador de products

const productsController = require("../controllers/productsController.js")

//utilizando router.get voy guardando en router las distintas rutas

//procesa el pedido get con ruta /productos/compra
router.get("/compra", productsController.compra)
//procesa el pedido get con ruta /productos/venta
router.get("/venta", productsController.venta)
//procesa el pedido get con ruta /productos/numeroProducto
//Ruta parametrizada
router.get("/:num", productsController.detalle)

//exporto router con todas las rutas "guardadas"
//que se usará en app.js

module.exports = router;