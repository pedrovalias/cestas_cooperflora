const usuarioModel = require("../models/usuarioModel");

module.exports.listarUsuarios = function (app, req, res) {
  usuarioModel.getUsuarios(function (err, result) {
    if (!err) {
      res.status(200).send(result);
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.listarUsuario = function (app, req, res) {
  usuarioModel.getUsuario(req.params.id, function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.status(404).send("Usuário não encontrado.");
      } else {
        res.status(200).send(result);
      }
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.salvarUsuario = function (app, req, res) {
  let usuario = req.body;
  usuarioModel.insertUsuario(usuario, function (err, result) {
    if (!err) {
      res.status(201).redirect(result.insertId);
    } else {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).send("Email já cadastrado.");
      }
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.atualizarUsuario = function (app, req, res) {
  usuarioModel.updateUsuario(req.params.id, req.body, function (err, result) {
    if (!err) {
      res.status(200).redirect(req.params.id);
    } else {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).send("Email já cadastrado.");
      }
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.excluirUsuario = function (app, req, res) {
  usuarioModel.deleteUsuario(req.params.id, function (err, result) {
    if (!err) {
      console.log('res: ' + JSON.stringify(result));
      if (result.affectedRows === 0) {
        res.status(404).send("Usuário não encontrado.");
      } else {
        res.status(200).redirect("/api/usuarios");
      }
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

