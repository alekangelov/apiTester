var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
  res.json({ version: 1 });
});
app.post("/postage", function(req, res, next) {
  res.send(req.body);
});

app.listen(5050, function() {
  console.log("enabled on port 5050");
});
