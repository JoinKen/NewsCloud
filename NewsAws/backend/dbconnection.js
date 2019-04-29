var mysql = require("mysql");

const config = {
  host: "myinstance.concfx2kmypa.us-west-2.rds.amazonaws.com",
  user: "root",
  port: "3306",
  password: "12345678",
  database: 'news'
};

const connection = mysql.createConnection(config);
console.log("IT1006", connection);

module.exports = connection;