//requerimos express y lo ejecutamos para tener disponibles todos los metodo
const express = require("express");
const app = express();

//importamos los distintos enrutadores
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const mainRouter = require("./routes/mainRouter")
const contactoRouter = require("./routes/contactoRouter")

// Usando recursos estaticos
app.use(express.static("public"));

//usando los enrutadores importados
app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", mainRouter);
app.use("/contacto", contactoRouter);

//Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("servidor corriendo en http://localhost:3030")
});

