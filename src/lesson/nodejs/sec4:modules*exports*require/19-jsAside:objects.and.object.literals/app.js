var person = {
	firstName: "Wade",
	lastName: "Wilson",
	greet: function () {
		console.log("Hello,  " + this.firstName + " " + this.lastName);
	}
};

person.greet();

console.log(person["firstName"]);