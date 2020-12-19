const dbConnection = require('../config/dbConnection');
const usuarioModel = require('../models/usuarioModel');

module.exports.usuarioListar = function (app, res, res) {
    const connection = dbConnection();

    usuarioModel.getUsuario(connection, function(err, result) {
        if (!err) {
            console.log(result);
            res.render('consumidores', { usuario: result });
        }else {
            let pagina = '<h1>Problemas de conexão com o banco de dados</h1>';
            pagina = pagina+"<h2>"+err+'</h2>';
            res.send(pagina);
        }
    });
}

module.exports.usuarioSalvar = function (app, req, res, errors){
    let usuario = req.body;

    if(!errors.isEmpty()) {
        let erros = errors.array();
        res.render('usuarioCadastro', {erros: erros, usuario: usuario});
        return;
    }
    
    const connection = dbConnection();
    usuarioModel.setUsuario(usuario, connection, function (err, results) {
        res.redirect('/consumidores');
    });
}