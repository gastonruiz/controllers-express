//creo el objeto literal a exportar
const usersController = {

    //manejo del pedido get con ruta /usuarios/conectarse
    login: (req, res) => {
        res.send("Formulario de conexión")
    },

    //manejo del pedido get con ruta /usuarios/registrarse
    register: (req, res) => {
        res.send("Formulario de creacòn de usuario")
    }

}

//exporto el objeto literal con los distintos metodos
//que se usaran en el enrutador

module.exports = usersController;