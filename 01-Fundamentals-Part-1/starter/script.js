// Values and Variables

// let country = "Poland";
// let continent = "Europe";
let population = 38000000;

// console.log(country);
// console.log(continent);
console.log(population);


// Data Types

let isIsland = false;
let language;

console.log(isIsland);
console.log(language);


// let, const and var

language = "Polish";
const country = "Poland";
const continent = "Europe";


// Basic Operators

console.log(population / 2);
population++;
console.log(population);

let finlandPopulation = 6000000;
const averagePopulation = 33000000;

console.log(population > finlandPopulation);
console.log(population > averagePopulation);

let description =
    country +
    " is in " +
    continent +
    ", and its' " +
    population +
    " people speak " +
    language +
    ".";

let description2 = `${country} is in ${continent}, and its' ${population} people speak ${language}.`;

console.log(description);
console.log(description2);


// Taking Decisions: if / else Statements

if (population > averagePopulation) {
    console.log(`${country} population is above average.`);
} else {
    console.log(`${country} population is ${averagePopulation - population} below average.`);
}


// Type Conversion and Coercion

console.log('9' - '5');  // 4
console.log('19' - '13' + '17');  // 617
console.log('19' - '13' + 17);  // 23
console.log('123' < 57);  // false
console.log(5 + 6 + '4' + 9 - 4 - 2);  // 1143


/*
5 falsy values:

0,
'',
undefined,
null,
NaN

*/


// Equality Operators: == vs. ===

// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'))

// if (numNeighbours === 1) {
//     console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//     console.log(`More than 1 border`);
// } else {
//     console.log(`No borders`);
// }


// Logical operators

console.log(language);
console.log(language === 'English');
console.log(population);
console.log(population < 50000000);
console.log(isIsland);

if (language === 'Polish' && population < 50000000 && !isIsland) {
    console.log(`This country if for Sarah`);
}

// The switch statements

switch (language) {
    case 'Polish':
        console.log('Polish is great');
        break;
    case 'english':
        console.log('3rd place');
        break
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break
    case 'spanish':
        console.log('second place');
        break
    default:
        console.log('Unknown language');
}

// The Conditional (Ternary) Operator

let aboveOrBelow = population > 33000000 ? 'above' : 'below';

console.log(`${country} population is ${aboveOrBelow} average.`);