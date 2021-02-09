function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function () {
		this.value += Number(prompt(`current value:${this.value}, add number`));
	};
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert("sum = " + accumulator.value); // shows the sum of these values
