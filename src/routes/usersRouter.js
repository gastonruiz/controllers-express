const express = require("express");
const router = express.Router();
const logDBMiddleware = require("../middlewares/logDBMiddleware");

//importo el controlador de usuarios
const usersController = require("../controllers/usersControllers")

//usando express-validator
const {body} = require('express-validator');
//validaciones en array
const validateCreateForm = [
    body('nombre').notEmpty().withMessage('Escriba un nombre'),
    body('edad').notEmpty().withMessage('Escriba una edad'),
    body('email').isEmail().withMessage('Escriba un email'),
]


//router.get, en vez de app.get para guardar las rutas en router
//proceso el pedido get con ruta /usuarios/registrarse
router.get("/register", usersController.register)

router.post("/register", validateCreateForm ,logDBMiddleware ,usersController.create)
//proceso el pedido get con ruta /usuarios/conectarse
router.get("/conectarse", usersController.login)

router.get("/list", usersController.list)

router.get("/search", usersController.search)

router.get("/edit/:idUser", usersController.edit)

router.put("/edit",function(req,res){
    res.send("fui por put")
})
router.delete("/delete/:idUser", (req, res) => {
    res.send("voy por DELETE")
})

//exporto las rutas guardadas
module.exports = router; 
