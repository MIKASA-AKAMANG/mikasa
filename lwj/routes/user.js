var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"lwjssb1013",
    database:"lwj"
})


connection.connect();
module.exports = connection;