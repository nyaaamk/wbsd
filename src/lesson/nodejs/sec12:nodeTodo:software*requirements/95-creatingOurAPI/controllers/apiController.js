var Todos = require("../models/toDoModel");
var bodyParser = require("body-parser");

module.exports = function (app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get("/api/todos/:username", function (req, res) {
		Todos.find({ username: req.params.username }, function (err, todos) {
			if (err) throw err;

			res.send(todos);
		});
	});

	app.get("/api/todos/:id", function (req, res) {
		Todos.findById({ _id: req.params.id }, function (err, todo) {
			if (err) throw err;

			res.send(todo);
		});
	});
};
