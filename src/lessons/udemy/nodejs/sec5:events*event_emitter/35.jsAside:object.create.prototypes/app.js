var person = {
	firstName: "",
	lastName: "",
	greet: function () {
		return this.firstName + " " + this.lastName;
	}
};

var wade = Object.create(person);
wade.firstName = "Wade";
wade.lastName = "Wilson";

var jane = Object.create(person);
jane.firstName = "Jane";
jane.lastName = "Wilson";

console.log(wade.greet());
console.log(jane.greet());
