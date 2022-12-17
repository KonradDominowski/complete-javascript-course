const bill = Number(prompt(`How big is the bill?`))

let tip = 50 <= bill && bill <= 300 ? 0.15 : 0.20

console.log(`Total is ${bill + bill * tip}`);