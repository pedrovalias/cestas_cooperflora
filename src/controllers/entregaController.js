const entregaModel = require("../models/entregaModel");

module.exports.listarEntregas = function (app, req, res) {
  entregaModel.getEntregas(function (err, result) {
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

module.exports.listarEntrega = function (app, req, res) {
  entregaModel.getEntrega(req.params.id, function (err, result) {
    if (!err) {
      if (result.length === 0) {
        res.status(404).send("Entrega não encontrada.");
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

module.exports.salvarEntrega = function (app, req, res) {
  let entrega = req.body;
  entregaModel.insertEntrega(entrega, function (err, result) {
    if (!err) {
      res.status(201).send();
    } else {
      if (err.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .send({
            erro: "Já existe uma entrega cadastrada para a mesma data.",
          });
      }
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.atualizarEntrega = function (app, req, res) {
  entregaModel.updateEntrega(req.params.id, req.body, function (err, result) {
    if (!err) {
      res.status(200).send();
    } else {
      if (err.code === "ER_DUP_ENTRY") {
        return res
          .status(400)
          .send({
            erro: "Já existe uma outra entrega cadastrada para a mesma data.",
          });
      }
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

module.exports.excluirEntrega = function (app, req, res) {
  entregaModel.deleteEntrega(req.params.id, function (err, result) {
    if (!err) {
      console.log("res: " + JSON.stringify(result));
      if (result.affectedRows === 0) {
        res.status(404).send("Entrega não encontrada.");
      } else {
        res.status(200).send();
      }
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};
