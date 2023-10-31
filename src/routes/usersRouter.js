const express = require("express");
const router = express.Router();

//importo el controlador de usuarios
const usersController = require("../controllers/usersControllers")


//router.get, en vez de app.get para guardar las rutas en router
//proceso el pedido get con ruta /usuarios/registrarse
router.get("/register", usersController.register)

router.post("/register", usersController.create)
//proceso el pedido get con ruta /usuarios/conectarse
router.get("/conectarse", usersController.login)

router.get("/list", usersController.list)

router.get("/search", usersController.search)


//exporto las rutas guardadas
module.exports = router; 
