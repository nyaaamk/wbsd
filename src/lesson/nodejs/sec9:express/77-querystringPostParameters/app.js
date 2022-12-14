var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });

var jsonParser = bodyParser.json();

app.use("/assets", express.static(__dirname + "/public")); // middleware

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
	console.log("Request URL: " + req.url);
	next();
});

app.get("/", function (req, res) {
	res.render("index");
});

app.get("/person/:id", function (req, res) {
	res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
});

app.post("/person", urlencodedParser, function (req, res) {
	res.send("Thank you!");
	console.log(req.body.firstName);
	console.log(req.body.lastName);
});

app.post('/personjson', jsonParser, function(req,res) {
  res.send("Thank you for the JSON data!")
  console.log(req.body.firstName);
  console.log(req.body.lastName);
})

app.get("/api", function (req, res) {
	res.json({ firstName: "Wade", lastName: "Wilson" });
});

app.listen(port);
