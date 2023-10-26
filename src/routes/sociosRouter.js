const express = require("express");
const router = express.Router();

const sociosController = require("../controllers/sociosController");
//renderizado con ejs 
router.get("/list", sociosController.list);

module.exports = router; 