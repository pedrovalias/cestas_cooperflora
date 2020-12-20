const dbConnection = require('../config/dbConnection');
const { check, validationResult } = require('express-validator'); 
const controllerUsuario = require('../controllers/usuarioController');
const controllerLogin = require('../controllers/loginController');
const controllerEntregas = require('../controllers/entregasController');

module.exports = {

    // ROTAS USUARIO
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

    // ROTAS ENTREGAS
    rotaCadastroEntregas: function (app) {
        app.get('/entregasCadastro',function(req, res) {
            res.render('entregasCadastro', {entrega: {}, erros: {}});
        });
    },
    rotaEntregas: function (app) {
        app.get('/entregas', function (req, res) {
            controllerEntregas.entregasListar(app, req, res);
        });
    },
    rotaSalvarEntrega: function (app) {

        app.post('/entrega/salvar', [
            check('titulo').isLength({min: 1}).withMessage('Titulo é obrigatório'),
            check('conteudoCesta').isLength({min: 1}).withMessage("Conteúdo da cesta é obrigatório"),                        
        ], function (req, res) {
            // Cria uma variável para pegar os erros da requisção
            const errors = validationResult(req);
            controllerEntregas.entregasSalvar(app, req, res, errors);
        });
    },

    // ROTAS LOGIN
    rotaLogin: function (app) {
        app.get('/login', function (req, res) {
            controllerLogin.login(app, req, res);
        });
    },

}










