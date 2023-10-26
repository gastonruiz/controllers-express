 const sociosController = {

    list : (req, res)=> {
        //comparto esta lista a ejs
        let socios = [
            'Lestat',
            'Dio',
            'Jojo',
        ];
//en e segundo parametro comparto un objeto literal con el nombre de la funcion 
//para que a llame el ejs 

        res.render('sociosList', {'socios': socios});
    }
 }
 module.exports = sociosController;