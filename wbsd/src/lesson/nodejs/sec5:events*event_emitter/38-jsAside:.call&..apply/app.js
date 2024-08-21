var obj = {
	name: "Wade Wilson",
	greet: function (param) {
		console.log(`Hello ${this.name}`);
	}
};

obj.greet();
obj.greet.call({ name: "Jane Wilson" });
obj.greet.apply({ name: "Jane Wilson" }, [param]);
