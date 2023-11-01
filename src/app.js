//requerimos express y lo ejecutamos para tener disponibles todos los metodo
const express = require("express");
const app = express();
const methodOverride = require('method-override');
app.use(express.urlencoded({extend: false}));
app.use(express.json())

//importamos los distintos enrutadores
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const mainRouter = require("./routes/mainRouter")
const contactoRouter = require("./routes/contactoRouter")
const sociosRouter = require("./routes/sociosRouter");
const logMiddleware = require("./middlewares/logMiddleware")
//const usersController = require("./controllers/usersControllers");
app.use(methodOverride('_method')); 

app.use(logMiddleware);

// Usando recursos estaticos
app.use(express.static("public"));
//Asignando el template engine EJS
app.set('view engine', 'ejs');
app.set('views',  __dirname +'/views');
//usando los enrutadores importados
app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", mainRouter);
app.use("/contacto", contactoRouter);
app.use("/socios", sociosRouter);


//Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("servidor corriendo en http://localhost:3030")
});

