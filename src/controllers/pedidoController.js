const pedidoModel = require("../models/pedidoModel");
const { insertUsuario } = require("../models/usuarioModel");

module.exports.listarPedidosEntrega = function (app, req, res) {
  getPedidosEntrega(req, res, function (pedidos) {
    res.status(200).send(pedidos);
  });
};

module.exports.salvarPedido = function (app, req, res) {
  let pedido = req.body;
  pedido.id_entrega = req.params.id;
  validarEInserirPedido(pedido, req, res);
};

module.exports.excluirPedido = function (app, req, res) {
  let id_entrega = req.params.id;
  let id_usuario = req.query.id_usuario;
  pedidoModel.deletePedido(id_entrega, id_usuario, function (err, result) {
    if (!err) {
      if (result.affectedRows === 0) {
        res.status(404).send("Pedido não encontrado.");
      } else {
        res.status(200).redirect(`/api/entregas/${id_entrega}`);
      }
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

const validarEInserirPedido = function (novoPedido, req, res) {
  getPedidosEntrega(req, res, function (pedidos) {
    let pedidoValido = true;
    pedidos.forEach((pedido) => {
      if (
        pedido.id_entrega == novoPedido.id_entrega &&
        pedido.id_usuario == novoPedido.id_usuario
      ) {
        pedidoValido = false;
      }
    });
    if (!pedidoValido) {
      return res
        .status(400)
        .send("Já existe um pedido criado para este usuário.");
    }

    inserirPedido(novoPedido, req, res);
  });
};

const inserirPedido = function (pedido, req, res) {
  pedidoModel.insertPedido(pedido, function (err, result) {
    if (!err) {
      res.status(201).redirect(`/api/entregas/${req.params.id}`);
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};

const getPedidosEntrega = function (req, res, callback) {
  pedidoModel.getPedidosEntrega(req.params.id, function (err, result) {
    if (!err) {
      let pedidos = JSON.parse(JSON.stringify(result));
      return callback(pedidos);
    } else {
      res.status(500).send({
        erro: "Problemas de conexão com o banco de dados",
        mensagem: err,
      });
    }
  });
};
