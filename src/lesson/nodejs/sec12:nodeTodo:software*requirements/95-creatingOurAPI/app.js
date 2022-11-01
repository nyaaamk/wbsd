var express = require("express");
var app = express();
var mongoose = require("mongoose");
var setupController = require("./controllers/setupController");

var port = process.env.PORT || 3000;

var pass = "KJed2y0MUj0TPcsV";
var url = `mongodb+srv://nodetest:${pass}@nodetest.qxtwfsu.mongodb.net/?retryWrites=true&w=majority`;

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

async function connect() {
	try {
		await mongoose.connect(url);
		console.log("Connected");
	} catch (e) {
		console.log(e);
	}
}

connect();

setupController(app);

app.listen(port, async () => {
	console.log("Listening on " + port);
});
