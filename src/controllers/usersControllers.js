//creo el objeto literal a exportar
const usersController = {

    //manejo del pedido get con ruta /usuarios/conectarse
    login: (req, res) => {
        res.render("login")
    },

    //manejo del pedido get con ruta /usuarios/registrarse
    //register: (req, res) => {
      //  res.send("Formulario de creacòn de usuario")
    //}
    register: (req, res) => {
        res.render("register")
    },

    list: (req, res) => {
        let users = [
            {id: 1, name: 'Manji'},
            {id: 2, name: 'Mary'},
            {id: 3, name: 'Jojo'},
            {id: 4, name: 'Sean'},
            {id: 5, name: 'Joline'},
            {id: 6, name: 'Xeena'}
        ];

        //Agrego la variable users a la vista como objeto literal 
        //en el metodo render, asignandole un nombre a la variable
        res.render('userList', {'users': users});
    },

    search: (req, res) => {

        let busquedaRealizada = req.query.search;
        
        let users = [
            {id: 1, name: 'Manji'},
            {id: 2, name: 'Mary'},
            {id: 3, name: 'Jojo'},
            {id: 4, name: 'Sean'},
            {id: 5, name: 'Joline'},
            {id: 6, name: 'Xeena'}
        ];
        let usersResults = [];

        for (let i = 0 ; 0 < users.length ; i ++) {
            if (users[i].name.includes(busquedaRealizada)) {
                usersResults.push(users[i]);
             }
        }

        res.render('userResults', {'usersResults': usersResults});
    },

    create: (req, res) => {

        //res.send("mira si envia")
        // console.log('form', req.body)


        let usuario = {
           nombre: req.body.nombre,
            edad: req.body.edad,
            email:req.body.email,
        }
       let usuarioJSON = JSON.stringify(usuario);
       res.send(usuarioJSON)
        // res.redirect("/usuarios/list");
    }

}

//exporto el objeto literal con los distintos metodos
//que se usaran en el enrutador

module.exports = usersController;