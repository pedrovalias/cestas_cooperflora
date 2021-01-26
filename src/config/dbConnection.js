var mysql = require("mysql");

module.exports = function () {
  return (connection = mysql.createPool({
    host: "db4free.net",
    port: "3306",
    user: "cestas_admin",
    password: "cestas@123",
    database: "cestas_db",
    dateStrings: true,
  }));
};
