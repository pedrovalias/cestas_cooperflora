

module.exports = {
    // Função que recebe uma conexão e um callback
    getUsuario: function(connection, callback) {
        // Faz a query de SELECT no banco de dados para carregar todos os usuários
        let sql = 'SELECT * FROM USUARIO';
        connection.query(sql, callback);
    },
    setUsuario: function(usuario, connection, callback) {
        // Faz uma query para inserção do usuário no banco de dados
        let sql = 'INSERT INTO USUARIO SET ?';
        connection.query(sql, usuario, callback);   
    }
}