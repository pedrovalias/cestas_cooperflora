var mysql = require('mysql');

module.exports = function() {
    return connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'cooperflora_db',
    dateStrings: true
  });
}