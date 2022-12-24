'use strict'
{
	console.log('EXERCISE 1 - Calculate sum');

	const calcSum = function (...args) {
		/* 
		Metoda reduce wywołana na tablicy przyjmuje 
		jako argument funkcję, która zostanie wykonana 
		na każdym elemencie tablicy. W tym wypadku zwróci 
		sumę wszystkich elementów.
		*/
		return args.reduce((total, el) => total + el, 0)
	}

	console.log(calcSum(1, 2, 3, 6));

	console.log('----------');
}

{
	console.log('EXERCISE 2 - Calculate sum only if element is a number');

	const sumOnlyNumbers = function (...args) {
		/*
		W tym wypadku reduce sumuje tylko te elementy,
		które są liczbaami.
		*/
		return args.reduce((total, el) => {
			return (!isNaN(el)) ? total += el : total
		}, 0)
	}

	console.log(sumOnlyNumbers(1, 2, 'bla', 'sda', 7, 5, 6));;

	console.log('----------');
}

{
	console.log('Exercise 3 - Count arguments');

	const countTheArguments = function (...args) {
		return args.reduce((total, el) => total += 1, 0)
	}

	console.log(countTheArguments(1, 2, 8)); // 3
	console.log(countTheArguments('cat', 'dog', 'frog', 'bear'));  // 4

	console.log('----------');
}

{
	console.log('EXERCISE 4 - Combine two arrays');

	const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2]

	let arra1 = [1, 2, 3]
	let arra2 = [1, 2, 4]

	console.log(combineTwoArrays(arra1, arra2));

	console.log('----------');
}

{
	console.log('EXERCISE 5 - Sum of every other element');

	const sumEveryOther = function (...args) {
		return args.reduce((total, el, index) => {
			return (index % 2 === 0) ? total += el : total
		}, 0)
	}

	console.log(sumEveryOther(5, 6, 3, 4, 1)); //9
	console.log(sumEveryOther(10, 2, 11)); //21

	console.log('----------');
}

{
	console.log('EXERCISE 6 - Filter the uniques');

	const onlyUniques = function (...args) {
		return args.reduce((uniques, el) => {
			if (!uniques.includes(el)) {
				uniques.push(el)
			}
			return uniques
		}, [])
	}

	console.log(onlyUniques('cat', 'cat', 'dog', 'pig')); //['cat', 'dog', 'pig']
	console.log(onlyUniques(1, 4, 7, 1, 2, 7, 4)); //[1, 4, 7, 2]

	console.log('----------');
}

{
	console.log('EXERCISE 7 - Combine all arrays');

	const combineAllArrays = function (...args) {
		return args.reduce((totalArray, el) => [...totalArray, ...el], [])
	}

	let arra1 = [1, 2, 3]
	let arra2 = [1, 2, 4]
	let arra3 = [5, 6, 7]
	let arra4 = [1, 2, 4]

	console.log(combineAllArrays(arra1, arra2, arra4, arra3));

	console.log('----------');
}

{
	console.log('EXERCISE 8 - Sum of squares');

	const sumOfSquares = function (...args) {
		return args.reduce((sumOfSquares, el) => sumOfSquares + el ** 2, 0)

	}

	console.log(sumOfSquares(2, 4, 3));  // 29
	console.log(sumOfSquares(1, 2));  // 5

	console.log('----------');
}