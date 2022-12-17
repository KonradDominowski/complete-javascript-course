'use strict';

// Values and Variables

// let country = "Poland";
// let continent = "Europe";
let population = 38000000;

// console.log(country);
// console.log(continent);
// console.log(population);


// Data Types

let isIsland = false;
let language;

// console.log(isIsland);
// console.log(language);


// let, const and var

language = "Polish";
const country = "Poland";
const continent = "Europe";


// Basic Operators

// console.log(population / 2);
population++;
// console.log(population);

let finlandPopulation = 6000000;
const averagePopulation = 33000000;

// console.log(population > finlandPopulation);
// console.log(population > averagePopulation);

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

// console.log(description);
// console.log(description2);


// Taking Decisions: if / else Statements

if (population > averagePopulation) {
    // console.log(`${country} population is above average.`);
} else {
    // console.log(`${country} population is ${averagePopulation - population} below average.`);
}


// Type Conversion and Coercion

// console.log('9' - '5');  // 4
// console.log('19' - '13' + '17');  // 617
// console.log('19' - '13' + 17);  // 23
// console.log('123' < 57);  // false
// console.log(5 + 6 + '4' + 9 - 4 - 2);  // 1143


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
// console.log(`Only 1 border`);
// // } else if (numNeighbours > 1) {
// console.log(`More than 1 border`);
// // } else {
// console.log(`No borders`);
// // }


// Logical operators

// console.log(language);
// console.log(language === 'English');
// console.log(population);
// console.log(population < 50000000);
// console.log(isIsland);

if (language === 'Polish' && population < 50000000 && !isIsland) {
    // console.log(`This country if for Sarah`);
}

// The switch statements

switch (language) {
    case 'Polish':
        // console.log('Polish is great');
        break;
    case 'english':
        // console.log('3rd place');
        break
    case 'chinese':
    case 'mandarin':
        // console.log('MOST number of native speakers');
        break
    case 'spanish':
        // console.log('second place');
        break
    default:
    // console.log('Unknown language');
}

// The Conditional (Ternary) Operator

let aboveOrBelow = population > 33000000 ? 'above' : 'below';

// console.log(`${country} population is ${aboveOrBelow} average.`);


// Functions

function describeCountry(country, population, capitalCity) {
    return `${country}, has ${population} people and its capital is ${capitalCity}.`
}

console.log(describeCountry(country, population, 'Warsaw'));
console.log(describeCountry('Finland', 28000000, 'Helsinki'));


//  Function Declarations vs. Expressions 

function percentageOfWorld1(population) {
    return `${(population / 7900000000 * 100).toFixed(2)} % of world population.`
}

console.log('Classic function.');
console.log(percentageOfWorld1(population));
console.log(percentageOfWorld1(1441000000));
console.log(percentageOfWorld1(30000000));

const percentageOfWorld2 = function (population) {
    return `${(population / 7900000000 * 100).toFixed(2)} % of world population.`
}

console.log('Expression function.');
console.log(percentageOfWorld2(population));
console.log(percentageOfWorld2(1441000000));
console.log(percentageOfWorld2(30000000));


// Arrow Functions

const percentageOfWorld3 = (population) => `${(population / 7900000000 * 100).toFixed(2)} % of world population.`

console.log('Arrow function.');
console.log(percentageOfWorld3(population));
console.log(percentageOfWorld3(1441000000));
console.log(percentageOfWorld3(30000000));


// Functions Calling Other Functions

const describePopulation = (country, population) => `${country} has population of ${population}, which is ${percentageOfWorld3(population)}`

console.log(describePopulation(country, population));


// Introduction to Arrays

const populations = new Array(10000000, 15000000, 38000000, 45000000)

console.log(populations.length === 4);

const percentages = new Array(
    percentageOfWorld3(populations[0]),
    percentageOfWorld3(populations[1]),
    percentageOfWorld3(populations[2]),
    percentageOfWorld3(populations[3]),
)

console.log(percentages.at(-1));


// Basic Array Operations (Methods)

const neighbours = new Array('Czech Republic', 'Slovakia', 'Ukraine', 'Germany', 'Belarus', 'Russia', 'Lithuania')
console.log(neighbours);

neighbours.push('Utopia')
console.log(neighbours);

neighbours.pop()
console.log(neighbours);

if (neighbours.includes('Germany')) {
    console.log('Country in central Europe');
} else {
    console.log('Country not in central Europe.');
}

neighbours[neighbours.indexOf('Slovakia')] = 'Sloviakium'
console.log(neighbours);


//  Introduction to Objects

let myCountry = {
    'country': country,
    'capital': 'Warsaw',
    'language': language,
    'population': population,
    'neighbours': neighbours,
}

// Dot vs. Bracket Notation

console.log(`${myCountry['country']} has ${myCountry.population} ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring country and a capital called ${myCountry.capital}`);

myCountry.population += 2000000
myCountry.population -= 1
console.log(myCountry.population);

myCountry['population'] -= 2000000
console.log(myCountry.population);


// Iteration: The for Loop

for (let i = 1; i <= 10; i++) {
    console.log(`Voter number ${i}`);
}


// Looping Arrays, Breaking and Continuing 

const percentageOfWorld4 = (population) => Number((population / 7900000000 * 100).toFixed(2))

let percentages2 = new Array()

for (let el = 0; el < populations.length; el++) {
    percentages2[el] = percentageOfWorld3(populations[el])
}

console.log(percentages);
console.log(percentages2);