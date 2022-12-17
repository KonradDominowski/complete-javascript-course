'use strict';

const calcTip = bill => 50 <= bill && bill <= 300 ? 0.15 : 0.20

const bills = new Array(125, 555, 44)
let tips = new Array

tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))

console.log(tips);

let totals = new Array

totals.push(bills[0] + bills[0] * tips[0])
totals.push(bills[1] + bills[1] * tips[1])
totals.push(bills[2] + bills[2] * tips[2])

console.log(totals);