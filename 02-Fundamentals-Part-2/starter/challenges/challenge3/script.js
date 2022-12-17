'use strict';

let Mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    },
};

let John = {
    firstName: 'John',
    lastName: 'Smith',
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2
        return this.BMI
    },
};

Mark.calcBMI()
console.log(Mark.BMI);
console.log(Mark.fullName);
John.calcBMI()
console.log(John.BMI);
console.log(John.fullName);

console.log(`${Mark.fullName} has ${(Mark.BMI > John.BMI) ? 'higher' : 'lower'} BMI than John.`);