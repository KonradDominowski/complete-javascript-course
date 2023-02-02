'use strict';

function Car(make, speed) {
	this.make = make
	this.speed = speed
}

Car.prototype.accelerate = function () {
	this.speed += 10
	console.log(this.speed);
}

Car.prototype.brake = function () {
	this.speed -= 5
	console.log(this.speed);
}

let car1 = new Car('BMW', 120)

console.log(car1);
car1.accelerate()
car1.accelerate()
car1.brake()
car1.brake()
car1.accelerate()
car1.brake()

let car2 = new Car('Mercedes', 95)
console.log(car2);
car2.accelerate()
car2.accelerate()
car2.brake()
car2.brake()
car2.accelerate()
car2.brake()