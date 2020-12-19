const dbConnection = require('../config/dbConnection');
const { check, validationResult } = require('express-validator'); 
const controllerUsuario = require('../controllers/usuarioController');


module.exports = {

    rotaCadastroUsuario: function (app) {
        app.get('/',function(req, res) {
            res.render('usuarioCadastro', {usuario: {}, erros: {}});
        });
    },
    rotaUsuarios: function (app) {
        app.get('/consumidores', function (req, res) {
            controllerUsuario.usuarioListar(app, req, res);
        });
    },
    rotaSalvarUsuario: function (app) {

        app.post('/usuario/salvar', [
            check('nome').isLength({min: 1}).withMessage('Nome é obrigatório'),
            check('email').isLength({min: 1}).withMessage("Email é obrigatório"),                        
        ], function (req, res) {
            // Cria uma variável para pegar os erros da requisção
            const errors = validationResult(req);
            controllerUsuario.usuarioSalvar(app, req, res, errors);
        });
    },
}










