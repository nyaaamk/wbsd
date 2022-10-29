var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://dburl");

var Schema = mongoose.Schema;

var personSchema = new Schema({
		firstName: String,
		lastName: String,
		address: String
});

var Person = mongoose.model("Person", personSchema);

var wade = Person({
		firstName: "Wade",
		lastName: "Wilson",
		address: "1234 Main St."
});

// save the user
wade.save(function(err) {
		if (err) throw err;
		console.log("person saved!");
});

var jane = Person({
		firstName: "Jane",
		lastName: "Wilson",
		address: "1234 Main St."
});

// save the user
jane.save(function(err) {
		if (err) throw err;
		console.log("person saved!");
}); 

var apiController = require("./controllers/apiController");
var htmlController = require("./controllers/htmlController");

var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public")); // middleware

app.set("view engine", "ejs");

app.use("/", function (req, res, next) {
	console.log("Request URL: " + req.url);

	// get all the users
	Person.find({}, function(err, users) {
		if (err) throw err;

		// object of all the users
		console.log(users);
	});

	next();
});

htmlController(app);

apiController(app);

app.listen(port);
