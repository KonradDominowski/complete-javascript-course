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

{
	console.log('EXERCISE 9 - Find Min');

	const findMin = (...numbers) => {
		// Funkcja min nie przyjmuje tablicy danych tylko pojedyncze argumenty, 
		// dlatego trzeba użyć operatora rest żeby rozczłonkować listę argumentów

		return Math.min(...numbers);
	}

	console.log(findMin(1, 2, 5, 7));  // 1
	console.log(findMin(1, 2, -7, 0, 5, 7, -20));  // -20

	console.log('----------');
}

{
	console.log('EXERCISE 10 - Merge Two Objects');

	const object1 = {
		'name': 'Konrad',
		'lastName': 'Dominowski'
	}

	const object2 = {
		'dateOfBirth': '11-03-1994'
	};

	const mergeTwoObjects = (obj1, obj2) => {
		return { ...obj1, ...obj2 }
	}

	console.log(mergeTwoObjects(object1, object2));

	console.log('----------')
}

{
	console.log('EXERCISE 11 - Double and Return Arrays');

	let arra1 = [1, 2, 3]
	let arra2 = [1, 2, 4]
	let arra3 = [5, 6, 7]
	let arra4 = [1, 2, 4]

	const doubleAndReturnArgs = (array, ...numbers) => {
		const doubled = numbers.reduce((number, el) => [...number, el * 2], [])
		return [...array, ...doubled]
	}

	console.log(doubleAndReturnArgs(arra1, 2, 4, 5));

	console.log('----------')
}

{
	console.log('EXERSICE 12 - Remove random element');

	const removeRandomElement = (...arr) => {
		const index = Math.trunc(Math.random() * arr.length)
		console.log(arr[index]);
		arr.splice(index, 1, 'abc')
		return arr
	}

	let arra1 = [1, 2, 3, 4, 5, 6, 7]

	console.log(removeRandomElement(...arra1));


	console.log('----------')
}

{
	console.log('EXERCISE 13 - Add new key value pair to an object');

	const object1 = {
		'name': 'Konrad',
		'lastName': 'Dominowski'
	}


	const newKeyValue = (obj1, newKeyName, newValue) => {
		return {
			...obj1,
			[newKeyName]: newValue
		}
	}

	console.log(newKeyValue(object1, 'age', 28));

	console.log('----------')

}

{
	console.log('EXERCISE 14 - Remove a Key');

	const object1 = {
		'name': 'Konrad',
		'lastName': 'Dominowski'
	}

	const removeKey = (obj1, key) => delete obj1[key]

	removeKey(object1, 'name')

	console.log(object1);

	console.log('----------')
}

