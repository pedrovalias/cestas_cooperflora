const dbConnection = require('../config/dbConnection');
const entregaModel = require('../models/entregaModel');

module.exports.entregasListar = function (app, res, res) {
    const connection = dbConnection();

    entregaModel.getEntrega(connection, function(err, result) {
        if (!err) {
            console.log(result);
            res.render('entregas', { entregas: result });
        }else {
            let pagina = '<h1>Problemas de conexão com o banco de dados</h1>';
            pagina = pagina+"<h2>"+err+'</h2>';
            res.send(pagina);
        }
    });
}

module.exports.entregasSalvar = function (app, req, res, errors){
    let entrega = req.body;

    if(!errors.isEmpty()) {
        let erros = errors.array();
        res.render('entregasCadastro', {erros: erros, entregas: entrega});
        return;
    }
    
    const connection = dbConnection();
    entregaModel.setEntrega(entrega, connection, function (err, results) {
        res.redirect('/entregas');
    });
}