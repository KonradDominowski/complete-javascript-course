'usestrict'

// Challenge 1

{
	const checkDogs = function (arr1, arr2) {
		let all = [...arr1.slice(1, -2), ...arr2]

		all.forEach((dog, i) => {
			const adultOrPuppy = (dog >= 3) ? `adult and is ${dog} years old` : `still a puppy`
			console.log(`Dog number ${i + 1} is ${adultOrPuppy}.`)
		})

	}

	checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
	checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])
}
// Challenge 2 & 3 

{
	const calcAverageHumanAge = function (arr1) {

		let humanAges =
			arr1.map(age => (age <= 2) ? (2 * age) : (16 + 4 * age))
				.filter(age => age >= 18)
				.reduce((avgAge, age, i, arr) => avgAge + age / arr.length, 0)

		console.log(humanAges);
	}


	calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
	calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
}
console.log('----------')

// Challenge 4
{
	const dogs = [
		{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
		{ weight: 8, curFood: 200, owners: ['Matilda'] },
		{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
		{ weight: 32, curFood: 340, owners: ['Michael'] },
	];

	dogs.forEach((dog, i) => {
		dog.recommendedFood = Number((dog.weight ** 0.75 * 28).toFixed(0))
	})


	console.log(dogs);

	let sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'))

	console.log(sarahDog);
	console.log(sarahDog.curFood > sarahDog.recommendedFood ? `Sarah's dog eats too much.` : `Sarah's dog doesn't eat too much.`);

	let fatDogOwners = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners)
	let slimDogOwners = dogs.filter(dog => dog.curFood < dog.recommendedFood).flatMap(dog => dog.owners)

	console.log('fatDogOwners:', fatDogOwners)
	console.log('slimDogOwners:', slimDogOwners)

	const fatOwnersString = fatDogOwners.map(owner => owner += `'s`).join(' and ')
	console.log(`${fatOwnersString} dogs eat too much.`);

	const slimOwnersString = slimDogOwners.map(owner => owner += `'s`).join(' and ')
	console.log(`${slimOwnersString} dogs don't eat too much.`);

	let eatingJustRight = dogs.some(dog => dog.curFood === dog.recommendedFood)
	console.log('eatingJustRight:', eatingJustRight)

	let eatingOkay = dogs.some(dog => (dog.recommendedFood * 0.9) < dog.curFood && dog.curFood < (dog.recommendedFood * 1.1))
	console.log('eatingOkay:', eatingOkay)

	dogs.forEach(dog => {
		console.log(`${dog.recommendedFood * 0.9} - ${dog.recommendedFood * 1.1} ${dog.curFood}`);
	})

	let dogsEatingOkay = dogs.filter(dog => (dog.recommendedFood * 0.9) < dog.curFood && dog.curFood < (dog.recommendedFood * 1.1))
	console.log('dogsEatingOkay:', dogsEatingOkay)

	let sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
	console.log(sortedDogs);
}

