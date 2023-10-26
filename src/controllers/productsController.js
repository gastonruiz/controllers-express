
const productsController = {

    //Manejo del pedido get con ruta /productos/compra
    compra: (req, res) => {
        res.send("Compra exitosa")
    },
    // manejo pedido get con ruta /productos/venta
    venta: (req, res) => {
        res.send("Venta confirmada")
    },
    //procesa pedido get de la ruta /productos/numeroProducto
    //ruta parametrizada
    detalle: (req, res) => {
        //en req.params tenemos el parametro que definimos
        let productoId = req.params.num;
        res.send("detalle del producto " + productoId);
    },
}
    module.exports = productsController; 

