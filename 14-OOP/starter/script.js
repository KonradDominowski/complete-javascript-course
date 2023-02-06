'use strict';

const account = {
	owner: 'jonas',
	movements: [200, -500, 400, 300],

	get latest() {
		return this.movements.at(-1)
	},

	set latest(mov) {
		this.movements.push(mov)
	}
}

console.log(account.latest);
account.latest = 150

console.log(account.latest);
console.log(account.movements);