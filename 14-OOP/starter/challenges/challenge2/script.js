'use strict'

class Car {
	constructor(make, speed) {
		this.make = make
		this.speed = speed
	}

	accelerate() {
		this.speed += 10
		console.log(`Speed is now ${this.speed}`);
	}

	brake() {
		this.speed -= 5
		console.log(`Speed is now ${this.speed}`);
	}

	get speedUS() {
		return this.speed / 1.6
	}

	set speedUS(speed) {
		this.speed = speed * 1.6
	}
}

let volvo = new Car('Volvo', 100)

volvo.speedUS = 100
console.log(volvo);
volvo.accelerate()
console.log(`${volvo.speedUS} mph`);
volvo.brake()
console.log(`${volvo.speedUS} mph`);
volvo.brake()
console.log(`${volvo.speedUS} mph`);
volvo.accelerate()
console.log(`${volvo.speedUS} mph`);
volvo.accelerate()
console.log(`${volvo.speedUS} mph`);
volvo.brake()
