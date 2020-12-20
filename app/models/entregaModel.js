
module.exports = {
    // Função que recebe uma conexão e um callback
    getEntrega: function(connection, callback) {
        // Faz a query de SELECT no banco de dados para carregar todas as entregas
        let sql = 'SELECT * FROM ENTREGAS';
        connection.query(sql, callback);
    },
    setEntrega: function(entrega, connection, callback) {
        // Faz uma query para inserção do usuário no banco de dados
        let sql = 'INSERT INTO ENTREGAS SET ?';
        connection.query(sql, entrega, callback);   
    }
}