const express = require("express");
const router = express.Router();

const contactoController = require("../controllers/contactoController")

router.get("/contacto", contactoController.detalle) ;




module.exports = router;

