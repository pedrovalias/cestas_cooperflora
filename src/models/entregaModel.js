const dbConnection = require("../config/dbConnection");
const connection = dbConnection();

module.exports = {
  // Função que recebe um callback
  getEntregas: function (callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os entregas
    let sql = "SELECT * FROM entrega";
    connection.query(sql, callback);
  },
  getEntrega: function (id, callback) {
    // Faz a query de SELECT no banco de dados para carregar entrega pelo id
    let sql = "SELECT * FROM entrega WHERE id = ?";
    connection.query(sql, id, callback);
  },
  insertEntrega: function (entrega, callback) {
    // Faz uma query para inserção do entrega no banco de dados
    let sql =
      "INSERT INTO entrega(data, horario_limite, composicao_cesta) VALUES (str_to_date(?, '%d/%m/%Y'), str_to_date(?, '%d/%m/%Y %H:%i:%s'), ?)";
    let params = [
      entrega.data,
      entrega.horario_limite,
      entrega.composicao_cesta,
    ];
    connection.query(sql, params, callback);
  },
  updateEntrega: function (id, entrega, callback) {
    // Faz uma query para update do entrega no banco de dados
    let sql =
      "UPDATE entrega SET data = str_to_date(?, '%d/%m/%Y'), horario_limite = str_to_date(?, '%d/%m/%Y %H:%i:%s'), composicao_cesta = ?  WHERE id = ?";
    let params = [
      entrega.data,
      entrega.horario_limite,
      entrega.composicao_cesta,
      id,
    ];
    connection.query(sql, params, callback);
  },
  deleteEntrega: function (id, callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os entregas
    let sql = "DELETE FROM entrega WHERE id = ?";
    connection.query(sql, id, callback);
  },
};
