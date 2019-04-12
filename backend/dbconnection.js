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

module.exports = connection;







// if (port === 4205) {
//   var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123456",
//     database: "news",
//     options: {
//       encrypt: true
//     },
//     insecureAuth: true
//   });
// } else {}
// connection.connect(function (err) {
//   if (err) throw console.log(`${err}`);
// });