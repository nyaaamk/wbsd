var util = require("util");

function Person() {
	this.firstName = "Wade";
	this.lastName = "Wilson";
}

Person.prototype.greet = function () {
	console.log("Hello " + this.firstName + " " + this.lastName);
};

function Policeman() {
  Person.call(this)
	this.badgeNumber = "1234";
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
