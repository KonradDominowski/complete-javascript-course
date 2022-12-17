'use strict'

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []
const calcTip = bill => (50 <= bill) && (bill <= 300) ? bill * 0.15 : bill * 0.20

for (const bill of bills) {
    tips.push(calcTip(bill));
}

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i])
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr) {
    let sum = 0
    for (const el of arr) {
        sum += el
    }
    return sum
}

console.log(`Bills: ${calcAverage(bills)}`);
console.log(`tips: ${calcAverage(tips)}`);
console.log(`Totals: ${calcAverage(totals)}`);