"user strict";
var mysql = require("mysql");
port = process.env.PORT || 4205;

if (port === 4205) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "news",
    options: {
      encrypt: true
    },
    insecureAuth: true
  });
} else {
}
connection.connect(function(err) {
  if (err) throw err;
});
module.exports = connection;
