var express = require("express");
var app = express();
var mongoose = require("mongoose");
var setupController = require("./controllers/setupController");

var port = process.env.PORT || 3000;

var url = "mongodb+srv://nyaaamk:Nyamk2929@cluster0.uvef8au.mongodb.net/?retryWrites=true&w=majority";

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
