let calculator = {
	read: function () {
		this.first = prompt("first number");
		this.second = prompt("second number");
	},
	sum: function () {
		return Number(this.first) + Number(this.second);
	},
	mul: function () {
		return Number(this.first) * Number(this.second);
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
