function Calculator() {
	this.read = function () {
		this.first = prompt("first number");
		this.second = prompt("second number");
	};
	this.sum = function () {
		return Number(this.first) + Number(this.second);
	};
	this.mul = function () {
		return Number(this.first) * Number(this.second);
	};
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());
