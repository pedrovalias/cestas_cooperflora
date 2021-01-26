const dbConnection = require("../config/dbConnection");
const connection = dbConnection();

module.exports = {
  // Função que recebe um callback
  getPedidosEntrega: function (idEntrega, callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os pedidos
    let sql =
      "SELECT * FROM pedido, usuario WHERE id_entrega = ? AND usuario.id = pedido.id_usuario";
    connection.query(sql, idEntrega, callback);
  },
  insertPedido: function (pedido, callback) {
    // Faz uma query para inserção do pedido no banco de dados
    let sql = "INSERT INTO pedido(id_usuario, id_entrega) VALUES (?, ?)";
    connection.query(
      sql,
      [pedido.id_usuario, parseInt(pedido.id_entrega)],
      callback
    );
  },
  deletePedido: function (id_entrega, id_usuario, callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os entregas
    let sql = "DELETE FROM pedido WHERE id_entrega = ? AND id_usuario = ?";
    connection.query(
      sql,
      [parseInt(id_entrega), parseInt(id_usuario)],
      callback
    );
  },
};
