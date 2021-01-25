const dbConnection = require("../config/dbConnection");
const connection = dbConnection();

module.exports = {
  // Função que recebe um callback
  getUsuarios: function (callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os usuários
    let sql = "SELECT * FROM usuario";
    connection.query(sql, callback);
  },
  getUsuariosByEmail: function (email, callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os usuários
    let sql = "SELECT * FROM usuario WHERE email = ?";
    connection.query(sql, email, callback);
  },
  getUsuario: function (id, callback) {
    // Faz a query de SELECT no banco de dados para carregar usuário pelo id
    let sql = "SELECT * FROM usuario WHERE id = ?";
    connection.query(sql, id, callback);
  },
  insertUsuario: function (usuario, callback) {
    // Faz uma query para inserção do usuário no banco de dados
    let sql = "INSERT INTO usuario SET ?";
    connection.query(sql, usuario, callback);
  },
  updateUsuario: function (id, usuario, callback) {
    // Faz uma query para update do usuário no banco de dados
    let sql =
      "UPDATE usuario SET nome = ?, id_autenticacao = ?, email = ?, telefone = ?, perfil = ?  WHERE id = ?";
    let params = [
      usuario.nome,
      usuario.id_autenticacao,
      usuario.email,
      usuario.telefone,
      usuario.perfil,
      id,
    ];
    connection.query(sql, params, callback);
  },
  deleteUsuario: function (id, callback) {
    // Faz a query de SELECT no banco de dados para carregar todos os usuários
    let sql = "DELETE FROM usuario WHERE id = ?";
    connection.query(sql, id, callback);
  },
  emailExiste: (email, callback) => {
    let sql = "SELECT * FROM usuario WHERE email = ?";
    connection.query(sql, email, callback);
  },
};
