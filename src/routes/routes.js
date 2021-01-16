const dbConnection = require("../config/dbConnection");
const usuarioController = require("../controllers/usuarioController");
const loginController = require("../controllers/loginController");
const entregaController = require("../controllers/entregaController");
const { usuarioValidator, entregaValidator, validate } = require("./validator.js");

module.exports = {
  // ROTAS USUARIO
  rotaUsuarios: (app) => {
    app.get("/api/usuarios", (req, res) =>
      usuarioController.listarUsuarios(app, req, res)
    );
  },
  rotaUsuario: (app) => {
    app.get("/api/usuarios/:id", (req, res) =>
      usuarioController.listarUsuario(app, req, res)
    );
  },
  rotaSalvarUsuario: (app) => {
    app.post("/api/usuarios", usuarioValidator(), validate, (req, res) =>
      usuarioController.salvarUsuario(app, req, res)
    );
  },
  rotaAtualizarUsuario: (app) => {
    app.put("/api/usuarios/:id", usuarioValidator(), validate, (req, res) =>
      usuarioController.atualizarUsuario(app, req, res)
    );
  },
  rotaExcluirUsuario: (app) => {
    app.delete("/api/usuarios/:id", (req, res) =>
      usuarioController.excluirUsuario(app, req, res)
    );
  },

  // ROTAS ENTREGAS
  rotaEntregas: (app) => {
    app.get("/api/entregas", (req, res) => 
      entregaController.listarEntregas(app, req, res)
    );
  },
  rotaEntrega: (app) => {
    app.get("/api/entregas/:id", (req, res) =>
      entregaController.listarEntrega(app, req, res)
    );
  },
  rotaSalvarEntrega: (app) => {
    app.post("/api/entregas", entregaValidator(), validate, (req, res) =>
      entregaController.salvarEntrega(app, req, res)
    );
  },
  rotaAtualizarEntrega: (app) => {
    app.put("/api/entregas/:id", entregaValidator(), validate, (req, res) =>
      entregaController.atualizarEntrega(app, req, res)
    );
  },
  rotaExcluirEntrega: (app) => {
    app.delete("/api/entregas/:id", (req, res) =>
      entregaController.excluirEntrega(app, req, res)
    );
  },

  // ROTAS LOGIN
  rotaLogin: function (app) {
    app.get("/", function (req, res) {
      loginController.login(app, req, res);
    });
  },
};
