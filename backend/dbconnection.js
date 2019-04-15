var mysql = require("mysql");

const config = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: 'news'
};

if (
  process.env.INSTANCE_CONNECTION_NAME &&
  process.env.NODE_ENV === "production"
) {
  config.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}
const connection = mysql.createConnection(config);
console.log("IT1006", connection);

module.exports = connection;