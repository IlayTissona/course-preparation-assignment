function isEmpty(obj) {
	let outPut = true;
	for (let prop in obj) {
		outPut = false;
	}
	return outPut;
}

let schedule = {};

console.log(isEmpty(schedule)); // changed to console.log so it will work with quokka

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));
