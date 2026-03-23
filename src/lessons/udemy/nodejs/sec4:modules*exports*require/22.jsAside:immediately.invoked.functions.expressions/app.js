var firstName = "Jane";

(function (lastName) {
	var firstName = "Wade";
	console.log(firstName);
  console.log(lastName);
}("Wilson"));

console.log(firstName);
