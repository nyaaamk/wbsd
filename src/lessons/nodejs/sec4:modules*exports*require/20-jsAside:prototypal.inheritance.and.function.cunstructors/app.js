function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.greet = function () {
	console.log("Hello, " + " " + this.firstName + this.lastName);
};

var wade = new Person("Wade", "Wilson");
wade.greet();

var jane = new Person("Jane", "Wilson");
jane.greet();

console.log(wade.__proto__);
console.log(jane.__proto__);
console.log(wade.__proto__ === jane.__proto__);
