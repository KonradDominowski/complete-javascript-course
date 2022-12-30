'usestrict'

const checkDogs = function (arr1, arr2) {
	let all = [...arr1.slice(1, -2), ...arr2]

	all.forEach((dog, i) => {
		const adultOrPuppy = (dog >= 3) ? `adult and is ${dog} years old` : `still a puppy`
		console.log(`Dog number ${i + 1} is ${adultOrPuppy}.`)
	})

}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4])