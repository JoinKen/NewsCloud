const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


if (
  process.env.INSTANCE_CONNECTION_NAME &&
  process.env.NODE_ENV === "production"
) {
  app.use(cors({ origin: "https://nodejs-react-demo.appspot.com" }));
  console.info("IT1006", "https://nodejs-react-demo.appspot.com");
}
else {
  app.use(cors({ origin: "https://localhost:3000" }));
  console.info("IT1006", "front end port 3000");
}



app.use("/", require("./routes/api"));

app.listen(process.env.port || 8080, function () {
  console.info("Nhi", "back end server port 8080");
});