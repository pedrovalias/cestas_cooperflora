var mysql = require('mysql');

module.exports = function() {
    return connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'cooperflora_db',
    dateStrings: true
  });
}