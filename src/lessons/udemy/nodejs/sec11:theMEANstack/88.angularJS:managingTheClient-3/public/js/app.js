angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);

function ctrlFunc() {
	this.message = "Hello";

	this.people = [
		{
			name: "John Wilson",
		},
		{
			name: "Jane Wilson",
		},
		{
			name: "Jim Wilson",
		}
	];
}
