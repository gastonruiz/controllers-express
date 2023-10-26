const express = require("express");
const router = express.Router();

const contactoController = require("../controllers/contactoController")

router.get("/info", contactoController.info) ;




module.exports = router;

