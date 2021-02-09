let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
	Ilay: "top",
};

console.log(sumOfProperties(salaries));

function sumOfProperties(obj) {
	let sum = 0;
	for (let prop in obj) {
		if (!isNaN(obj[prop])) {
			sum += obj[prop];
		}
	}
	return sum;
}
